import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from 'react';

function App() {
    const ref = useRef();
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
        document.getElementById('btnIframe').remove();
        </script>
    `;

    // const value = `<h1>Helloooo</h1>`;
    useEffect(() => {
        const parsedHTML = document
            .createRange()
            .createContextualFragment(value);
        // ref.current.appendChild(parsedHTML);
        document.body.appendChild(parsedHTML);
        console.log('LLLLL', parsedHTML);

        if (document.getElementById('btnIframe') !== null) {
            document.getElementById('btnIframe').remove();
        } else {
            console.log('pepepepepo', document.getElementById('btnIframe'));
        }
        // const script = document.createElement('script');
        // script.innerText = value;
        // document.body.appendChild(script);
    }, []);
    // window.GbLoadInit = function () {
    //     // eslint-disable-next-line no-undef
    //     GbSdk.init({
    //         APIKey: '07edad92b86d4200ad2a13258dd1b0f2',
    //         lang: 'en',
    //         playerUniqueId: 'cl5qjkr30000r01l16s3ehs8p',
    //         playerAttributes: {},
    //     });
    //     if (typeof GbSdk === 'undefined') {
    //         console.log('GbLoadInit is undefined', typeof GbSdk);
    //     } else {
    //         console.log('yesssssssss its successss', typeof GbSdk);
    //     }
    // };

    // if (typeof window.GbLoadInit === 'undefined') {
    //     console.log('GbLoadInit is undefined');
    // } else {
    //     console.log('yesssssssss its successss', typeof window.GbLoadInit);
    // }
    const handleClick = () => {
        console.log('tests');
    };

    return (
        // <iframe
        //     // width={200}
        //     style={{ height: '100vh', width: '100%' }}
        //     srcDoc={value}
        //     ref={ref}
        // />
        <div>
            <button onClick={handleClick}>
                <a href="https://test-tag-manager.vercel.app/?gameball-deep=home">
                    open wedgit
                </a>
            </button>
        </div>
    );
}

export default App;
