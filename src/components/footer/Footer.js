import React from "react";
import module from "./Footer.module.css";

const Footer = props =>(
    <footer className={module.footer}>© 2020 Copyright: {'    '}
    <a href="mailto: yw73@rice.edu">Rice VIP Flood Sensor Research Team</a></footer>
    // <div className={module.footer}>qweqwe</div>
)

export default Footer;