import * as React from "react"

import HeaderSection from "../components/HeaderSection"
import HeroSection from "../components/HeroSection"
import ProcessSection from "../components/ProcessSection"
import RegularSection from "../components/RegularSection"
import CategoriesSection from "../components/CategoriesSection"
import CTASection from "../components/CTASection"
import TabSection from "../components/TabSection"
import RegularSection2 from "../components/RegularSection2"
import FAQSection from "../components/FAQSection"
import CTASection2 from "../components/CTASection2"
import FooterSection from "../components/FooterSection"

import "../assets/css/index.css"
import "../assets/css/custom.css"

const IndexPage = () => {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <ProcessSection />
      <RegularSection />
      <CategoriesSection />
      <CTASection />
      <TabSection />
      <RegularSection2 />
      <FAQSection />
      <CTASection2 />
      <FooterSection />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>ETH VC</title>
