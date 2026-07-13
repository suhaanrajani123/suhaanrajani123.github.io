import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="contact-info">
            <h1>Contact Me</h1>
            <ul>
                <li>Email: <a href="mailto:suhaanrajani123@gmail.com">suhaanrajani123@gmail.com</a></li>
                <li>Phone: +91 9876543210</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/suhaanrajani123/" target="_blank" rel="noopener noreferrer">linkedin.com/in/suhaanrajani123/</a></li>
                <li>Github: <a href="https://github.com/suhaanrajani123" target="_blank" rel="noopener noreferrer">github.com/suhaanrajani123</a></li>
            </ul>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
