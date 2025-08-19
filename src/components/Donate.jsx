import { useNavigate } from "react-router-dom";
import info from "../assets/pdf/bbbinfo.pdf"
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Donate = () => {

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
        <>

            <header className="flex flex-col justify-center items-center" style={{ backgroundColor: '#6c9894' }} >
                <img src="src/assets/images/myLogo.png" alt="logo" className=" max-w-44 max-h-28" />
            </header>

            <ul className="flex flex-row justify-evenly" style={{ backgroundColor: '#6c9894' }}>
                <li><a className="cursor-pointer hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/')}>Home</a></li>
                <li><a className="cursor-pointer hover:glass hover:font-bold hover:text-sm" onClick={() => window.open(info)}>Info</a></li>
                <li><a className="cursor-pointer hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/links')}>Links</a></li>
                <li><a className="cursor-pointer hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/about')}>About</a></li>
                <li><a className="cursor-pointer hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/gallery')}>Gallery</a></li>
                <li><a className="cursor-pointer hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/services')}>Services</a></li>
                <li><a className="cursor-pointer hover:glass hover:font-bold hover:text-sm" onClick={() => nav('/articles')}>Articles</a></li>
                <li><a className="cursor-pointer hover:glass hover:font-bold hover:text-sm" onClick={() => document.getElementById('contact-form').showModal()}>Contact</a></li>
            </ul>

            <div className="hero min-h-screen p-9" style={{ backgroundColor: '#d0efe1', color:'#6c9894', textShadow:'1px 1px 1px black' }}>

                <div className="hero-content text-center w-11/12 max-md:w-full" style={{ backgroundImage: "url(src/assets/images/donations.png)", border: '9px solid #6c9894', backgroundSize:'cover' }}>

                        {/* <div className="hero min-h-screen" style={{ backgroundColor: '#d0efe1', color:'#6c9894', textShadow:'1px 1px 1px black' }}> */}
                        
                    <div className="max-w-md bg-white p-6" style={{backgroundColor: '#d0efe1', color:'#6c9894', border: '6px solid #6c9894'}} >

                        <h1 className="text-5xl font-bold">Give</h1>

                        <p className="py-6">Consider being the blessing in providing balance to so many, one breath at a time, by investing in our work.</p>

                        <button className="btn btn-primary rounded-badge bg-green-700 text-zinc-50 hover:bg-green-500" onClick={() => window.open("https://givebutter.com/3Nv2cE/", "_blank")}>DONATE NOW</button>

                        <h5 className="py-6">Ways to give to Blessings Balance Breath Yoga</h5>

                        <div className="text-left">

                            <li>Give online HERE: <a href="https://givebutter.com/3Nv2cE/" target="_blank" className="link hover:bg-green-700 hover:text-zinc-50"> https://givebutter.com/3Nv2cE/</a></li>
                            <li>Zelle and Venmo are accepted</li>
                            <li>Checks mailed to:</li>

                            <section className="ml-6">
                                <p>Blessings Balance Breath Yoga</p>
                                <p>3961 East Chandler Blvd. Suite 111</p>
                                <p>PMB #183</p>
                                <p>Phoenix, AZ 85048</p>
                            </section>

                        </div>

                        <div className="py-6">

                            <p>Blessings Balance Breath Yoga is a qualified 501(c)(3) nonprofit organization; therefore, all donations are tax-deductible. EIN: 33-1997810</p>

                        </div>

                        <div className="py-6">

                            <p>Your tax credit donation will help us provide various trauma-sensitive yoga programs to youth and adults who are underrepresented, underserved, marginalized, and justice-impacted. Your donation will help to provide services, program materials, and yoga props so that individuals can receive all the support they need when practicing yoga with us.</p>

                        </div>

                    </div>

                </div>

            </div>

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

        </>
    )
}

export default Donate
