import { createTranslator } from "next-intl";
import "aos/dist/aos.css";
import DemoAccountPage from './free-demo-account/page'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/en.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/en`
      : `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return {
    title: t("home.metaData.title"),
    description: t("home.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}

export default function Home() {

  return (
    <>
      <DemoAccountPage />
    </>
  );
}