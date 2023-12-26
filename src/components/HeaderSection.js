import * as React from "react"

import logoSvg from "../assets/svg-icons/logo.svg"
import enSvg from "../assets/svg-icons/lang_en.svg"
import deSvg from "../assets/svg-icons/lang_de.svg"

const HeaderSection = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navigation w-nav">
            <div className="navigation-container">
                <a href="#" className="logo-link w-inline-block">
                    <img src={logoSvg} loading="lazy" width="180" alt="" className="logo" />
                </a>
                <div className="navigation-wrapper">
                    <nav role="navigation" className="navigation-menu w-nav-menu">
                        <a href="#" className="navigation-link w-nav-link">Categories</a>
                        <a href="#" className="navigation-link w-nav-link">Services</a>
                        <a href="#" className="navigation-link w-nav-link">Pricing</a>
                        <a href="#" className="navigation-link w-nav-link">Contact Us</a>
                    </nav>
                    <div className="menu-button w-nav-button my-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className="w-icon-nav-menu"></div>
                    </div>
                    <div className="wg-element">
                        <div className="wg-element-wrapper sw12">
                            <a data-w-id="99d82336-5868-6718-2104-915d49db5096" href="#" className="wg-button-1 w-inline-block">
                                <div className="wg-button-1-lang-wrapper my-wg-button">
                                    <div lang="de" className="wg-button-1-text-lang2 back-link">
                                        <div className="wg-flag v2">
                                            <img src={deSvg} alt="" className="wg-flag-ico" />
                                        </div>
                                        <div>De</div>
                                    </div>
                                    <div lang="en" className="wg-button-1-text-lang1 front-link">
                                        <div className="wg-flag v2">
                                            <img src={enSvg} alt="" className="wg-flag-ico" />
                                        </div>
                                        <div>En</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="#" className="navigation-button w-inline-block">
                        <div>Get Started</div>
                    </a>
                </div>
            </div>
            <div className="w-nav-overlay" style={isMenuOpen ? { display: "block", height: 12000 } : {}}>
                <nav role="navigation" class="navigation-menu w-nav-menu my-animation my-wg-button" style={isMenuOpen ? { top: 0 } : { top: 12000 }}>
                    <a href="#" class="navigation-link w-nav-link w--nav-link-open">Categories</a>
                    <a href="#" class="navigation-link w-nav-link w--nav-link-open">Services</a>
                    <a href="#" class="navigation-link w-nav-link w--nav-link-open">Pricing</a>
                    <a href="#" class="navigation-link w-nav-link w--nav-link-open">Contact Us</a>
                </nav>
            </div>
        </div >
    )
}

export default HeaderSection;