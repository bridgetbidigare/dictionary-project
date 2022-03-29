import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function SearchEngine() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey = "563492ad6f9170000100000183c7f1db51c646619b9985865f518fe1";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
       setKeyword(event.target.value);
    }

    return (
        <div>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
                <Results results={results} />
                <Photos photos={photos} />
            </form>
        </div>
    )
}
