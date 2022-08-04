import React, {useState, useEffect} from 'react';
import ArticleList from '../components/ArticleList';
import ArticleSearch from '../components/ArticleSearch';

const GuardianContainer = () => {

    const [apiUrl, setApiUrl] = useState('');
    const [articles, setArticles] = useState([]);
    const [searchedKeyword, setSearchedKeyword] = useState('');

    useEffect(() => {
        const getArticles = function() {
            fetch(apiUrl)
            .then(res => res.json())
            .then(function(data){
                setArticles(data.response.results)
            });
        };
        getArticles()
    }, [apiUrl]);


    const onKeywordSearched = (searchedKeyword) => {
        let changedUrl = `https://content.guardianapis.com/search?page=1&q=${searchedKeyword}&api-key=test`
        setApiUrl(changedUrl);
        setSearchedKeyword(searchedKeyword);
    };
    
    return(
        <section>
            <ArticleSearch onKeywordSearched={onKeywordSearched}/>
            {searchedKeyword ? <ArticleList articles={articles} searchedKeyword={searchedKeyword}/> : null}
        </section>
    )
};

export default GuardianContainer;