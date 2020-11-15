import React, { useState } from 'react';
import './Timeline.css'
import TweeterLogo from '../assets/twitterLogo.png'

function Timeline() {
    const [textArea, setTextArea] = useState('')

    const handleInputChange = (e) => {
        setTextArea(e.target.value)
    }
    const handleNewTweet = (e) => {
        if (e.keyCode !== 13) return;
        e.preventDefault();

        const content = textArea;
        const author = localStorage.getItem('username')

        console.log(content, author)
    }

    return (
        <div className="timeline-wrapper">
            <img src={TweeterLogo} alt="..." style={{ width: '24px', height: '24px' }} />

            <form>
                <input
                    type="text"
                    value={textArea}
                    onChange={handleInputChange}
                    onKeyDown={handleNewTweet}
                    placeholder="oque está acontecendo ?"
                />
            </form>

        </div>
    )
}

export default Timeline;