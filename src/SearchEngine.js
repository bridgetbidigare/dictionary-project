import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './SearchEngine.css';

export default function SearchEngine(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey = "563492ad6f9170000100000183c7f1db51c646619b9985865f518fe1";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
       setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="search" className="searchBar" placeholder="Search" onChange={handleKeywordChange} />
                    <input
                        type="submit"
                        value="🔎"
                        className="magnifier"
                        title="Search"
                    />
                    <Results results={results} />
                    <Photos photos={photos} />
                </form>
            </div>
        )
    } else {
        load();
        return "Loading";
    }
}
