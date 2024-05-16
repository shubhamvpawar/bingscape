import React from 'react'

const Footer = () => {
    return (
        <div className='w-screen bg-black pt-8'>
            <div className=" text-white text-center">
                <p>Created by Shubham Pawar © BingScape</p>
            </div>
            <div className='flex justify-center mx-auto py-2 text-white'>
                <div className='w-1/2 flex justify-end pr-2'>
                    <a
                        className='hover:scale-90 hover:font-semibold'
                        href="https://www.linkedin.com/in/shubham-dev-design/"
                        target="_blank"
                    >LinkedIN</a>
                </div>
                <div className='flex w-1/2 justify-start pl-2'>
                    <a
                        className='hover:scale-90 hover:font-semibold'
                        href="https://github.com/shubhamvpawar/bingscape"
                        target="_blank"
                    >GitHub</a></div>
            </div>
        </div>
    )
}

export default Footer;