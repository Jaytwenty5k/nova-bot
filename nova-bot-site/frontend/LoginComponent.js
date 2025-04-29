import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function LoginComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        // Check if user is already logged in
        const storedUser = localStorage.getItem('userProfile');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setProfilePicture(parsedUser.profilePicture);
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async () => {
        // Simulate Discord login
        const userData = await fakeDiscordLogin(); // Replace with actual Discord API call
        localStorage.setItem('userProfile', JSON.stringify(userData));
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
                <Image
                    src={profilePicture || '/assets/icons/default-avatar.png'}
                    alt="Discord Profile"
                    width={50}
                    height={50}
                    style={{ borderRadius: '50%' }}
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
        profilePicture: 'https://cdn.discordapp.com/avatars/1234567890/avatar.png',
        username: 'DiscordUser',
    };
}

export default LoginComponent;
