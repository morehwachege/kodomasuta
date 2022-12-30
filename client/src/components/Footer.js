import React from 'react'

function Footer() {
    return (
        <div className='container-fluid footer d-flex justify-content-center align-items-center'>
            <ul className='d-flex justify-content-around align-items-center flex-wrap'>
                <li className="px-2">
                    &copy; 2022 kodomasuta
                </li>
                <li className="px-2">
                    About
                </li>
                <li className="px-2">
                    API
                </li>
                <li className="px-2">
                    Blog
                </li>
                <li className="px-2">
                    Privacy
                </li>
                <li className="px-2">
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Footer