import React from 'react'
import BannerLp from '../components/GoldLp/BannerLp'
import GoldOpportunitySection from '../components/GoldLp/Opportunities'
import WhyChooseGTC from '../components/GoldLp/WhyGtc'
import GoldFeatureStrip from '../components/GoldLp/goldBanner'
import GoldContentHighlights from '../components/GoldLp/Higlights'
import TradeGoldFeatures from '../components/GoldLp/TradeGoldFeature'
import FeatureBar from '../components/GoldLp/FeatureBar'

const GoldLandingPage = () => {
  return (
    <>
      <BannerLp />
      <FeatureBar />
      <GoldOpportunitySection />
      <WhyChooseGTC />
      <GoldFeatureStrip />
     
    </>
  )
}

export default GoldLandingPage