import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#002D40]  px-20 py-10 text-white">
                <div className="footer-top  flex justify-between ">
                    <div>
                        <h1 className="text-3xl font-medium">Earls</h1>
                    </div>
                    <div className="footer-social flex gap-5 items-center">
                        <span>Keep updated</span>
                        <div className="social-icon flex gap-5">
                            <a href="#">
                                <FaInstagram></FaInstagram>
                            </a>
                            <a href="#">
                                <FaFacebook></FaFacebook>
                            </a>
                            <a href="#">
                                <FaYoutube></FaYoutube>
                            </a>
                            <a href="#">
                                <FaLinkedin></FaLinkedin>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="w-full text-white mt-10 mb-5" />
                <div className="footer-link  flex justify-between">
                    <div className="links-left">
                        <ul className="flex gap-20 ">
                            <li>Blogs</li>
                            <li>About</li>
                            <li>Carrers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="links-right">
                        <ul className="flex gap-10">
                            <li>Facebook</li>
                            <li>Contact</li>
                            <li>Suppliers</li>
                        </ul>
                    </div>

                </div>
                <hr className="w-full text-white mt-5" />
                <div className="tems mt-10 flex justify-center">
                    <ul className="flex gap-10 text-sm text-[#6c8798]">
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Accessbility</li>
                        <li>Copyright Earls Restaurants Ltd</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer;