import React from 'react';

const Article = ({article}) => {

    return(
        <li>
            <p>Date: {article.webPublicationDate}</p>
            <p>Category: {article.pillarName} / {article.sectionName}</p>
            <h3><a href={article.webUrl} target='_blank' rel='noreferrer'>{article.webTitle}</a></h3>
        </li>
    );
};

export default Article;