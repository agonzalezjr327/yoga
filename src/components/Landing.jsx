import Navbar from "./Navbar"

const Landing = () => {
    return (   
        <>

            <Navbar />

            <div className="hero min-h-screen bg-base-200" style={{ backgroundColor: '#6c9894' }}>

                <div className="hero-content text-center">

                    <div className="max-w-md">

                        <div className="w-full" style={{ backgroundColor: '#d0efe1', color: '#6c9894', textShadow: '1px 1px 2px black' }}>
                            <h1 className="text-4xl font-bold max-md:text-xl m-3 p-2" >Blessings Balance Breath Yoga</h1>
                        </div>

                        <img src="src/assets/images/heroImg.png" className="rounded-full lg:h-3/5" style={{ border: '2px solid #d0efe1' }} />

                        <div className="w-full" style={{ backgroundColor: '#d0efe1', color: '#6c9894', textShadow: '1px 1px 2px black' }} >
                            <p className="py-6 m-3 max-md:text-sm" >Dedicated to bringing yoga to underserved, underrepresented, marginalized, and system/justice-impacted populations. Providing the healing practice of yoga to reclaim empowerment and harmony. Restoring self-esteem, self-efficacy, and individualism.</p>
                        </div>
                        <div className="d-flex justify-center items-center flex-column">
                        <img src="src/assets/images/credentials.png" />
                        <img className="m-auto" src="/src/assets/images/rymt500.png" alt='R-YFMT 500 logo' width={100}/>
                        </div>

                    </div>

                </div>

            </div>
            
                <footer className="footer footer-center p-10 bg-base-200 text-base-content" style={{ backgroundColor: '#6c9894' }}>
                    <div>
                        <p className="">© 2025 Blessings Balance Breath Yoga</p>
                        <p>All Rights Reserved</p>
                        <p>Created by <a href="https://agonzalezjr327.github.io/portfolio/" className="link hover:text-green-900 hover:bg-green-100" target="_blank">MiraSite LLC</a></p>
                    </div>
                </footer>
            

        </>
    )
}
export default Landing

