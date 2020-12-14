import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {

    const donateBar = {
        backgroundColor: '#003055',
        height: 2 + 'rem'
    }

    const donateBarProgress = {
        width: 5 + '%'
    }

    const nitroBar = {
        backgroundColor: 'hsl(260, 40%, 20%)',
        height: 2 + 'rem'
    }

    const nitroBarProgress = {
        backgroundColor: '#6929DD',
        width: 33 + '%'
    }

    return (

    <div>

        {/* Main Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide d-none d-md-block" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/assets/images/slideshow_1.jpg" className="carousel-image d-block w-100" alt="Master Chief Collection" />
                    <div className="carousel-caption d-none d-md-block">
                        <img src="/assets/images/slidecard_1.png" className="carousel-card" alt="Halo: The Master Chief Collection" />
                    </div>
                    <div className="carousel-card-shadow"></div>
                </div>
                <div className="carousel-item">
                    <img src="/assets/images/slideshow_2.jpg" className="carousel-image d-block w-100" alt="Modern Warfare Price Breaching" />
                    <div className="carousel-caption d-none d-md-block">
                        <img src="/assets/images/slidecard_2.png" className="carousel-card" alt="Call of Duty: Modern Warfare" />
                    </div>
                    <div className="carousel-card-shadow"></div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        {/* Hero Container */}
        <div className="container-fluid py-5">
            <div className="row row-content pt-5 pt-md-0">
                <div className="col">
                    <h1 className="text-center text-uppercase">We are Squad 9</h1>
                </div>
            </div>
            <div className="row row-content pt-4 pb-3">
                <div className="col-lg-9 col-xl-7 mx-auto">
                    <p>Squad 9 is a worldwide PC gaming community that formed on Halo: Combat Evolved in 2003, and has been active ever since. We aspire to offer our members the best team experience possible:</p>
                </div>
            </div>
            <div className="row row-content pb-4">
                <div className="col">
                    <h3 className="text-center alt-motto">TEAMWORK | EXPERIENCE | LEADERSHIP</h3>
                </div>
            </div>
            <div className="row justify-content-center pt-2 pb-3">
                <div className="col-lg-9 col-xl-7">
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col-md-4 pb-3 pb-md-0">
                                <a href="https://steamcommunity.com/groups/squad-9" target="_blank" rel="noreferrer" className="btn btn-dark btn-lg btn-block text-md-right">
                                    <img src="/assets/images/icons/steam.png" alt="Steam Icon" className="icon-steam d-none d-md-block" />
                                    Our Steam Group
                                </a>
                            </div>
                            <div className="col-md-4 px-md-0 pb-3 pb-md-0">
                                <NavLink to="/join" className="btn btn-dark btn-lg btn-block button-text-large">Join Us</NavLink>
                            </div>
                            <div className="col-md-4">
                                <a href="https://discord.com/invite/hFAz3f7" target="_blank" rel="noreferrer" className="btn btn-dark btn-lg btn-block text-md-left">
                                    <img src="/assets/images/icons/discord.png" alt="Discord" className="icon-discord d-none d-md-block" />
                                    Our Discord
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Support Us Box */}
        <div className="container-bg container-bg-2">
            <div className="container-fluid pt-5 pb-4 pb-md-5">
                <div className="row">
                    <div className="col pb-4">
                        <h1 className="text-center">Holiday Fundraiser Raffle</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-7">
                        <p>It's that time again! Our fundraiser will last from December 1st to 26th and our goal will be to raise $500 or more if possible. Members can donate via Paypal and their name(s) will be entered once for every $5 donated into a drawing for the various prizes, to be determined according to how much gets raised overall.</p>
                    </div>
                </div>
                <div className="row justify-content-center mt-3 mb-5" id="fundraiser-raffle-box">
                    <div className="col-lg-9 col-xl-7">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col p-0">
                                    <h3 className="text-white">$0</h3>
                                </div>
                                <div className="col p-0">
                                    <h3 className="text-right text-white">
                                        $500
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="progress" style={donateBar}>
                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="500" style={donateBarProgress}>$25</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3 mb-5" id="discord-nitro-box">
                    <div className="col-lg-9 col-xl-7">
                        <h2 className="text-center mb-3">Discord Nitro Boosters</h2>
                        <p>For those willing to boost the server by purchasing Discord Nitro (which gives 2 boosts) or buy a boost separately, there will be a separate drawing of only boosters once we attain the 15 boost mark for our server.</p>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col p-0">
                                    <h3 className="text-white">0</h3>
                                </div>
                                <div className="col p-0">
                                    <h3 className="text-right text-white">
                                        15
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="progress" style={nitroBar}>
                            <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="500" style={nitroBarProgress}>5 boosts</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pb-5 pb-md-3">
                    <a href="http://paypal.me/Squad9Gaming" target="_blank" rel="noreferrer">
                        <img src="/assets/images/buttons/donate-button.png" alt="Donate Button" className="donate-button" />
                    </a>
                </div>
            </div>
        </div>

        {/* Backing Image */}
        <div className="backing-image-1">
        </div>
    </div>
    )
}

export default Home;