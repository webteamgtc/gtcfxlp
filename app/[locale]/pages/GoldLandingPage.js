import React from 'react'
import BannerLp from '../components/GoldLp/BannerLp'
import GoldOpportunitySection from '../components/GoldLp/Opportunities'
import WhyChooseGTC from '../components/GoldLp/WhyGtc'
import GoldFeatureStrip from '../components/GoldLp/goldBanner'
import GoldContentHighlights from '../components/GoldLp/Higlights'
import TradeGoldFeatures from '../components/GoldLp/TradeGoldFeature'
import FeatureBar from '../components/GoldLp/FeatureBar'
import TradeTrust from '../components/GoldLp/TradeTrust'
import GoldMarketEdge from '../components/GoldLp/GoldMarketEdge'

const GoldLandingPage = () => {
  return (
    <>
      <BannerLp />
      <FeatureBar />
      <GoldOpportunitySection />
      <WhyChooseGTC />
      <GoldFeatureStrip />
      <GoldContentHighlights />
      <TradeGoldFeatures />
      <TradeTrust />
      <GoldMarketEdge />
    </>
  )
}

export default GoldLandingPage