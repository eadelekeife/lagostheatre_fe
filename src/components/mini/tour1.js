import './mini.css';

import React from 'react';


import Ben from '../../assets/images/mini/ben.webp';
import Culture from '../../assets/images/mini/culture.webp';
import Footer from '../../utils/footer';

const FAQ = () => {
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
                    <div className="contain">
                        <div className="grid_2">
                            <div className="extra_data">
                                <h2>Open for use</h2>
                                <p>
                                    In 2020, we started Brass with the simple belief that businesses everywhere can
                                    have access to top-end money operations and cashflow services to ensure they can
                                    finance their business growth with cheaper and easy.
                                </p>
                                <ul>
                                    <li>
                                        <span>Call: <a href="">081322773616</a></span>
                                    </li>
                                    <li>
                                        <span>Mail: <a href="">081322773616</a></span>
                                    </li>
                                    <li>
                                        <span>Address: 5, Onike street, NYSC bus stop, Igando Ikotun Lagos</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="">
                                    <div>
                                        <p>It is about the millions of local businesses struggling to lay their foundation</p>
                                        <p>It is about the millions of local businesses struggling to lay their foundation
                                            and grow. In 2020, we started Brass with the simple belief that businesses
                                            everywhere can have access to top-end money operations and cashflow services
                                            to ensure they can finance their business growth with cheaper and easy.
                                        </p>
                                        <p>It is about the millions of local businesses struggling to lay their foundation
                                            and grow. In 2020, we started Brass with the simple belief that businesses
                                            everywhere can have access to top-end money operations and cashflow services
                                            to ensure they can finance their business growth with cheaper and easy.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3>Main auditorium</h3>
                                    <div>
                                        {/* <p>It is about the millions of local businesses struggling to lay their foundation
                                            and grow. In 2020, we started Brass with the simple belief that businesses
                                            everywhere can have access to top-end money operations and cashflow services
                                            to ensure they can finance their business growth with cheaper and easy.
                                        </p>
                                        <p>It is about the millions of local businesses struggling to lay their foundation
                                            and grow. In 2020, we started Brass with the simple belief that businesses
                                            everywhere can have access to top-end money operations and cashflow services
                                            to ensure they can finance their business growth with cheaper and easy.
                                        </p> */}
                                        <img src={Ben} alt="ben from mailchimp website" />
                                        <p>Ben and Dan loved serving these users, because understanding small
                                            businesses is in their DNA: Ben grew up helping his mom around her
                                            hair salon that she ran from their family kitchen, and Dan’s parents
                                            ran a bakery. With Mailchimp, they found that working for small
                                            businesses gave them the freedom to be more creative and adapt quickly
                                            to their needs. So, in 2007, Ben and Dan decided to shutter the web
                                            design agency and focus exclusively on Mailchimp.
                                        </p>
                                        <p>While the new company started as an email marketing tool, our customers
                                            repeatedly asked us to spread the Mailchimp magic to other channels. They
                                            taught us that Mailchimp’s brand promise is to help small businesses
                                            “look pro and grow,” no matter the channel.
                                        </p>
                                        <p>Ben and Dan loved serving these users, because understanding small
                                            businesses is in their DNA: Ben grew up helping his mom around her
                                            hair salon that she ran from their family kitchen, and Dan’s parents
                                            ran a bakery. With Mailchimp, they found that working for small
                                            businesses gave them the freedom to be more creative and adapt quickly
                                            to their needs. So, in 2007, Ben and Dan decided to shutter the web
                                            design agency and focus exclusively on Mailchimp.
                                        </p>
                                        <p>While the new company started as an email marketing tool, our customers
                                            repeatedly asked us to spread the Mailchimp magic to other channels. They
                                            taught us that Mailchimp’s brand promise is to help small businesses
                                            “look pro and grow,” no matter the channel.
                                        </p>
                                        <img src={Culture} alt="culture from mailchimp website" />
                                        <p>Ben and Dan loved serving these users, because understanding small
                                            businesses is in their DNA: Ben grew up helping his mom around her
                                            hair salon that she ran from their family kitchen, and Dan’s parents
                                            ran a bakery. With Mailchimp, they found that working for small
                                            businesses gave them the freedom to be more creative and adapt quickly
                                            to their needs. So, in 2007, Ben and Dan decided to shutter the web
                                            design agency and focus exclusively on Mailchimp.
                                        </p>
                                        <p>While the new company started as an email marketing tool, our customers
                                            repeatedly asked us to spread the Mailchimp magic to other channels. They
                                            taught us that Mailchimp’s brand promise is to help small businesses
                                            “look pro and grow,” no matter the channel.
                                        </p>
                                        <p>Ben and Dan loved serving these users, because understanding small
                                            businesses is in their DNA: Ben grew up helping his mom around her
                                            hair salon that she ran from their family kitchen, and Dan’s parents
                                            ran a bakery. With Mailchimp, they found that working for small
                                            businesses gave them the freedom to be more creative and adapt quickly
                                            to their needs. So, in 2007, Ben and Dan decided to shutter the web
                                            design agency and focus exclusively on Mailchimp.
                                        </p>
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