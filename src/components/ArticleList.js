import React from 'react';
import Article from '../components/Article';


const ArticleList = ({articles, searchedKeyword}) => {

    const articleItems = articles.map((article, index) => {
        return <Article article={article} key={index} />
    })

    return(
        <section>
            <h3>Results for: {searchedKeyword}</h3>
            <ul>
                {articleItems}
            </ul>
        </section>
    )
};

export default ArticleList;