import './App.css';
import React, { useEffect } from 'react';

function App() {
    const value = `
    <script
            defer
            src="https://assets.gameball.co/widget/js/gameball-init.min.js"
        ></script>
    <script>
        window.GbLoadInit = function () {
            GbSdk.init({
                APIKey: '07edad92b86d4200ad2a13258dd1b0f2',
                lang: 'en',
                playerUniqueId: '',
                playerAttributes: {},
            });
        };
        console.log("test",document.querySelector('.toast_wrapper'));
        console.log("test2",document.querySelector('.gb_container_8247439015'));
        
        console.log("test3",document.getElementsByClassName('gb_container_8247439015'));
        </script>
    `;

    // const value = `<h1>Helloooo</h1>`;
    useEffect(() => {
        const parsedHTML = document
            .createRange()
            .createContextualFragment(value);
        // ref.current.appendChild(parsedHTML);
        document.body.appendChild(parsedHTML);
    }, []);

    return <div></div>;
}

export default App;
