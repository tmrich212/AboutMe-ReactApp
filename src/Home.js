import { useState } from "react";
import Framework from "./Framework";
import Story from "./Story";

const Home = () => {
    const [name, setName] = useState('Developer');

    const handleClick = () => {
        setName('Taylor');
    }

    return (  
        <div className="content">
            <h1>Learn About Me</h1>
            <h2>{ name }</h2>
            <button onClick={handleClick}>MY NAME</button>

            <div className="framework">
                <Framework />
            </div>

            <div className="story">
                <Story />
            </div>
       </div>
    );
}
 
export default Home;