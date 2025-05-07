import React from 'react';
import { createTranslator } from "next-intl";
import GoldLandingPage from '../pages/GoldLandingPage';

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/en.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
    locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/en/trade-with-gold`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/trade-with-gold`;

    return {
        title: 'Trade Gold with Tight Spreads & Fast Execution | GTC',
        description: 'Join over 985,000 traders choosing GTC for reliable, low-spread gold trading. Sign up in minutes and start trading today!',
        alternates: {
            canonical: url,
          },
    };
}
const page = () => {
  
    return (
        <GoldLandingPage/>
    )
}

export default page;