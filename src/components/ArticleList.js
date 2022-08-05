import React from 'react';
import Article from '../components/Article';


const ArticleList = ({articles, searchedKeyword, totalResults, changePage}) => {

    const articleItems = articles.map((article) => {
        return <Article article={article} key={article.id} />
    });

    const handleClick = (evt) => {
        changePage(evt.target.value)
    }


    return(
        <section>
            <p>{totalResults.total} results</p>
            <h3>Showing results for: {searchedKeyword}</h3>
            <ul>
                {articleItems}
            </ul>
            <p>Page {totalResults.currentPage} of {totalResults.pages}</p>
            <button onClick={handleClick} value="previous" disabled={totalResults.currentPage === 1}>Previous Page</button>
            <button onClick={handleClick} value="next" disabled={totalResults.currentPage === totalResults.pages}>Next Page</button>
        </section>
    )
};

export default ArticleList;