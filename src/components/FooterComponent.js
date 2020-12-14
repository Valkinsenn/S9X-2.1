import React from 'react';

function Footer() {
    return (
        <footer className="container-fluid">
            <div className="row bg-darkest pt-4 pb-4 justify-content-center">
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex flex-column justify-content-center justify-content-md-start align-items-md-baseline">
                    <h2 className="text-center text-lg-left">Squad 9</h2>
                    <h5 className="text-center motto-text-footer">For honor and glory</h5>
                </div>
                <div className="col-md-6 col-lg-5 col-xl-4 d-flex justify-content-center justify-content-md-end align-items-center pb-2 pb-md-0">
                    <a href="https://steamcommunity.com/groups/squad-9" target="_blank" rel="noreferrer">
                        <img src="/assets/images/icons/steam.png" alt="Steam Group" class="official-link steam" />
                    </a>

                    <a href="https://go.twitch.tv/squad9gaming" class="ml-2" target="_blank" rel="noreferrer">
                        <img src="/assets/images/icons/twitch.png" alt="Twitch Icon" class="official-link twitch" />
                    </a>

                    <a href="https://twitter.com/Squad9Gaming" class="ml-2" target="_blank" rel="noreferrer">
                        <img src="/assets/images/icons/twitter.png" alt="Twitter Icon" class="official-link twitter" />
                    </a>

                    <a href="https://www.youtube.com/channel/UCy8-IsZjGxCZLPmWxYmH5rQ" class="ml-2" target="_blank" rel="noreferrer">
                        <img src="/assets/images/icons/youtube.png" alt="YouTube Icon" class="official-link youtube" />
                    </a>
                </div>
            </div>
            <div class="row bg-darker pt-3 justify-content-center">
                <div class="col py-0">
                    <p class="text-center copyright-text">
                        Copyright 2020 Squad 9. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;