import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import NoteContext from './Notecontext';
export default function MainPage() {
    const { oldsong, motisongs, sad, punjabi, Honey, english, Kanika, friend, lovesong, Monali, Shreya, Shiv, Neha, bajrangbali, Weeding, ArijitSingh, Pritam, Raheman, Atif, Sunidhi } = useContext(NoteContext);
    return (
        <>
            <div className="main1" style={{ height: "700px", backgroundImage: 'url("music2.jpg")' }}>
                <div className="main2" style={{ marginLeft: '40px', paddingTop: '60px' }}>
                    <h1 style={{ fontSize: '45px', color: '#FFEAEA' }}>Music Is An <br /> Outbrust Of The Soul</h1>
                    <p style={{ color: '#FFEAEA' }}>Music Express That Which Cannot Be Said & On Which It Is Impossible To Be Silent </p>
                    <div className="buttons" style={{ display: 'flex' }}>
                        <button style={{ height: '40px', width: '120px', borderRadius: '20px', border: 'none', backgroundColor: 'blue', color: 'white' }}>All Songs</button>
                        <button style={{ height: '40px', width: '120px', borderRadius: '20px', border: 'none', marginLeft: '20px', backgroundColor: 'pink', }}>Favourite</button>
                    </div>
                </div>
                <h3 style={{ marginTop: '20px', marginLeft: '40px', color: 'white' }}>Categories</h3>
                <div className="categories-container">
                    <div className="categories-grid">

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={lovesong}>
                                <img src="https://tse2.mm.bing.net/th/id/OIP.ft9uxUZwGKH-rEwZU2fQFAHaEK?pid=Api&P=0&h=180" alt="Love" />
                                <p style={{ marginTop: '10px', color: 'white' }}>Love</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={oldsong}>
                                <img src="https://i.ytimg.com/vi/-sbKzeFczbw/maxresdefault.jpg" alt="90's Songs" />
                                <p style={{ marginTop: '10px', color: 'white' }}>90's Songs</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={motisongs}>
                                <img src="https://tse2.mm.bing.net/th/id/OIP.ssCA9pjPuRCmCtkWmDgdZwHaES?pid=Api&P=0&h=180" alt="Motivational" />
                                <p style={{ marginTop: '10px', color: 'white' }}>Motivational</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={sad}>
                                <img src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d3/a1/35/d3a1356f-ad59-1875-a2fe-44d418ee9dd9/21UMGIM83356.rgb.jpg/1200x1200bf-60.jpg" alt="Sad Songs" />
                                <p style={{ marginTop: '10px', color: 'white' }}>Sad Songs</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={punjabi}>
                                <img src="https://i.ytimg.com/vi/CtdrCMHjTsM/maxresdefault.jpg" alt="Punjabi" />
                                <p style={{ marginTop: '10px', color: 'white' }}>Punjabi</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={english}>
                                <img src="https://tse3.mm.bing.net/th/id/OIP.IPW3a4hRDNnsOUfyvCiPQgHaHa?pid=Api&P=0&h=180" alt="English" />
                                <p style={{ marginTop: '10px', color: 'white' }}>English</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={friend}>
                                <img src="https://tse3.mm.bing.net/th/id/OIP.CDXcHIrBtF3uMoOvW3ufpwHaHa?pid=Api&P=0&h=180" alt="Friendship" />
                                <p style={{ marginTop: '10px', color: 'white' }}>Friendship</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={Shiv}>
                                <img src="https://wallpapercave.com/wp/wp5519602.jpg" alt="Shivji Songs" />
                                <p style={{ marginTop: '10px', color: 'white' }}>Shivji Songs</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main4" onClick={bajrangbali}>
                                <img src="https://wallpaperaccess.com/full/1430485.jpg" alt="Bajrangbali" />
                                <p style={{ marginTop: '10px', color: 'white' }}>Bajrangbali</p>
                            </div>
                        </Link>

                        <Link to="/Songs" style={{ textDecoration: 'none' }}>
                            <div className="main5" id='wee' onClick={Weeding}>
                                <img src="https://media.weddingz.in/images/ce19d3c809fd4e350f5ab5716a791886/Wedding-reels-songs.jpg" alt="Wedding" />
                                <p style={{ marginTop: '10px', color: 'white' }}>Wedding</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="singers-container">
                <Link to="/Songs" style={{textDecoration:"none"}}><div className="singer" onClick={ArijitSingh}>
                    <img src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-53685247/53685247.jpg" alt="Arijit Singh" />
                    <p>Arijit Singh</p>
                </div></Link>

                <Link to="/Songs" style={{textDecoration:"none"}}><div className="singer" onClick={Pritam}>
                    <img src="https://img.discogs.com/vGsioytB0N4XeMxmyK1yYQQRT5o=/525x515/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-3895034-1517157761-2697.jpeg.jpg" alt="Pritam" />
                    <p>Pritam</p>
                </div></Link>

                <Link to="/Songs" style={{textDecoration:"none"}}><div className="singer" onClick={Raheman}>
                    <img src="https://indiawest.com/wp-content/uploads/2023/01/ef1ffc9a4cdd9a956d6f5148a07e793d.jpg" alt="A.R Rahman" />
                    <p>A.R Rahman</p>
                </div></Link>

                <Link to="/Songs" style={{textDecoration:"none"}}><div className="singer" onClick={Atif}>
                    <img src="https://tse4.mm.bing.net/th/id/OIP.Z1eNquFUNtomkYrtNpoApQHaIK?pid=Api&P=0&h=180" alt="Atif Aslam" />
                    <p>Atif Aslam</p>
                </div></Link>

                <Link to="/Songs" style={{textDecoration:"none"}}><div className="singer" onClick={Honey}>
                    <img src="https://i.scdn.co/image/ab6761610000e5ebbc7e4fffd515b47ff1ebbc1f" alt="Honey Singh" />
                    <p>Honey Singh</p>
                </div></Link>

                <Link to="/Songs"  style={{textDecoration:"none"}}><div className="singer" onClick={Shreya}>
                    <img src="https://rollingstoneindia.com/wp-content/uploads/2020/08/Shreya-Ghoshal-960x852.jpg" alt="Shreya Ghoshal" />
                    <p>Shreya Ghoshal</p>
                </div></Link>

                <Link to="/Songs"  style={{textDecoration:"none"}}><div className="singer" onClick={Sunidhi}>
                    <img src="https://tse4.mm.bing.net/th/id/OIP.sYUg-AFmvsX16ctVMiM8FQHaHT?pid=Api&P=0&h=180" alt="Sunidhi Chauhan" />
                    <p>Sunidhi Chauhan</p>
                </div></Link>

                <Link to="/Songs"  style={{textDecoration:"none"}}><div className="singer" onClick={Neha}>
                    <img src="http://bollyhollybaba.com/wp-content/uploads/2019/12/Neha-kakkar-biographysingerCareer.jpg" alt="Neha Kakkar" />
                    <p>Neha Kakkar</p>
                </div></Link>

                <Link to="/Songs"  style={{textDecoration:"none"}}><div className="singer" onClick={Kanika}>
                    <img src="https://static.toiimg.com/photo/msid-81725653/81725653.jpg" alt="Kanika Kapoor" />
                    <p>Kanika Kapoor</p>
                </div></Link>

                <Link to="/Songs"  style={{textDecoration:"none"}}><div className="singer" onClick={Monali}>
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/736/1014/desktop-wallpaper-monali-thakur-latest-hot-monali-thakur.jpg" alt="Monali Thakur" />
                    <p>Monali Thakur</p>
                </div></Link>
            </div>
            <footer className="footer">
                <div className="footer-sections">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Jobs</p>
                        <p>For the Record</p>
                    </div>
                    <div className="footer-column">
                        <h4>Communities</h4>
                        <p>For Artists</p>
                        <p>Developers</p>
                        <p>Advertising</p>
                        <p>Investors</p>
                        <p>Vendors</p>
                    </div>
                    <div className="footer-column">
                        <h4>Useful links</h4>
                        <p>Support</p>
                        <p>Free Mobile App</p>
                        <p>Popular by Country</p>
                    </div>
                    <div className="footer-column">
                        <h4>Spotify Plans</h4>
                        <p>Premium Individual</p>
                        <p>Premium Duo</p>
                        <p>Premium Family</p>
                        <p>Premium Student</p>
                        <p>Spotify Free</p>
                    </div>
                    <div className="footer-socials">
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebookF />
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Spotify AB</p>
                </div>
            </footer>

        </>
    )
}
