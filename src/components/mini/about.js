import React from "react";

import Footer from "../../utils/footer";
import Nav from "../../utils/nav";

import _1 from "../../assets/images/mini/_1.webp";
import _2 from "../../assets/images/mini/_2.webp";

import user1 from "../../assets/images/mini/user1.webp";
import user2 from "../../assets/images/mini/user2.webp";
import user3 from "../../assets/images/mini/user3.webp";
import user4 from "../../assets/images/mini/user4.webp";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="about">
            <Nav />
            <div className="about_hero">

            </div>
            <div>
                <div className="contain">
                    <div className="grid_2 mini_content">
                        <div className="sticky_div">
                            <div>
                                <div className="first_display">
                                    <h3>Who We Are</h3>
                                    <div className="sticky_compartment">
                                        <Link to="/">Join our Mailing List</Link>
                                        <p>For all general inquiries, please call 212.690.2800 or
                                            email <Link to="/">eadelekeif@gmail.com</Link>
                                        </p>
                                        <p>For all press inquiries, please contact Billy Zavelson
                                            at <Link to="/">eadelekeif@gmail.com</Link></p>
                                        <p className="mt_3">For questions about DTH School and DTB program, please
                                            contact school-info@dancetheatreofharlem.org.</p>
                                    </div>
                                    <div className="sticky_compartment">
                                        <p>
                                            Every company has its "Cinderella" story about those dark times when it has just started hitting
                                            the market. Our story takes its beginning in 2013, at a small office with a few like - minded
                                            people and bottomless cups of coffee, that kept us working throughout the night
                                        </p>
                                    </div>
                                    <div className="sticky_compartment">
                                        <div>
                                            <ion-icon name="logo-facebook"></ion-icon>
                                            <ion-icon name="logo-twitter"></ion-icon>
                                            <ion-icon name="logo-instagram"></ion-icon>
                                            <ion-icon name="logo-youtube"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mini_main_area">
                            <div>
                                <p>
                                    In 1969, at the height of the civil rights movement, Arthur Mitchell and Karel Shook
                                    founded Dance Theatre of Harlem. Their vision remains one of the most democratic in dance.
                                </p>
                                <p>
                                    In moments of extreme injustice and frustration the most impactful art is born. This is true
                                    of the inception of one of the most influential American ballet companies of the last five
                                    decades, Dance Theatre of Harlem.
                                </p>
                                <p>
                                    Arthur Mitchell created the company in New York City, after making history in 1955 as
                                    the first black principal dancer at New York City Ballet. He was also the famed protégé
                                    of George Balanchine—the Russian-born dancer, choreographer and co-founder of the School
                                    of American Ballet. Mitchell’s impulse to start Dance Theatre of Harlem is said to have
                                    been spurred by the assassination of Martin Luther King Jr. on April 4, 1968.
                                </p>
                            </div>
                            <div className="">
                                <img src={_1} alt="_1" />
                                <div>
                                    <p>
                                        In 1969, at the height of the civil rights movement, Arthur Mitchell and Karel Shook
                                        founded Dance Theatre of Harlem. Their vision remains one of the most democratic in dance.
                                    </p>
                                    <p>
                                        In moments of extreme injustice and frustration the most impactful art is born. This is true
                                        of the inception of one of the most influential American ballet companies of the last five
                                        decades, Dance Theatre of Harlem.
                                    </p>
                                    <p>
                                        Arthur Mitchell created the company in New York City, after making history in 1955 as
                                        the first black principal dancer at New York City Ballet. He was also the famed protégé
                                        of George Balanchine—the Russian-born dancer, choreographer and co-founder of the School
                                        of American Ballet. Mitchell’s impulse to start Dance Theatre of Harlem is said to have
                                        been spurred by the assassination of Martin Luther King Jr. on April 4, 1968.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Homepage;