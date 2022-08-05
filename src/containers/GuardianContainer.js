import React, {useState, useEffect} from 'react';
import ArticleList from '../components/ArticleList';
import ArticleSearch from '../components/ArticleSearch';

const GuardianContainer = () => {

    const [fetchUrl, setFetchUrl] = useState('');
    const [articles, setArticles] = useState([]);
    const [searchedKeyword, setSearchedKeyword] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const getArticles = () => {
            fetch(fetchUrl)
            .then(res => res.json())
            .then((data) => {
                setArticles(data.response.results)
                setTotalResults(data.response)
            });
        };
        getArticles()
    }, [fetchUrl]);


    // q=${query}
    const onKeywordSearched = (searchedKeyword) => {
        let changedUrl = `https://content.guardianapis.com/search?q=${searchedKeyword}&page=1&api-key=test`
        setFetchUrl(changedUrl);
        setSearchedKeyword(searchedKeyword);
    };

    //.currentPage + .pages
    const changePage = (buttonValue) => {
        let pageNumber;
        if (buttonValue === 'previous'){
            if (totalResults.currentPage > 1){
                pageNumber = (totalResults.currentPage - 1)
            } else {
                return;
            };
        } else {
            if (totalResults.currentPage === totalResults.pages){
                return;
            }
            pageNumber = (totalResults.currentPage + 1)
        };
        setFetchUrl(`https://content.guardianapis.com/search?page=${pageNumber}&q=${searchedKeyword}&api-key=test`)
        setCurrentPage(pageNumber)
    };
    
    return(
        <section>
            <ArticleSearch onKeywordSearched={onKeywordSearched}/>
            {searchedKeyword ? <ArticleList articles={articles} searchedKeyword={searchedKeyword} totalResults={totalResults} changePage={changePage}/> : null}
        </section>
    )
};

export default GuardianContainer;