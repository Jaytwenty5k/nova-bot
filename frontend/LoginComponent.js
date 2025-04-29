import React, { useState, useEffect } from 'react';

function LoginComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        // Check if user is already logged in
        const storedProfilePicture = localStorage.getItem('profilePicture');
        if (storedProfilePicture) {
            setIsLoggedIn(true);
            setProfilePicture(storedProfilePicture);
        }
    }, []);

    const handleLogin = async () => {
        // Simulate Discord login
        const userData = await fakeDiscordLogin(); // Replace with actual Discord API call
        localStorage.setItem('profilePicture', userData.profilePicture);
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
                <img src={profilePicture} alt="Discord Profile" style={{ borderRadius: '50%' }} />
            ) : (
                <button onClick={handleLogin}>Login with Discord</button>
            )}
        </div>
    );
}

// Mock function for Discord login
async function fakeDiscordLogin() {
    return {
        profilePicture: 'https://cdn.discordapp.com/avatars/1234567890/avatar.png',
    };
}

export default LoginComponent;
