// React Component: FeedbackForm.js

import React, { useState } from 'react';

const Feedback = () => {
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
        const token = "7659807433:AAF9tbZPQU-EyTHNoSsyEDqDv73guH2Tklw";
        const chat_id = "-1002424674291";
        const my_text = `Email: ${formData.email}\nMessage: ${formData.textarea}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    console.log("Message sent successfully!");
                } else {
                    console.error("Error sending message:", response.statusText);
                }
            })
            .catch((error) => console.error("Fetch error:", error));

        setFormData({
            email: '',
            textarea: '',
        }); 
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
};

export default Feedback;
