import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MotivationalQuotes() {
    const [quote, setQuote] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchQuote() {
            try {
                const response = await axios.get('https://api.quotable.io/random');
                setQuote(response.data.content);
                setError(false);
            } catch (error) {
                console.error('Error fetching the quote:', error);
                setQuote('Keep pushing forward and stay positive!');
                setError(true);
            }
        }
        fetchQuote();
    }, []);

    return (
        <div className="motivational-quotes">
            <h3 className="quote-title">Quote of the day</h3>
            <div className={`quote-box ${error ? 'error' : ''}`}>
                <p>{quote}</p>
            </div>
        </div>
    );
}

export default MotivationalQuotes;
