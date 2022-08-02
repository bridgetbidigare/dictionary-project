import React from "react";
import './Phonetics.css';

export default function Phonetics(props) {
    return (
        <div className="phonetics">
            <a href={props.phonetic.audio}>Listen</a>
            <br />
            <span>{props.phonetic.text}</span>
        </div>
    );
}