// import React, { useState } from 'react';

// const FeedSend = () => {

//     const [text, setText] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const token = "7942519289:AAHbS0Rk_bdgRUt97EANhxNcjg85GfwyFEQ";
//         const chat_id = "-4644648528";
//         const my_text = text;
//         const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

//         fetch(url)
//             .then((response) => {
//                 if (response.ok) {
//                     console.log("Message sent successfully!");
//                 } else {
//                     console.error("Error sending message:", response.statusText);
//                 }
//             })
//             .catch((error) => console.error("Fetch error:", error));

//         setText(""); // Clear the input field
//     };

//   return (
//     <form onSubmit={handleSubmit}>
//     <label htmlFor="text">Enter Text:</label>
//     <input
//         id="text"
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         required
//     />
//     <button type="submit">Send</button>
// </form>
// );
// };


// export default FeedSend
