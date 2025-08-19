import BottomNavbar from "./BottomNavbar"

const Links = () => {

    return (
        <div style={{ backgroundColor: '#d0efe1' }}>

            <div className="hero" >
                <div className="hero-content flex-col" >

                    <img src="src/assets/images/myLogo.png" alt="logo" className="max-w-sm rounded-lg shadow-2xl" />

                    <div style={{ color: '#6c9894' }} >

                        <h1 className="text-xl font-bold text-center mb-4"> The Yoga for Empowered Women Program features justice-impacted women to share their stories with community supporters through mindfulness and creative journaling.</h1>

                        <div style={{ backgroundColor: '#6c9894', color: '#d0efe1' }}>

                            <div className="card lg:card-side bg-base-100">

                                <div className="card-body">

                                    <p className="py-6 text-center font-bold">To learn more about these events and upcoming ones, please visit the social media links below</p>

                                    <div className="card-actions justify-evenly" >

                                        <a href="https://www.facebook.com/profile.php?id=100095239536075" target="_blank" className="btn bg-blue-400 hover:bg-blue-700 hover:animate-spin glass">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                                        </a>

                                        <a className="btn bg-yellow-800 hover:bg-yellow-400 glass  hover:animate-spin" href="https://www.linkedin.com/company/blessings-balance-and-breath-yoga" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>
                                        </a>

                                        <a className="btn bg-blue-500 hover:bg-blue-950 glass hover:animate-spin " href="https://www.instagram.com/blessingsbalancebreathyoga/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div style={{ backgroundColor: '#6c9894', color: '#d0efe1' }} className="my-12">
                            <div className="card lg:card-side" >
                                <div className="card-body mb-20">
                                    <h3 className='font-bold text-center py-6'>Give Back Yoga Foundation, Gaiam, The Pollination Project, and The Awesome Foundation Awesome without Borders/The Harnisch Foundation have provided support for the Yoga for Empowered Women Program. Visit the links below.</h3>


                                    <div className="card-actions justify-evenly" >

                                        <div className="flex flex-col justify-center items-center text-center">
                                            <a target="_blank" href="https://givebackyoga.org/" className="hover:animate-bounce">
                                                <img src="src/assets/images/givebackyoga.png" alt="give back yoga logo" className="w-16 h-16" />
                                            </a>
                                            <p className="text-center">Give Back Yoga</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center text-center">
                                            <a target="_blank" href="https://thepollinationproject.org/" className="hover:animate-bounce">
                                                <img src="src/assets/images/thepollinationproject.jpg" alt="the pollination project logo" className="w-16 h-16" />
                                            </a>
                                            <p className="text-center">Pollination Project</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center text-center">
                                            <a target="_blank" href="https://www.christianyogamagazine.com/" className="hover:animate-bounce">
                                                <img src="src/assets/images/CYM1.png" alt="cristian yoga magazine logo" className="w-16 h-16" />
                                            </a>
                                            <p className="text-center">Christian Yoga Magazine</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center text-center">
                                            <a target="_blank" href="https://www.gaiam.com/" className="hover:animate-bounce">
                                                <img src="src/assets/images/gaiam.png" alt="gaiam logo" className="w-16 h-16" />
                                            </a>
                                            <p className="text-center">Gaiam</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center text-center">
                                            <a target="_blank" href="https://thehf.org/" className="hover:animate-bounce">
                                                <img src="src/assets/images/harnisch.png" alt="harnisch foundation logo" className="w-16 h-16" />
                                            </a>
                                            <p className="text-center">Harnisch Foundation</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <a target="_blank" href="https://www.awesomefoundation.org/en" className="hover:animate-bounce">
                                                <img src="src/assets/images/af.png" alt="awesome foundation logo" className="w-16 h-16" />
                                            </a>
                                            <p className="text-center">Awesome Foundation</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <a target="_blank" href="https://www.yogaalliance.org/" className="hover:animate-bounce">
                                                <img src="src/assets/images/yogaAllianceLogo.png" alt="yoga alliance logo" className="w-16 h-16" />
                                            </a>
                                            <p className="text-center">Yoga Alliance</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <a target="_blank" href="https://www.hathanp.org/" className="hover:animate-bounce">
                                                <img src="src/assets/images/hathaLogo.png" alt="yoga alliance logo" className="w-16 h-16" />
                                            </a>
                                            <p className="text-center">HATHA</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <BottomNavbar />

        </div>
    )
}

export default Links

