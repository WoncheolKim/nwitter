import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

function App() {
    const [initialized, setInitialized] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
           if (user) {
            setIsLoggedIn(true);
            } else {
            setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, []);
            return (
    <>
        {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
        <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
    );
}

export default App;