import BottomNavbar from "./BottomNavbar"
import article2 from "../assets/info/artical2.pdf"
import article3 from "../assets/info/artical3.pdf"
import article4 from "../assets/info/artical4.pdf"
import article5 from "../assets/info/artical5.pdf"
import article6 from "../assets/info/artical6.pdf"
import pdf1 from "../assets/info/pdf1.pdf"
import pdf2 from "../assets/info/pdf2.pdf"
import pdf4 from "../assets/info/pdf4.pdf"
import pdf5 from "../assets/info/pdf5.pdf"
import pdf7 from "../assets/info/pdf7.pdf"
import pdf8 from "../assets/info/pdf8.pdf"
import pdf11 from "../assets/info/pdf11.pdf"
import pdf12 from "../assets/info/pdf12.pdf"
import pdf13 from "../assets/info/pdf13.pdf"
import pdf14 from "../assets/info/pdf14.pdf"


export default function Articles() {


    return (
        <div className="mb-10">

            <h1 className="font-extrabold text-center text-5xl py-5" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }}>Published Articles</h1>

            <div className="flex h-full flex-col overflow-y-scroll py-6" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>


                <div className="px-4 sm:px-6" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <h1 className="text-base font-semibold text-center italic" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}> "As a staff writer for Christian Yoga Magazine, I have had the opportunity to write on various topics. I invite you to enjoy several articles about my personal and professional yoga journey."</h1>

                    <p className='float-right'>-Dr. Donna Jagielski</p>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    {/* <figure className="max-w-28"><img src="src/assets/images/myLogo.png" style={{borderRadius: '100%'}} alt="BBB logo" /></figure> */}

                    <div className="card-body">

                        {/* <h2 className="card-title">Dr. Donna Jagielski Resume</h2>

                        <p>Click to review Dr. Jagielski's resume.</p> */}

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_1" className="btn">Open</a> */}

                            {/* <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf1)} >Read</button> */}

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_1">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf1} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover6.jpeg" alt="Christian Yoga Magazine Vol. 4 Issue 15 Winter 2024 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Introducing 8 Limbs to Children and Youth through Yoga Activities On and Off the Mat</h2>

                        <p>Winter 2024 | Issue 15</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_2" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf2)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_2">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf2} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover7.jpeg" alt="Christian Yoga Magazine Vol. 3 Issue 14 Holiday 2023 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Wearing Gratitude into the 8 Limbs of Yoga</h2>

                        <p>Holiday 2023 | Issue 14</p>

                        <div className="card-actions justify-end">
                            
                            {/* <a href="#my_modal_3" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf5)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_3">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf5} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover8.jpeg" alt="Christian Yoga Magazine Vol. 3 Issue 13 Fall 2023 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">3 Centers Meditation-Christian Yoga Style</h2>

                        <p>Fall 2023 | Issue 13</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_4" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf4)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_4">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf4} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover5.png" alt="Christian Yoga Magazine Vol. 3 Issue 12 Summer 2023 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Christ-Centered Yoga Journaling for Tweens and Teen Girls</h2>

                        <p>Summer 2023 | Issue 12</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_5" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(article5)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_5">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={article5} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover9.jpeg" alt="Christian Yoga Magazine Vol. 3 Issue 11 Late Spring 2023 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Would Jesus Eat Popcorn Before Yoga</h2>

                        <p>Late Spring 2023 | Issue 11</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_6" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf7)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_6">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf7} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover3.png" alt="Christian Yoga Magazine Vol. 3 Issue 10 Spring 2023 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">An Interview with the Retreat Ladies</h2>

                        <p>Spring 2023 | Issue 10</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_7" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(article3)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_7">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={article3} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover12.jpeg" alt="Christian Yoga Magazine Vol. 2 Issue 7 Fall 2022 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">A Triade of Calm Scripture, Breath, and Mind</h2>

                        <p>Fall 2022 | Issue 8</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_8" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf8)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_8">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf8} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover2.png" alt="Christian Yoga Magazine Vol. 2 Issue 8 Holiday 2022 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Surrender to God: Ten Yoga Props Used in Restorative and Yin Yoga Practice</h2>

                        <p>Holiday 2022 | Issue 8</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_9" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(article2)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_9">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={article2} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover6.png" alt="Christian Yoga Magazine Summer 2022 Issue 7 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Yoga for All: My Journey Teaching Yoga in the Juvenile Dention System</h2>

                        <p>Summer 2022 | Issue 7</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_10" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(article6)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_10">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={article6} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover10.jpeg" alt="Christian Yoga Magazine Late Spring 2022 Issue 6 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Including the Circle of Prayer to Re-energize Your Yoga Practice</h2>

                        <p>Late Spring 2022 | Issue 6</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_11" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf12)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_11">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf12} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover1.png" alt="Christian Yoga Magazine Spring 2022 Issue 5 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Christ-Centered Trauma Informed Practices on the Mat</h2>

                        <p>Spring 2022 | Issue 5</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_12" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf11)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_12">

                    
                    <div className="modal-box bg-black w-screen h-screen">
                        
                        <iframe src={pdf11} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover4.png" alt="Christian Yoga Magazine Winter 2022 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Men on the Mat: Reconnecting with Christ Through Yoga and the Five Vital Organs</h2>

                        <p>Winter 2022 | Issue 4</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_13" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(article4)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_13">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={article4} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>


                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/CYM1.png" alt="christian yoga magazine logo" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">5 ways to Practice Gratitude Each Day</h2>

                        <p>Holiday 2021 | Issue 3</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_14" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf14)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_14">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf14} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

                <div className="card card-side bg-base-100" style={{ color: '#6c9894', backgroundColor: '#d0efe1', textShadow: '1px 1px 2px black' }}>

                    <figure className="max-w-28"><img src="src/assets/images/articlecover11.jpeg" alt="Christian Yoga Magazine Fall Sep. 1, 2021 cover" /></figure>

                    <div className="card-body">

                        <h2 className="card-title">Incorporating the Beatitudes into Yoga</h2>

                        <p>Fall 2021 | Issue 2</p>

                        <div className="card-actions justify-end">

                            {/* <a href="#my_modal_15" className="btn">Open</a> */}

                            <button className="btn" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }} onClick={() => window.open(pdf13)}>Read</button>

                        </div>

                    </div>

                </div>

                <div className="modal" role="dialog" id="my_modal_15">

                    <div className="modal-box bg-black w-screen h-screen">

                        <iframe src={pdf13} className="w-screen h-screen"></iframe>

                        <div className="modal-action">

                            <a href="#" className="btn bg-white">Close</a>

                        </div>

                    </div>

                </div>

            </div>

            <BottomNavbar />
            
        </div>
    )
}

