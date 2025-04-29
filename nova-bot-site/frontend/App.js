import React, { useState } from 'react';
import LoginComponent from './components/LoginComponent';

function App() {
    const [user, setUser] = useState(null); // Zustand für den Benutzer

    return (
        <div>
            <h1>Welcome to Nova Bot</h1>
            {user ? (
                <div>
                    <img src={user.avatar} alt="Discord Avatar" style={{ width: '50px', borderRadius: '50%' }} />
                    <span>{user.name}</span>
                </div>
            ) : (
                <LoginComponent onLogin={setUser} />
            )}
        </div>
    );
}

export default App;