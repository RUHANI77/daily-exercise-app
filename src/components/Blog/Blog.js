import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h2>Question Answers:</h2>
                <div className="blogs">
                    <h3>How does react work?</h3>
                    <p>React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
                </div>
                <div className="blogs">
                    <h3>What are the differences between props and state?</h3>
                    <p>The difference is which component is the data’s owner. Locally owned and updated state is controlled by the component itself. Props are read-only and owned by a parent component.</p>
                </div>
                <div className="blogs">
                    <h3>Why should we use useEffects()?</h3>
                    <p>1. Suppose you are fetching some data online to display movie titles, ratings and you have used handler(Function with the synthetic event) or used inline Functions to get that data.So, what will happen is your component rendering will be stuck when the thread of execution reaches this point until you get the data from outside of the world.</p>
                    <p>2. By seeing the first point, we can move those side effects to the useEffect hook so that our components can load/render. After completing the rendering process, React Engine will fire the useEffect hook to run the side effects code and update the component data.</p>
                    <p>3. We should useEffect, when your component depends on the outside world data, and we can not guarantee that data will come or not (maybe the server is down there). So, Instead of throwing errors and stop other components from being rendered, move them into useEffect hook.</p>
                    <p>4. When you are using browser API (including Timer function, fetch API, local storage.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;