import React from 'react';


const Article = ({article}) => {

    return(
        <div>
            <h4><a href={article.webUrl} target='_blank' rel='noreferrer'>{article.webTitle}</a></h4>
            <p>{article.sectionName}</p>
            <p>{article.webPublicationDate}</p>
        </div>
    )
};

export default Article;