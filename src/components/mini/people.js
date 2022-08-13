import './mini.css';

import React, { useEffect, useState } from 'react';

import { Divider } from 'antd';

import Ben from '../../assets/images/mini/ben.webp';
import _1 from '../../assets/images/people/_1.jpg';
import _2 from '../../assets/images/people/_2.jpg';
import _3 from '../../assets/images/people/_3.jpg';

import Footer from '../../utils/footer';

const FAQ = () => {
    const getOffset = element => {
        const elementRect = element?.getBoundingClientRect();
        return elementRect?.top;
    }
    const listenToScoll = () => {
        const heightToHide = getOffset(document.querySelector('#sticky'));
        const windowScrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
        if (windowScrollHeight > heightToHide) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScoll);
        return () => window.removeEventListener("scroll", listenToScoll)
    }, [])
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div>
            <div className="">
                <div className="mini_black_bg">
                    <div className="contain">
                        <h6>OUR STORY</h6>
                        <h5>This is not our story</h5>
                    </div>
                </div>
                <div className="faq_main_div faq_first_text">
                    <div className="faq_container">
                        <div className="grid_2">
                            <div className="extra_data">
                                <div id="sticky">
                                    {
                                        isVisible && (
                                            <div className="stickyButton">
                                                <h2>Studio Rentals</h2>
                                                <p>Please call 212.690.2800 for more information or email
                                                    studiorental@dancetheatreofharlem.org</p>
                                                <img src={Ben} alt="ben from mailchimp website" />
                                            </div>
                                        )
                                    }
                                    {
                                        !isVisible && (
                                            <div className="stickyButtoner">
                                                {/* <button>
                                                    Replacement button
                                                </button> */}
                                                <h2>Studio Rentals</h2>
                                                <p>Please call 212.690.2800 for more information or email
                                                    studiorental@dancetheatreofharlem.org</p>
                                                <img src={Ben} alt="ben from mailchimp website" />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Main auditorium</h3>
                                    <div>
                                        <p>Ben and Dan loved serving these users, because understanding small
                                            businesses is in their DNA: Ben grew up helping his mom around her
                                            hair salon that she ran from their family kitchen, and Dan’s parents
                                            ran a bakery. With Mailchimp, they found that working for small
                                            businesses gave them the freedom to be more creative and adapt quickly
                                            to their needs. So, in 2007, Ben and Dan decided to shutter the web
                                            design agency and focus exclusively on Mailchimp.
                                        </p>
                                        <div className="people">
                                            <div className="grid_3">
                                                <div>
                                                    <img src={_1} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_2} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Dep. Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider />
                                            <div className="grid_4">
                                                <div>
                                                    <img src={_1} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_2} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Dep. Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_1} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_2} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Dep. Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_1} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_2} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Dep. Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_1} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_2} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Dep. Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={_3} alt="governor" />
                                                    <div>
                                                        <h5>Gov. Babajide Sanwo-olu</h5>
                                                        <p>Governor, Lagos State</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default FAQ;