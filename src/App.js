import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from 'react';

function App() {
    const ref = useRef();
    const value = `
        window.GbLoadInit = function () {
            GbSdk.init({
                APIKey: '07edad92b86d4200ad2a13258dd1b0f2',
                lang: 'en',
                playerUniqueId: 'cl5qjkr30000r01l16s3ehs8p',
                playerAttributes: {},
            });
        };
        console.log('init gameball');
    `;

    // const value = `<h1>Helloooo</h1>`;
    useEffect(() => {
        //     // const parsedHTML = document
        //     //     .createRange()
        //     //     .createContextualFragment(value);
        //     // ref.current.appendChild(parsedHTML);
        //     // console.log('LLLLL', ref.current);
        const script = document.createElement('script');
        script.innerText = value;
        document.body.appendChild(script);
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

    return (
        // <iframe
        //     // width={200}
        //     style={{ height: '100vh', width: '100%' }}
        //     srcDoc={value}
        //     ref={ref}
        // />
        //<div ref={ref} style={{ height: '500px' }} />
        <div></div>
    );
}

export default App;
