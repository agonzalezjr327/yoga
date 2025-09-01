import BottomNavbar from "./BottomNavbar"

// Import all gallery images
const images = [
    "/gallery/gallery1.jpg", // deleted 0
    "/gallery/gallery2.jpg", 
    "/gallery/gallery3.jpg", // deleted 2
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
    "/gallery/gallery9.jpg",
    "/gallery/gallery10.jpg",
    "/gallery/gallery11.jpg",
    "/gallery/gallery12.jpg",  // deleted 11
     "/gallery/gallery13.jpg", // deleted 12
    "/gallery/gallery14.jpg",
    "/gallery/gallery15.jpg",
    "/gallery/gallery16.jpg",
    "/gallery/gallery17.jpg",
    "/gallery/gallery18.jpg",
    "/gallery/gallery19.jpg",
    "/gallery/gallery20.jpg",
    "/gallery/gallery21.jpg",
    "/gallery/gallery23.jpg", // deleted 21
    "/gallery/gallery24.jpg", // deleted 22
    "/gallery/gallery25.jpg",
    "/gallery/gallery26.jpg",
    "/gallery/gallery28.jpg", // deleted 25
    "/gallery/gallery29.jpg",
    "/gallery/gallery30.jpg",
    "/gallery/gallery31.jpg",
    "/gallery/gallery32.jpg",
    "/gallery/DSC_0024.jpg", // deleted 30
    "/gallery/DSC_0026.jpg",
    "/gallery/DSC_0028.jpg", // deleted 32
    "/gallery/DSC_0035.jpg", // deleted 33
    "/gallery/DSC_0045.jpg",
    "/gallery/DSC_0060.jpg", // deleted 35
    "/gallery/DSC_0064.jpg",
    "/gallery/DSC_0095.jpg", // deleted 37
    "/gallery/DSC_0138.jpg", // deleted 38
    "/gallery/DSC_0155.jpg", // deleted 39
    "/gallery/DSC_0159(1).jpg",
    "/gallery/DSC_0164.jpg", // deleted 41
    "/gallery/DSC_0185.jpg", // deleted 42
    "/gallery/DSC_0189(2).jpg", // deleted 43
    "/gallery/DSC_0192.jpg",
    "/gallery/DSC_0194.jpg", // deleted 45
    "/gallery/DSC_0204.jpg",
    "/gallery/gallery34.jpg", // deleted 47
    "/gallery/gallery36.jpg"
]

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
                                <img src={images[1]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute inset-0 flex justify-between items-center px-4">
                                <a href="#slide57" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12 bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide4" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12 bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide4" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[3]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide5" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide5" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[4]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide6" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide6" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[5]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide7" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide7" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[6]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide8" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide8" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[7]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide7" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide9" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide9" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[8]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide8" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide10" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide10" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[9]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide9" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide11" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide11" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[10]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide10" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide14" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide14" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[13]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide11" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide15" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide15" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[14]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide14" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide16" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide16" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[15]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide15" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide17" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide17" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[16]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide16" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide18" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide18" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[17]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide17" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide19" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide19" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[18]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide18" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide20" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide20" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[19]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide19" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide21" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide21" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[20]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide20" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide25" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide25" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[23]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide21" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide26" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide26" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[24]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide25" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide29" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide29" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[26]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide26" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide30" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide30" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[27]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide29" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide31" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide31" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[28]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide30" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide32" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide32" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[29]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide31" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide34" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide34" className="carousel-item relative w-full items-center justify-center">
                             <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">   
                            <img src={images[31]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide32" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide37" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide37" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[34]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide34" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide40" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide40" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[36]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide37" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide44" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide44" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[40]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide40" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide50" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide50" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[44]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide44" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide53" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        <div id="slide53" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[46]} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide50" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide57" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div>

                        {/* <div id="slide55" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[47]} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide53" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide57" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
                            </div>
                        </div> */}

                        <div id="slide57" className="carousel-item relative w-full items-center justify-center">
                            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
                            <img src={images[48]} loading="lazy" className="w-full h-full object-center rounded-lg shadow-lg" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide53" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❮</a>
                                <a href="#slide1" className="btn btn-circle bg-black/50 text-white w-10 h-10 md:w-12 md:h-12">❯</a>
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