import BottomNavbar from "./BottomNavbar"

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

            <div className="flex flex-col justify-center items-center h-1/2 mt-5" style={{ backgroundColor: '#d0efe1', color: '#6c9894' }}>

                <div className="flex flex-col justify-center items-center p-7" style={size}>

                    <div className="carousel w-full max-w-4xl relative">

                        <div id="slide1" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery1.jpg" className="w-full max-w-xl h-auto lg:h-3/4 rounded-lg shadow-lg" />
                            <div className="absolute flex justify-between items-center transform -translate-y-1/2 top-1/2 left-2 right-2">
                                <a href="#slide58" className="btn btn-circle z-10">❮</a>
                                <a href="#slide2" className="btn btn-circle z-10">❯</a>
                            </div>
                        </div>

                        <div id="slide2" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery2.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide3" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery3.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide4" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery4.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide5" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery5.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide6" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide6" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery6.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide7" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide7" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery7.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-circle">❮</a>
                                <a href="#slide8" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide8" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery8.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide7" className="btn btn-circle">❮</a>
                                <a href="#slide9" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide9" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery9.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide8" className="btn btn-circle">❮</a>
                                <a href="#slide10" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide10" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery10.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide9" className="btn btn-circle">❮</a>
                                <a href="#slide11" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide11" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery11.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide10" className="btn btn-circle">❮</a>
                                <a href="#slide12" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide12" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery12.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide11" className="btn btn-circle">❮</a>
                                <a href="#slide13" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide13" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery13.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide12" className="btn btn-circle">❮</a>
                                <a href="#slide14" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide14" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery14.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide13" className="btn btn-circle">❮</a>
                                <a href="#slide15" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide15" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery15.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide14" className="btn btn-circle">❮</a>
                                <a href="#slide16" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide16" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery16.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide15" className="btn btn-circle">❮</a>
                                <a href="#slide17" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide17" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery17.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide16" className="btn btn-circle">❮</a>
                                <a href="#slide18" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide18" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery18.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide17" className="btn btn-circle">❮</a>
                                <a href="#slide19" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide19" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery19.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide18" className="btn btn-circle">❮</a>
                                <a href="#slide20" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide20" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery20.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide19" className="btn btn-circle">❮</a>
                                <a href="#slide21" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide21" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery21.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide20" className="btn btn-circle">❮</a>
                                <a href="#slide22" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide22" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery22.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide21" className="btn btn-circle">❮</a>
                                <a href="#slide23" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide23" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery23.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide22" className="btn btn-circle">❮</a>
                                <a href="#slide24" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide24" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery24.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide23" className="btn btn-circle">❮</a>
                                <a href="#slide25" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide25" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery25.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide24" className="btn btn-circle">❮</a>
                                <a href="#slide26" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide26" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery26.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide25" className="btn btn-circle">❮</a>
                                <a href="#slide27" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide27" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery27.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide26" className="btn btn-circle">❮</a>
                                <a href="#slide28" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide28" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery28.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide27" className="btn btn-circle">❮</a>
                                <a href="#slide29" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide29" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery29.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide28" className="btn btn-circle">❮</a>
                                <a href="#slide30" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide30" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery30.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide29" className="btn btn-circle">❮</a>
                                <a href="#slide31" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide31" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery31.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide30" className="btn btn-circle">❮</a>
                                <a href="#slide32" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide32" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery32.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide31" className="btn btn-circle">❮</a>
                                <a href="#slide33" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide33" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0024.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide32" className="btn btn-circle">❮</a>
                                <a href="#slide34" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide34" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0026.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide33" className="btn btn-circle">❮</a>
                                <a href="#slide35" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide35" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0028.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide34" className="btn btn-circle">❮</a>
                                <a href="#slide36" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide36" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0035.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide35" className="btn btn-circle">❮</a>
                                <a href="#slide37" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide37" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0045.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide36" className="btn btn-circle">❮</a>
                                <a href="#slide38" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide38" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0050.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide37" className="btn btn-circle">❮</a>
                                <a href="#slide39" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide39" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0060.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide38" className="btn btn-circle">❮</a>
                                <a href="#slide40" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide40" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0064.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide39" className="btn btn-circle">❮</a>
                                <a href="#slide41" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide41" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0095.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide40" className="btn btn-circle">❮</a>
                                <a href="#slide42" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide42" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0138.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide41" className="btn btn-circle">❮</a>
                                <a href="#slide43" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide43" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0155.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide42" className="btn btn-circle">❮</a>
                                <a href="#slide44" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide44" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0159(1).jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide43" className="btn btn-circle">❮</a>
                                <a href="#slide45" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide45" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0164.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide44" className="btn btn-circle">❮</a>
                                <a href="#slide46" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide46" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0167.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide45" className="btn btn-circle">❮</a>
                                <a href="#slide47" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide47" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0185.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide46" className="btn btn-circle">❮</a>
                                <a href="#slide48" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide48" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0186.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide47" className="btn btn-circle">❮</a>
                                <a href="#slide49" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide49" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0189(2).jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide48" className="btn btn-circle">❮</a>
                                <a href="#slide50" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide50" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0192.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide49" className="btn btn-circle">❮</a>
                                <a href="#slide51" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide51" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0194.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide50" className="btn btn-circle">❮</a>
                                <a href="#slide52" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide52" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0199.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide51" className="btn btn-circle">❮</a>
                                <a href="#slide53" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide53" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/DSC_0204.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide52" className="btn btn-circle">❮</a>
                                <a href="#slide54" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide54" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery33.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide53" className="btn btn-circle">❮</a>
                                <a href="#slide55" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide55" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery34.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide54" className="btn btn-circle">❮</a>
                                <a href="#slide56" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide56" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery35.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide55" className="btn btn-circle">❮</a>
                                <a href="#slide57" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide57" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery36.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide56" className="btn btn-circle">❮</a>
                                <a href="#slide58" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide58" className="carousel-item relative w-full items-center justify-center">
                            <img src="src/assets/gallery/gallery37.jpg" className="lg:w-auto lg:h-3/4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide57" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
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