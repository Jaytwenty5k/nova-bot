import React, { useState, useEffect } from 'react';

function LoginComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        // Check if user is already logged in
        const userId = localStorage.getItem('userId');
        if (userId) {
            fetch(`/api/getUser/${userId}`)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error('User not found');
                })
                .then((data) => {
                    if (data.profilePicture) {
                        setIsLoggedIn(true);
                        setProfilePicture(data.profilePicture);
                    }
                })
                .catch((err) => console.error(err));
        }
    }, []);

    const handleLogin = async () => {
        // Simulate Discord login
        const userData = await fakeDiscordLogin(); // Replace with actual Discord API call
        localStorage.setItem('userId', userData.id);
        setProfilePicture(userData.profilePicture);
        setIsLoggedIn(true);

        // Save to temporary database
        await fetch('/api/saveUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
    };

    return (
        <div>
            {isLoggedIn ? (
                <img
                    src={profilePicture}
                    alt="Discord Profile"
                    style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                />
            ) : (
                <button onClick={handleLogin}>Login with Discord</button>
            )}
        </div>
    );
}

// Mock function for Discord login
async function fakeDiscordLogin() {
    return {
        id: '1234567890',
        profilePicture: 'https://cdn.discordapp.com/avatars/1234567890/avatar.png',
    };
}

export default LoginComponent;
