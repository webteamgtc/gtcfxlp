"use client";
import { useTranslations } from "next-intl";
import Banner from "../components/account/LiveDemo/Banner";
import MainForm from "../free-demo-account/form";
import LocationContextProvider from "@/context/location-context";
import WhyChooseIcon from "../free-demo-account/whycChooseUs";


const DemoAccountPage = () => {
  const t = useTranslations("accounts");

  return (
    <>
      <LocationContextProvider>
        <Banner
          title={t("demoAccount.bannerText.heading")}
          subtitle={t("demoAccount.bannerText.description")}
          buttonText={t("demoAccount.bannerText.buttonText")}
          buttonLink="https://my.gtcfx.com/getview?view=register"
          imageUrl="/account/live-account-mobile.webp"
        />
    

      </LocationContextProvider>
    </>
  );
};

export default DemoAccountPage;