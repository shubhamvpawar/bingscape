import React from 'react'

const VideoTitle = ({ title, overview }) => {

    const maxChars = 160;

    const truncatedOverview = overview.length > maxChars ? overview.substring(0, maxChars).trim() + ".." : overview;

    return (
        <div className="pt-[15%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-xl md:text-3xl font-bold w-1/3">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/3">{truncatedOverview}</p>
            <div>
                <button className="bg-white text-black p-0.5 md:p-2 px-1 md:px-8  my-1 rounded-lg md:text-xl text-base font-bold hover:opacity-80">
                    Play
                </button >
                <button className="hidden md:inline-block bg-gray-600 text-white p-2 px-8 rounded-lg bg-opacity-70 text-xl mx-2 hover:opacity-80">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;