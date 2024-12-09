import React, { useState } from 'react';


const Feedback = () => { // Komponent nomi to'g'irlandi
  const [formData, setFormData] = useState({
    email: '',
    textarea: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form yuborildi:', formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Kompaniya Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Emailingizni kiriting"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Qanday yordam bera olamiz?</label>
          <textarea
            id="textarea"
            name="textarea"
            placeholder="Xabaringizni yozing"
            rows="10"
            value={formData.textarea}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="form-submit-btn" type="submit">
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default Feedback;
