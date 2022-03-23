import React from "react";

export default function Meaning(props) {
    return (
        <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definiton, index) {
                return (
                <div key={index}>
                    {definiton.definition}
                    <br />
                    <em>{definiton.expample}</em>
                </div>
                );
            })}
        </div>
    );
}