import { useNavigate } from "react-router-dom";
import info from "../assets/pdf/bbbinfo.pdf"
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { GrInfo } from "react-icons/gr";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { BsCart } from "react-icons/bs";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaHandHoldingDollar } from "react-icons/fa6";

const BottomNavbar = () => {

    const nav = useNavigate();
    const form = useRef()

    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleInput = (e) => {
        let { name, value } = e.target
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .send("service_9gk0on8", "template_gx3imsd", input, { publicKey: "P2CVCJ58_ylJEjeFM" })
            .then(response => console.log('success', response.status, response.text))
            .catch(err => { console.log("fail", err); alert("fali") })
    }

    return (

        <div className="btm-nav " style={{ backgroundColor: '#6c9894' }}>

            <OverlayTrigger
                key='home'
                className="z-50"
                overlay={<Tooltip id='home'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>Home</strong></Tooltip>}>

                <button onClick={() => nav('/')} className="hover:glass">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>

                </button>

            </OverlayTrigger>

            <OverlayTrigger
                key='info'
                className="z-50"
                overlay={<Tooltip id='info'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>Info</strong></Tooltip>}>

                <button onClick={() => window.open(info)} className="hover:glass">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

                </button>

            </OverlayTrigger>

            <OverlayTrigger
                key='links'
                className="z-50"
                overlay={<Tooltip id='links'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>Links</strong></Tooltip>}>

                <button onClick={() => nav('/links')} className="hover:glass">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" stroke="black">

                        <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />

                    </svg>

                </button>

            </OverlayTrigger>

            <OverlayTrigger
                key='about'
                className="z-50"
                overlay={<Tooltip id='about'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>About</strong></Tooltip>}>

                <button onClick={() => nav('/about')} className="hover:glass">
                    <GrInfo className="size-6" />
                </button>

            </OverlayTrigger>

            <OverlayTrigger
                key='donate'
                className="z-50"
                overlay={<Tooltip id='donate'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>Donate</strong></Tooltip>}>

                <button onClick={() => nav('/donate')} className="hover:glass">

                    <FaHandHoldingDollar className="size-6" />

                </button>

            </OverlayTrigger>

            <OverlayTrigger
                key='gallery'
                className="z-50"
                overlay={<Tooltip id='gallery'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>Gallery</strong></Tooltip>}>

                <button onClick={() => nav('/gallery')} className="hover:glass">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" stroke="#d0efe1">

                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />

                    </svg>

                </button>

            </OverlayTrigger>

            <OverlayTrigger
                key='services'
                className="z-50"
                overlay={<Tooltip id='services'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>Services</strong></Tooltip>}>

                <button onClick={() => nav('/services')} className="hover:glass">

                    <BsCart className="size-6" />

                </button>

            </OverlayTrigger>

            <OverlayTrigger
                key='articles'
                className="z-50"
                overlay={<Tooltip id='articles'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>Articles</strong></Tooltip>}>

                <button onClick={() => nav('/articles')} className="hover:glass">

                    <HiOutlineBookOpen className="size-6" />

                </button>

            </OverlayTrigger>

            <OverlayTrigger
                key='contact'
                className="z-50"
                overlay={<Tooltip id='contact'><strong style={{ color: 'black', textShadow: '1px 1px 2px #6c9894' }}>Contact</strong></Tooltip>}>

                <button onClick={() => document.getElementById('contact-form').showModal()} className="hover:glass">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-6" stroke="#d0efe1">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>

                </button>

            </OverlayTrigger>


            <dialog id="contact-form" className="modal">

                <div className="modal-box opacity-95" style={{ backgroundColor: '#6c9894', color: '#d0efe1' }} >

                    <h3 className="font-bold text-lg text-center" >Please consider being the blessing in providing balance to others, one breath at a time.</h3>

                    <p className="py-4 text-center">Press ESC key or click the button below to close</p>

                    <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit} ref={form}>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">NAME</span>
                            </label>
                            
                            <input type="text" name="name" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInput} required />

                        </div>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">

                                <span className="label-text">EMAIL</span>

                            </label>

                            <input type="email" name="email" pattern=".+@[a-z]*['.'][a-z]{2,}" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInput} required />

                        </div>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">

                                <span className="label-text">SUBJECT</span>

                            </label>

                            <input type="text" name="subject" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInput} required />

                        </div>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">

                                <span className="label-text">MESSAGE</span>

                            </label>

                            <textarea name="message" className="textarea textarea-bordered" onChange={handleInput} required></textarea>

                        </div>

                        <div className="m-5 hover:bg-green-200 hover:text-amber-400 active:bg-green-500">

                            <button type="submit" className="btn">SEND</button>

                        </div>


                    </form>


                    <div className="modal-action">

                        <form method="dialog">

                            <button className="btn hover:bg-red-400 hover:text-amber-400 active:bg-red-900">Close</button>

                        </form>

                    </div>

                </div>

            </dialog>

        </div>

    )
}
export default BottomNavbar