import React from 'react';
import { Helmet } from 'react-helmet';

function History() {
    return(
        <div>
            <Helmet>
                <title>Squad 9 - History</title>
            </Helmet>

            {/* Main Container */}
            <div className="container-fluid my-5">
                <div class="row justify-content-center pt-5">
                    <div class="col-md-9 col-xl-7">
                        <img src="/assets/images/history_img.jpg" alt="Squad 9 in the early days" class="history-img" />
                        <h1 class="text-center mt-5">The history of Squad 9</h1>
                        <hr class="main-hor-rule" />
                        <p class="text-center mb-5">Click one of the sections below to read up on different eras of Squad 9's history.</p>
                    </div>
                </div>
            </div>

            {/* Backing Image */}
            <div class="backing-image-1 backing-image-2"></div>
        </div>
    )
}

export default History;