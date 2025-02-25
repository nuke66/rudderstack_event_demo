import React, { useEffect, useState } from 'react';
import * as rudderstackEvents from './rudderstackEvents';

function SecondPage() {
  useEffect(() => {
    console.log('useEffect called');
    rudderstackEvents.page();
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    dob: '',
    medicare: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Traits can be filtered in RudderStack (destination -> configuration -> traits)
    rudderstackEvents.identify({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      address: formData.address,
      dob: formData.dob,
      medicare_number: formData.medicare
    });
  };

  return (
    <div>
      <h1>Second Page</h1>
      <p>This is the second page of the application.</p>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px 0' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="medicare">Medicare Number:</label>
          <input
            type="text"
            id="medicare"
            name="medicare"
            value={formData.medicare}
            onChange={handleChange}
            placeholder="Enter your Medicare number"
            style={{ display: 'block', width: '100%', padding: '8px' }}
          />
        </div>

        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SecondPage;