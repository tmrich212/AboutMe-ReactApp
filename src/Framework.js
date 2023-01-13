import { useState } from "react";

const Framework = () => {
    const [framework, setFramework] = useState('Front End or Back End?');

    const handleClickAbout = () => {
        setFramework('Front End!');
    }

    return ( 
        <div className="content about">
            <h2>{ framework }</h2>
            <button onClick={ handleClickAbout }>FRAMEWORK</button>
        </div>
     );
}
 
export default Framework;