import BottomNavbar from "./BottomNavbar"

// Import all gallery images
    
    import images2 from "../assets/gallery/gallery2.jpg"; 
    import images4 from "../assets/gallery/gallery4.jpg";
    import images5 from "../assets/gallery/gallery5.jpg";
    import images6 from "../assets/gallery/gallery6.jpg";
    import images7 from "../assets/gallery/gallery7.jpg";
    import images8 from "../assets/gallery/gallery8.jpg";
    import images9 from "../assets/gallery/gallery9.jpg";
    import images10 from "../assets/gallery/gallery10.jpg"
    import images11 from "../assets/gallery/gallery11.jpg";
    import images14 from "../assets/gallery/gallery14.jpg";
    import images15 from "../assets/gallery/gallery15.jpg";
    import images16 from "../assets/gallery/gallery16.jpg";
    import images17 from "../assets/gallery/gallery17.jpg";
    import images18 from "../assets/gallery/gallery18.jpg";
    import images19 from "../assets/gallery/gallery19.jpg";
    import images20 from "../assets/gallery/gallery20.jpg";
    import images21 from "../assets/gallery/gallery21.jpg";
    import images24 from "../assets/gallery/gallery25.jpg";
    import images25 from "../assets/gallery/gallery26.jpg";
    import images27 from "../assets/gallery/gallery29.jpg";
    import images28 from "../assets/gallery/gallery30.jpg";
    import images29 from "../assets/gallery/gallery31.jpg";
    import images30 from "../assets/gallery/gallery32.jpg";
    import images32 from "../assets/gallery/DSC_0026.jpg";
    import images35 from "../assets/gallery/DSC_0045.jpg";
    import images37 from "../assets/gallery/DSC_0064.jpg";
    import images41 from "../assets/gallery/DSC_0159(1).jpg";
    import images45 from "../assets/gallery/DSC_0192.jpg";
    import images47 from "../assets/gallery/DSC_0204.jpg";
    import images49 from "../assets/gallery/gallery36.jpg";
    import images50 from "../assets/gallery/gallery37.jpg";
    import images51 from "../assets/gallery/gallery38.jpg";
    import images52 from "../assets/gallery/gallery39.jpg";
    import images53 from "../assets/gallery/gallery40.jpg";
    import images54 from "../assets/gallery/gallery41.jpg";
    import images55 from "../assets/gallery/gallery42.jpeg";


const Gallery = () => {

    const size = window.screen.availWidth < 768 ? { width: "100%", height: "75%" } : { width: '50rem', height: '50rem' }

    return (

        <div style={{ backgroundColor: '#d0efe1' }} className="min-h-screen w-full overflow-x-hidden">

            <header className="h-1/4 mb-14">

                <h1 className="font-extrabold text-center text-5xl py-5" style={{ backgroundColor: '#6c9894', color: '#d0efe1', textShadow: '1px 1px 2px black' }}>Photo Gallery</h1>

                <section className="p-4" style={{ backgroundColor: '#d0efe1' }}>

                    <p className="text-center text-sm font-semibold" style={{ color: '#6c9894' }}>Take a visual journey through peaceful moments in nature, where movement meets mindfulness. The first set of images—featuring black and blue yoga attire—was captured at Sun Ray Park Trailhead in Ahwatukee, Phoenix, highlighting the serene beauty of the desert landscape. The second set showcases vibrant green floral leggings and a matching top, with stunning views from South Mountain. Special thanks to photographer Tori Toth for capturing these moments. <a className="link hover:text-green-900 hover:bg-green-100" href="https://www.linkedin.com/in/toritoth/">https://www.linkedin.com/in/toritoth/</a> for more of her work.</p>

                </section>

            </header>

            <div className="flex flex-col justify-center items-center h-1/2 mb-10" style={{ backgroundColor: '#d0efe1', color: '#6c9894' }}>

                <div className="flex flex-col justify-center items-center p-7" style={size}>

                    <div className="carousel w-full max-w-4xl relative">

                       

                        <div id="slide2" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                                <img src={images2} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute inset-0 flex justify-between items-center px-4">
                                <a href="#slide63" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12 bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide4" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12 bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide4" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images4} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide5" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide5" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images5} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide6" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide6" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images6} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide7" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide7" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images7} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide8" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide8" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images8} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide7" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide9" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide9" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images9} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide8" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide10" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide10" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images10} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide9" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide11" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide11" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images11} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide10" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide14" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide14" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images14} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide11" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide15" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide15" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images15} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide14" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide16" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide16" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images16} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide15" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide17" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide17" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images17} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide16" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide18" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide18" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images18} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide17" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide19" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide19" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images19} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide18" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide20" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide20" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images20} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide19" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide21" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide21" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images21} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide20" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide25" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide25" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images24} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide21" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide26" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide26" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images25} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide25" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide29" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide29" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images27} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide26" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide30" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide30" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images28} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide29" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide31" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide31" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images29} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide30" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide32" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide32" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images30} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide31" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide34" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide34" className="carousel-item relative w-full items-center justify-center">
                             <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">   
                            <img src={images32} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide32" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide37" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide37" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images35} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide34" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide40" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide40" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images37} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide37" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide44" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide44" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images41} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide40" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide50" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide50" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images45} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide44" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide53" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide53" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images47} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide50" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide57" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide57" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images49} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide53" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide58" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide58" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images50} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide57" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide59" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide59" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images51} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide58" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide60" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide60" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images52} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide59" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide61" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide61" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images53} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide60" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide62" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide62" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images54} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide61" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide63" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide63" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images55} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide62" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide2" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <BottomNavbar />

        </div>
    )
}
export default Gallery