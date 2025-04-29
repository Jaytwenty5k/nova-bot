import React from 'react';

function LoginComponent({ onLogin }) {
    const handleLogin = () => {
        // Simuliere einen erfolgreichen Login mit Discord-Daten
        const mockUser = {
            name: 'DiscordUser',
            avatar: 'https://cdn.discordapp.com/avatars/mock-avatar.png',
        };
        onLogin(mockUser); // Übergibt die Benutzerdaten an die App
    };

    return <button onClick={handleLogin}>Login with Discord</button>;
}

export default LoginComponent;