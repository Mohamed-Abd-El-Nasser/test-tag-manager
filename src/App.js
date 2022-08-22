/* eslint-disable no-undef */
import "./App.css";
import React, { useEffect } from "react";

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
 
        document.querySelector('#gb_container_8247439015').addEventListener('change',()=>{
            console.log("test");
        })
        document.body.addEventListener('change',()=>{
            console.log("changed");
        })
          
        </script>
    `;

  // const value = `<h1>Helloooo</h1>`;
  // const [t, sett] = useState(
  //     document.querySelector('#gb_container_8247439015').childElementCount | 0
  // );
  useEffect(() => {
    const parsedHTML = document.createRange().createContextualFragment(value);
    // ref.current.appendChild(parsedHTML);
    document.body.appendChild(parsedHTML);
  }, []);
  // useEffect(() => {
  //     sett(
  //         document.querySelector('#gb_container_8247439015').childElementCount
  //     );

  //     console.log(
  //         'test2',
  //         document.querySelector('#gb_container_8247439015')
  //     );

  //     console.log(t);
  // }, [t]);

  return (
    <div>
      <button
        onClick={() => {
          GbSdk.toggle();
        }}
      >
        TOGGLE ME
      </button>
    </div>
  );
}

export default App;
