import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Results() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('/api/results');
        setResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div>
      <h1>Diagnosis Results</h1>
      {results ? (
        <div>
          <p>{results.message}</p>
          {/* Display more results information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Results;
