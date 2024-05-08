import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-3xl font-bold w-1/3">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>
            <div>
                <button className="bg-white text-black p-2 px-8 rounded-lg text-xl font-bold hover:opacity-80">
                    Play
                </button >
                <button className="bg-gray-600 text-white p-2 px-8 rounded-lg bg-opacity-70 text-xl mx-2 hover:opacity-80">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;