import React from "react";
import './Photos.css';

export default function Photos(props) {
    if (props.photos) {
        return (
            <div>
                {props.photos.map(function(photo, index) {
                    console.log(photo);
                    return (
                      <div>
                        <a href={photo.src.original} target="_blank" rel="noreferrer">
                            <img src={photo.src.landscape} key={index} alt={photo.alt} className="photos" />
                        </a>
                      </div>
                    );
                })}
            </div>
        )
    } else {
        return null;
    }
}