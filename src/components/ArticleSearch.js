import React, {useState} from 'react';


const ArticleSearch = ({onKeywordSearched}) => {

    const [keywordChange, setKeywordChange] = useState('');

    const handleKeywordChange = (evt) => {
        setKeywordChange(evt.target.value);
    };

    const handleKeywordSubmit = (evt) => {
        evt.preventDefault();
        const keywordToChange = keywordChange.trim();
        onKeywordSearched(keywordToChange);
        setKeywordChange('');
    };

    return ( 
        <section className='form-container'>
            <form className='form' onSubmit={handleKeywordSubmit}>
            <input id='search'type='text' placeholder='Search here' autoFocus autoComplete='off' required value={keywordChange} onChange={handleKeywordChange}/>
            <input id='button' type='submit' value='Search'></input>
            </form>
        </section>
    );
};

export default ArticleSearch;