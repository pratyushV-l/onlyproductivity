"use client";

import React, { useState, useEffect } from "react";
import "./RandomQuote.css"; // Import the CSS file

const RandomQuote: React.FC = () => {
    const [quote, setQuote] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setQuote(data.content))
            .catch((error) => setError(error.message));
    }, []);

    return (
        <div className="quote-container">
            <h2>Random Quote</h2>
            {error ? <p className="error">Error: {error}</p> : <p className="quote">{quote}</p>}
        </div>
    );
}

export default RandomQuote;