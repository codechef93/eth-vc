import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import IconsMap from "../icons/iconsMap"

const HeaderSection = () => {
    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navigation w-nav">
            <div className="navigation-container">
                <a href="#" className="logo-link w-inline-block">
                    <StaticImage src="../assets/svg-icons/logo.svg" loading="lazy" width="180" alt="" className="logo" />
                </a>
                <div className="navigation-wrapper">
                    <nav role="navigation" className="navigation-menu w-nav-menu">
                        <a href="#" className="navigation-link w-nav-link">Categories</a>
                        <a href="#" className="navigation-link w-nav-link">Services</a>
                        <a href="#" className="navigation-link w-nav-link">Pricing</a>
                        <a href="#" className="navigation-link w-nav-link">Contact Us</a>
                    </nav>
                    <div className="menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                        <div className="w-icon-nav-menu"></div>
                    </div>
                    <div className="wg-element">
                        <div className="wg-element-wrapper sw12">
                            <a data-w-id="99d82336-5868-6718-2104-915d49db5096" href="#" className="wg-button-1 w-inline-block">
                                <div style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" className="wg-button-1-lang-wrapper">
                                    <div lang="de" className="wg-button-1-text-lang2 back-link">
                                        <div className="wg-flag v2">
                                            <img src="https://assets-global.website-files.com/657e0e28e263ba3262511c76/657e0e29e263ba3262511d07_de.svg" alt="" className="wg-flag-ico" />
                                        </div>
                                        <div>De</div>
                                    </div>
                                    <div lang="en" className="wg-button-1-text-lang1 front-link">
                                        <div className="wg-flag v2">
                                            <img src="https://assets-global.website-files.com/657e0e28e263ba3262511c76/657e0e29e263ba3262511d03_gb.svg" alt="" className="wg-flag-ico" />
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
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
        </div>
    )
}

export default HeaderSection;