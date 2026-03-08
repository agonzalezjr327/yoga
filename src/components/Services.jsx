import BottomNavbar from "./BottomNavbar";
import event10 from "../assets/images/event10.jpg";
import event8 from "../assets/images/event8.jpg";
import event5 from "../assets/images/event5.jpg";
import articleCover1 from "../assets/images/articlecover1.png";
import event16 from "../assets/images/event16.jpg";
import event12 from "../assets/images/event12.jpg";
import event15 from "../assets/images/event15.jpg";


const Services = () => {

    return (
        
        <div className="pb-20 w-full min-h-screen overflow-x-hidden bg-[#d0efe1]" style={{ textShadow: '1px 1px 2px black' }}>
        
            <h1 className="font-extrabold text-center text-5xl py-5" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }}>Available Services</h1>

            <div className="flex h-full flex-col" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                <div className="px-4 sm:px-6" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <h1 className="text-base text-center" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}><small>Fees are based on a sliding scale to accommodate organizational needs. Payment is accepted in the form of Venmo, Zelle, and business/school/organizational checks. We offer limited online workshops but we are available to travel state-wide. Contact us today using the mail icon below to get started!</small></h1>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20">
                        <img src={articleCover1} loading="lazy" alt="Christian Yoga Magazine cover" />
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">Yoga Therapy</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20">
                        <img src={event10} loading="lazy" alt="mother and daughter" />
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">Education & Youth Organization Programs</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20">
                        <img src={event8} loading="lazy" alt="donna instructing" />
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">Introduction to Yoga</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20">
                        <img src={event5} loading="lazy" alt="family yoga" />
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">Family Yoga</h2>
                    </div>
                </div>


                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20">
                        <img src={event16} loading="lazy" alt="class photo in action" />
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">Faith-based Classes and Workshops</h2>
                    </div>
                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20">
                        <img src={event12} loading="lazy" alt="womwn class posing for photo" />
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">Yoga for Empowered Women (a signature program of Blessings Balance Breath Yoga)</h2>
                    </div>
                </div>


                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>
                    <figure className="max-w-20 min-w-20 max-h-20 min-h-20">
                        <img src={event15} loading="lazy" alt="group after class" />
                        </figure>
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