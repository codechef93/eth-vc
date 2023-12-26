import * as React from "react"

const CTASection2 = () => {
    return (
        <section className="section-cta">
            <div className="cta-block">
                <div className="container-small">
                    <div className="title-wrapper-xs">
                        <div className="wrap-v-x-small-2 align-c">
                            <div className="overline-5">call to action</div>
                            <h2 className="heading-content--tw1">Ready to get started?</h2>
                        </div>
                        <p className="f-paragraph-large--tw1">Start Using Crypto for Payments, choose your payment category or retailer, submit your payment request and earn</p>
                    </div>
                    <div className="wrap-v-x-large align-c">
                        <div className="cta-form-block w-form">
                            <form className="form-h">
                                <input type="email" className="text-field-round w-input" maxLength="256" placeholder="Enter Your Email" required="" />
                                <input type="submit" value="Subscribe now" className="button-primary-l-3 w-button" />
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection2;