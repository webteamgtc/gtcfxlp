import React from 'react';
import { createTranslator } from "next-intl";
import ThankYouPage from '../../pages/ThankYou';
import Image from 'next/image';
import GoldTrustSection from '../../components/GoldLp/GoldTrustSection';
import GoldMarketEdge from '../../components/GoldLp/GoldMarketEdge';
import TradeTrust from '../../components/GoldLp/TradeTrust';

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../../messages/en.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
    locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/en/thank-you`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`;

    return {
        title: t("thankYouLiveAccount.metaData.title"),
        description: t("thankYouLiveAccount.metaData.des"),
        alternates: {
            canonical: url,
          },
    };
}
const page = () => {
  
    return (
        <>
        <div className='container pt-12 md:pt-28'>
            <div className='flex flex-col items-stast'>
                    <Image
                                  src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
                                  width={200}
                                  height={72}
                                  alt="GTCFX"
                                  className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
                                />
            </div>
            <ThankYouPage/>
          
            
            
        </div>
          <TradeTrust />
            <GoldMarketEdge/>
        </>
    )
}

export default page;