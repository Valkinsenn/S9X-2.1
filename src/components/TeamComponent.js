import React from 'react';

function Team() {
    return(
        <div>

            {/* Main Container */}
            <div class="container-fluid pt-5 pb-4">
                <div class="row pt-5 justify-content-center">
                    <div class="col-md-9 col-xl-7">
                        <h1 class="text-center">Who We Are</h1>
                        <hr class="main-hor-rule" />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-9 col-xl-7">
                        <h4 class="text-center mb-4">Our mission and what sets us apart</h4>
                        <p>Squad 9's mission is to give its members the opportunity to achieve greatness by committing themselves to the team and sharing in its accomplishments.</p>
                        <p>We work as a team.  We fight together as a team.  We win as a team.</p>
                        <p>We have a vision for becoming a premier community and gaming organization that operates both casually and competitively.</p>
                        <p>First and foremost, we consider ourselves a team instead of a clan.  The term "clan" no longer holds the same prestige it once did.  The norms of contemporary clans are something Squad 9 has no interest in emulating.  Many clans also lack firm values.  We have outlasted our competition precisely because we have values that define who we are and how we operate.  Our Code of Conduct is the foundation for the Squad and its success - because while members and organizations change with time, principles remain.</p>
                        <p>Our highest aim is to set a new standard for what gamers can achieve.  We welcome anyone who supports this mission and our values.</p>
                    </div>
                </div>
            </div>

            {/* Team Logo, Color, and Motto */}
            <div class="container-fluid container-bg py-5">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-xl-7">
                        <h2 class="text-center">Team Logo, color, and motto</h2>
                        <hr class="main-hor-rule" />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-4 col-xl-2 d-flex justify-content-center align-items-center">
                        <img src="/assets/images/icons/fulllogo.png" alt="Squad 9 Full Logo" width="275px" height="275px" />
                    </div>
                    <div class="col-md-5 col-xl-5">
                        <p>The Squad 9 Warhawk has been a part of the team's tradition since its founding.  Like an actual bird of prey, we aim to be highly skilled and precise so our members can soar ever higher in the PC gaming community.</p>
                        <p>Our logo has seen 16 official iterations since 2006 and countless variants and spin-offs have appeared both as member creations and in various games we've played.</p>
                        <p>The Warhawk was loosely inspired by the GDI logo from the Command & Conquer series, despite none of these games ever being adopted by Squad 9.</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-9 col-xl-7">
                        <p>Squad 9's team color has always been cobalt blue.  Beginning as a tradition on Halo, members of the team used cobalt-colored Spartan armor to identify one another in free-for-all Slayer matches, making it possible to band together and avoid friendly fire - since cobalt was less frequently used by other players.</p>
                        <p>Ever since, Squad 9 has used cobalt as its primary color.  Our secondary colors include navy blue, silver, and onyx.</p>
                    </div>
                </div>
            </div>

            {/* "For Honor and Glory" */}
            <div class="container-fluid py-5">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-xl-7">
                        <h2 class="text-center">"For honor and glory"</h2>
                        <hr class="main-hor-rule" />
                        <p>Squad 9's first motto was the title from a music track in the original Command & Conquer RTS game circa 1995, entitled "Fight, Win, Prevail!" and served as the official tagline until 2008.</p>
                        <p>The contemporary motto, "For Honor and Glory" has no true origin other than being a firm expression of our motivation.  Bringing Glory to gaming by conducting ourselves always with Honor has been the Squad 9 way.  True Glory also comes by bringing Honor to the team.  This has been one of our foremost guiding principles and sits at the core of what we do.</p>
                    </div>
                </div>
            </div>

            {/* Role Models and Inspirations */}
            <div class="container-fluid container-bg container-bg-3 py-5">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-xl-7">
                        <h2 class="text-center">Role models and inspiration</h2>
                        <hr class="main-hor-rule" />
                    </div>
                </div>
                <div class="row justify-content-center mt-2 mb-3">
                    <div class="col-md-9 col-xl-7">
                        <div class="container-fluid px-0">
                            <div class="row">
                                <div class="col-sm-6 pr-sm-2 mb-3 mb-sm-0">
                                    <img src="/assets/images/teamimg_1.jpg" alt="The Ghosts" class="team-img" />
                                </div>
                                <div class="col-sm-6 pl-sm-2">
                                    <img src="/assets/images/teamimg_2.jpg" alt="Raven Shield" class="team-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-9 col-xl-7">
                        <p>Squad 9 strives to emulate the dynamics of the best teams, as modeled by units like the Ghosts of GRAW and Team Rainbow. Though these teams are fictional, they serve as examples of what can be achieved with effective teamwork.</p>
                        <p>In addition, the music from Tom Clancy games has often appeared as the backdrop for Squad 9's websites.  The vibes of these classic titles' soundtracks are consistent with Squad 9's motto and are meant to convey strength, virtue, and the thrill that accompanies victory.</p>
                        <p>We are warriors, leaders, teammates, and friends.  We sacrifice for one another, lean on each other like family, and share the experience of playing, winning, and growing as a Squad.</p>
                    </div>
                </div>
            </div>

            {/* Backing Image */}
            <div className="video-container">
                <div class="lattice-grid-1"></div>
                <video class="bg-video" autoPlay muted loop>
                    <source src="/assets/video/s9_flag.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Team;