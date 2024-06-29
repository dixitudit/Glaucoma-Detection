import React, { useState } from 'react';
import axios from 'axios';

function Diagnosis() {
  const [formData, setFormData] = useState({
    rl: '',
    rnfl4mean: '',
    psd: '',
    md: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to backend for model prediction
    try {
      const response = await axios.post('/api/diagnosis', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Diagnosis</h1>
      <form onSubmit={handleSubmit}>
        <label>
          RL:
          <input type="text" name="rl" value={formData.rl} onChange={handleChange} />
        </label>
        <label>
          RNFL4.mean:
          <input type="text" name="rnfl4mean" value={formData.rnfl4mean} onChange={handleChange} />
        </label>
        <label>
          PSD:
          <input type="text" name="psd" value={formData.psd} onChange={handleChange} />
        </label>
        <label>
          MD:
          <input type="text" name="md" value={formData.md} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Diagnosis;
