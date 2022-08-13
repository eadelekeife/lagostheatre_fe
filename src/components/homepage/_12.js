import "./_1.css";

import React from 'react';

import Footer from '../../utils/footer';

import _1 from '../../assets/images/homepage/_1.jpg';
import _2 from '../../assets/images/homepage/_2.jpg';
import _3 from '../../assets/images/homepage/_3.jpg';
import _4 from '../../assets/images/homepage/_4.jpg';

const Homepage = () => {
    return (
        <div>
            <div className="new_header">
                <iframe
                    src="https://player.vimeo.com/video/700882546?h=0719d4ae33&amp;loop=1&amp;background=1&amp;app_id=122963pd"
                    frameborder="0" width="426" height="240" allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen="" className="video" title="DTH_Sizzle Reel_" data-ready="true"></iframe>
            </div>
            <div className="props">
                <div className="contain">
                    <div className="grid_4">
                        <div>
                            <img src={_1} alt="_1" />
                        </div>
                        <div>
                            <img src={_2} alt="_1" />
                        </div>
                        <div>
                            <img src={_3} alt="_1" />
                        </div>
                        <div>
                            <img src={_4} alt="_1" />
                        </div>
                        <div>
                            <img src={_1} alt="_1" />
                        </div>
                        <div>
                            <img src={_2} alt="_1" />
                        </div>
                        <div>
                            <img src={_3} alt="_1" />
                        </div>
                        <div>
                            <img src={_4} alt="_1" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;