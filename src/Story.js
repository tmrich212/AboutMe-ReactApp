import { useState } from "react";

const Story = () => {
    const [story, setStory] = useState("What's my story?");

    const handleClickStory = () => {
        setStory("My story starts in 2018. I started learning to code out of interest from a course I took in my last semester of college. I started with Codecademy after remembering that was the resource we used in class. I started learning HTML, CSS, and then the dreaded Javascript. As I started to learn I realized that I wouldn't mind this being my job. I've been coding ever since. I've worked tirelessly at trying to nail down the key skills in between working a demanding job. It's now 2023 and this is my first React App using useState and Click Events. How did I do?");
    }

    return ( 
        <div className="content">
            <div className="story">
                <h2>{ story }</h2>
                <button onClick={ handleClickStory }>About Me</button>
            </div>
        </div>
     );
}
 
export default Story;