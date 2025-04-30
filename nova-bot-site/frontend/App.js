import React, { useState } from 'react';
import LoginComponent from './components/LoginComponent';
import Image from 'next/image';

function App() {
    const [user, setUser] = useState(null); // Zustand für den Benutzer

    const handleLoginSuccess = (userData) => {
        if (userData && userData.name && userData.avatar) {
            setUser(userData);
        } else {
            console.error('Login fehlgeschlagen oder unvollständige Benutzerdaten erhalten.');
        }
    };

    return (
        <div>
            <h1>Welcome to Nova Bot</h1>
            {user ? (
                <div>
                    <Image
                        src={user.avatar || '/assets/icons/default-avatar.png'}
                        alt="Discord Avatar"
                        width={50}
                        height={50}
                        style={{ borderRadius: '50%' }}
                    />
                    <span>{user.name}</span>
                </div>
            ) : (
                <LoginComponent onLogin={handleLoginSuccess} />
            )}
        </div>
    );
}

export default App;