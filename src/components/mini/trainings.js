import React from "react";

import Footer from "../../utils/footer";
import Nav from "../../utils/nav";

import _1 from "../../assets/images/mini/_1.webp";
import _2 from "../../assets/images/mini/_2.webp";

import Training from "../../assets/images/real/training3.jpg";

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
                                    The Lagos Theatre Igando, because of its passion for Child and Children development
                                    and Empowerment introduced the LTI Creative Club for the children of Alimosho and
                                    every other community.
                                </p>
                                <p>Activities Include but are not limited to:</p>
                                <ul className="column">
                                    <li>Music</li>
                                    <li>Dance</li>
                                    <li>Drama</li>
                                    <li>Chess</li>
                                    <li>Coding</li>
                                    <li>Tie and Dye</li>
                                    <li>Knitting</li>
                                    <li>Visual arts and painting</li>
                                    <li>Traditional African Drums (Making & Playing)</li>
                                </ul>
                                <img src={Training} alt="_1" />
                                <p>There are lots of benefits attached to joining the LTI Creative Club. To mention a few are:</p>
                                <ul>
                                    <li>Joining the LTI Creative Club gives your child the opportunity to participate
                                        in International Chess Tournaments.</li>
                                    <li>Membership of the LTI Creative Club gives your child 20% discount on all theatre events/shows.</li>
                                    <li>Families of the LTI Creative club automatically have a 20% discount on the use of the theatre.</li>
                                    <li>LTI Creative Club membership gives your child the access to the theatre’s Recreation Park</li>
                                    <li>Also, members are awarded with amazing gifts such as LTI T-shirts, backpacks, water bottles and stationaries</li>
                                    <li>Your child becomes a professional in Dance, Drama and Music</li>
                                    <li>
                                        Joining the LTI Creative Club accords your child the privilege of being a top-notch coding expert.
                                    </li>
                                    <li>
                                        Not forgetting that this Creative Club aids in boosting your child’s self-esteem,
                                        confidence and improve their social and networking skills
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <img src={Training} alt="_1" />
                                <div>
                                    <p>
                                        In 1969, at the height of the civil rights movement, Arthur Mitchell and Karel Shook
                                        founded Dance Theatre of Harlem. Their vision remains one of the most democratic in dance.
                                    </p>
                                    <h4>Support LTI Scholarship</h4>
                                    <p>
                                        LTI Creative Club is a platform to discover and nurture creative talents within
                                        Alimosho and beyond. Donate towards the LTI scholarship today. Give an opportunity
                                        for young talented individuals in Alimosho to harness their artistic talents/gifts
                                        by sponsoring two (2) children for three (3) different activities with #312,000
                                        annually, four (4) children with #624,000 annually, six (6) children with #936,000
                                        and so on.
                                    </p>
                                    <button>Donate</button>
                                    <h4>Summer Intensive Program/Summer School Graduation</h4>
                                    <p>
                                        The Lagos Theatre Igando holds summer intensive program every August. It is a
                                        fun and learning program for children between the ages of 4 and 16. Curricula
                                        include music, dance, drama, comedy, visual arts, and coding/robotics. A
                                        graduation ceremony holds after the program and parents of participants at
                                        the summer program gets to see their children on stage.
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