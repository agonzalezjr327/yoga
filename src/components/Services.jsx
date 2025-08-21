import BottomNavbar from "./BottomNavbar"

const Services = () => {

    return (
        
        <div className="pb-20 w-full min-h-screen overflow-x-hidden bg-[#d0efe1]" style={{ textShadow: '1px 1px 2px black' }}>
        
            <h1 className="font-extrabold text-center text-5xl py-5" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }}>Available Services</h1>

            <div className="flex h-full flex-col" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                <div className="px-4 sm:px-6" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <h1 className="text-base text-center" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>Fees are based on a sliding scale to accommodate organizational needs. Payment is accepted in the form of Venmo, Zelle, and business/school/organizational checks. We offer limited online workshops but we are available to travel state-wide. Contact us today using the mail icon below to get started!</h1>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20"><img src="src/assets/images/event10.jpg" alt="mother and daughter" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Education & Youth Organization Programs</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20"><img src="src/assets/images/event8.jpg" alt="donna instructing" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Introduction to Yoga</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20"><img src="src/assets/images/event5.jpg" alt="family yoga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Family Yoga</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20"><img src="src/assets/images/articlecover1.png" alt="Christian Yoga Magazine cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Yoga & Creative Journaling</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20"><img src="src/assets/images/event16.jpg" alt="class photo in action" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Faith-based Classes and Workshops</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20"><img src="src/assets/images/event12.jpg" alt="womwn class posing for photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Yoga for Empowered Women (a signature program of Blessings Balance Breath Yoga)</h2>
                    </div>
                </div>


                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20"><img src="src/assets/images/event15.jpg" alt="group after class" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Specialized & Customized Programs</h2>
                    </div>
                </div>


            </div>

            <BottomNavbar />

        </div>

    )
}
export default Services