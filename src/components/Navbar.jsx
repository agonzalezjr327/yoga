import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import info from "../assets/pdf/bbbinfo.pdf"

const Navbar = () => {

    const form = useRef()
    const nav = useNavigate();

    const [input, setInput] = useState({
        name: "",
        user_email: "",
        title: "",
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
            .send("service_h1s3bh1", "template_750ajko", input, { publicKey: "Dcer_KAzgv5Ye8ngU" })
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent!");
                form.current.reset();
                document.getElementById('contact-form').close();
                setInput({
                    from_name: "",
                    user_email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((err) => {
                console.error("FAILED...", err);
                alert("Failed to send message");
            });
    }

    return (

        <div className="navbar bg-base-100 flex flex-row justify-evenly" style={{ backgroundColor: '#6c9894', border: 'solid #6c9894 1px' }}>

            <div className="flex-none">

                <ul className="menu menu-horizontal px-1">

                    <li>
                        <details>
                            <summary className="hover:bg-black hover:glass hover:text-slate-200">MENU</summary>
                            <ul className="p-2 bg-base-100 z-50" style={{ backgroundColor: '#d0efe1' }} >
                                <li><a className="hover:glass hover:font-bold hover:text-sm" onClick={() => window.open(info)}>Info</a></li>
                                <li><a className="hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/links')}>Links</a></li>
                                <li><a className="hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/about')}>About</a></li>
                                <li><a className="hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/donate')}>Donate</a></li>
                                <li><a className="hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/gallery')}>Gallery</a></li>
                                <li><a className="hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/services')}>Services</a></li>
                                <li><a className="hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/articles')}>Articles</a></li>
                                <li><a className="hover:glass hover:font-bold hover:text-sm" onClick={() => document.getElementById('contact-form').showModal()}>Contact</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>

            </div>

            <div className="flex flex-row justify-end w-full">
                <img src="src/assets/images/myLogo.png" alt="logo" className="max-w-44 max-h-28" />
            </div>

            <dialog id="contact-form" className="modal">

                <div className="modal-box opacity-95" style={{ backgroundColor: '#6c9894', color: '#d0efe1' }} >

                    <h3 className="font-bold text-lg text-center">Please consider being the blessing in providing balance to others, one breath at a time.</h3>

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
                            <input type="email" name="user_email" pattern=".+@[a-z]*['.'][a-z]{2,}" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInput} required />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">SUBJECT</span>
                            </label>
                            <input type="text" name="title" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInput} required />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">MESSAGE</span>
                            </label>
                            <textarea name="message" className="textarea textarea-bordered" onChange={handleInput} required></textarea>
                        </div>

                        <div className="m-5">
                            <button type="submit" className="btn hover:bg-green-200 hover:text-amber-400 active:bg-green-500">SEND</button>
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

export default Navbar