import React from 'react';
import Article from '../components/Article';


const ArticleList = ({articles, searchedKeyword, totalResults, changePage, filterByDate}) => {

    const articleItems = articles.map((article) => {
        return <Article article={article} key={article.id} />
    });

    const handleClick = (evt) => {
        changePage(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        filterByDate(evt.target.fromDate.value, evt.target.toDate.value);
    };

    return(
        <section>
            <p>{totalResults.total} results</p>
            <h3>Showing results for: {searchedKeyword}</h3>
            <p>Filter articles by date:</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fromDate'>Date from:</label>
                <input type="date" name="fromDate"></input>
                <label htmlFor='toDate'>to:</label>
                <input type="date" name="toDate"></input>
                <input type="submit"></input>
            </form>
            <ul>
                {articleItems}
            </ul>
            <p>Page {totalResults.currentPage} of {totalResults.pages}</p>
            <button onClick={handleClick} value="previous" disabled={totalResults.currentPage === 1}>Previous Page</button>
            <button onClick={handleClick} value="next" disabled={totalResults.currentPage === totalResults.pages}>Next Page</button>
        </section>
    );
};

export default ArticleList;