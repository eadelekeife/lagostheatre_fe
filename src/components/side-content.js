import React from "react";

const SideContent = () => {
    return (
        <div className="side_display first_display">
            <h3>The Lagos Theatre, Igando </h3>
            <p>For all general inquiries, please call one of these numbers <a href="tel:+2349161205677">+2349161205677</a> ,
                <a
                    href="tel:+2348161585990">+2348161585990</a>, <a href="tel:+2348169511139">+2348169511139</a> or
                send us an email at <a href="mailTo:lagostheatreigando@gmail.com">lagostheatreigando@gmail.com</a>.</p>

            <p>For all press inquiries, please contact our representatives on help@lagostheatreigando.com</p>

            <p>For questions about LTI School and TAFTA program, please contact school-info@lagostheatreigando.org.</p>
            <div className="social">
                <a target="_blank" href="https://www.instagram.com/lagostheatreigando/">
                    <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram"></ion-icon>
                </a>
                <a target="_blank" href="http://lagostheatreigando"><ion-icon name="logo-facebook" role="img"
                    className="md hydrated" aria-label="logo facebook"></ion-icon>
                </a>
                <a target="_blank"
                    href="https://youtube.com/channel/UCTOiDaf0qLeq9wlqVDeCimg"><ion-icon name="logo-youtube" role="img"
                        className="md hydrated" aria-label="logo youtube"></ion-icon>
                </a>
            </div>
        </div>
    )
}

export default SideContent;