import React, { useState, useEffect } from 'react';
import axios from 'axios';



function MotivationalQuotes() {
    const [quote, setQuote] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const storedQuote = localStorage.getItem('quote');
        const storedDate = localStorage.getItem('quoteDate');
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        if (storedQuote && storedDate === today) {
            setQuote(storedQuote);
        } else {
            fetchQuote();
        }
    }, []);

    async function fetchQuote() {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            const newQuote = response.data.content;
            setQuote(newQuote);
            setError(false);
            const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
            localStorage.setItem('quote', newQuote);
            localStorage.setItem('quoteDate', today);
        } catch (error) {
            console.error('Error fetching the quote:', error);
            setQuote('Keep pushing forward and stay positive!');
            setError(true);
        }
    }   

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
