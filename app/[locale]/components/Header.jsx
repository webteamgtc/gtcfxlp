"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import Language from "./Language";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next-intl/client";
import { useParams, usePathname } from "next/navigation";
import { LiaBoxesSolid } from "react-icons/lia";
import { RiStockLine, RiGlobalLine } from "react-icons/ri";
import { IoMdLaptop } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWbSunny, MdOutlineManageAccounts } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FiBriefcase, FiGitPullRequest } from "react-icons/fi";
import { BiAnalyse } from "react-icons/bi";
import { MdOutlineLogin } from "react-icons/md";
import { useDetectClickOutside } from "react-detect-click-outside";
import LocationContextProvider from "@/context/location-context";
import LanguageMobile from "./LanguageMobile";
import { TbSpeakerphone } from "react-icons/tb";
import TopBar from "./Topbar";

const NavItem = ({
  title,
  links,
  href,
  locale,
  description,
  id,
  show,
  setShow,
}) => {
  const [arrow, setArrow] = useState("down");
  const router = useRouter();
  const urlLocale = useLocale();
  const pathname = usePathname();
  const isAr = pathname.includes("/ar-AE");
  const pathnameWithoutLocale = pathname.replace(`/${urlLocale}`, "");
  const innerActive = links?.some((single) => {
    return single?.items?.some((x) => x?.href === pathnameWithoutLocale);
  });
  const activeClass =
    pathnameWithoutLocale == href || innerActive
      ? "text-secondary"
      : "text-primary";
      

  return (
    <li className={`${activeClass} clickable hover:text-secondary `}>
      <div
        className="flex justify-center items-center"
        // onMouseEnter={() => {
        //   setShowMenu("!block");
        //   setArrow("up");
        // }}
        // onMouseLeave={() => {
        //   setShowMenu("hidden");
        //   setArrow("down");
        // }}
        onClick={() => {
          setShow(show == id ? "" : id);
          setArrow("up");
          // router.push(href, { locale: locale });
        }}
      >
        <button
          className={`block cursor-pointer py-6  ${
            isAr ? "pr-2 lg:pr-5 pl-2 lg:pl-5" : "pl-2 lg:pl-4 lg:pr-4"
          }  lg:py-5 text-[sm] lg:text-[16px] 3xl:text-xl`}
        >
          {title}
        </button>
      </div>
      {show == id && (
        <div
          className={`mega-menu mb-16 sm:mb-0 shadow-xl border-t border-gray-200 h-[380px] z-50 bg-white rounded-b-none !block mt-2`}
        >
          <div className="container w-full flex flex-wrap py-5">
            <div className=" basis-3/12 flex justify-end">
              <div
                className={`content-sidebar text-primary border-gray-100 mt-8 lg:text-[11.5px] 2xl:text-[15px] ltr:text-left ltr:pr-8 rtl:text-right rtl:pl-8`}
              >
                <p className="mb-4 leading-5 ">{description}</p>
              </div>
            </div>

            {links.map((linkGroup, index) => (
              <div className=" basis-3/12 flex justify-between">
                <ul key={index} className={`px-4 w-full  pb-6 pt-6 lg:pt-3`}>
                  <h3
                    className={`flex gap-2 items-center underline text-[15px] 2xl:text-[19px] 3xl:text-xl text-secondary mb-2 ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  >
                    <p className="text-primary text-2xl">{linkGroup.icon}</p>
                    {linkGroup.title}
                  </h3>
                  {linkGroup.items?.map((item, itemIndex) => {
                    const activeClassList =
                      pathnameWithoutLocale == item.href
                        ? "text-secondary"
                        : "text-primary";
                    if (!item?.locale?.includes(locale)) {
                      return null;
                    }
                    return (
                      <li
                        key={itemIndex}
                        className="py-2 text-sm md:text-base 2xl:text-lg 3xl:text-xl border-b border-gray-200 border-opacity-40 last:border-0"
                      >
                        <button
                          className={`block ${activeClassList} hover:text-secondary`}
                          onClick={() => {
                            router.push(item.href, { locale: locale });
                            setShow("");
                          }}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

const Header = ({currentLanguage}) => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [show, setShow] = useState("");
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [href, setHref] = useState([
    {
      href: "/",
      locale: "en",
    },
  ]);
  const isAr = pathname.includes("/ar-AE");
 
  const extractHrefsAndLocales = (data) => {
    if (data?.length > 0 && pathnameWithoutLocale != "/") {
      const extractedData = [];
      data.forEach((item) => {
        const { href, locale, links } = item;

        if (href && locale) {
          extractedData.push({ href, locale });
        } else if (href) {
          extractedData.push({ href, locale: null });
        }

        links.forEach((link) => {
          link.items.forEach((subItem) => {
            const { href, locale } = subItem;
            if (href && locale) {
              extractedData.push({ href, locale });
            } else if (href) {
              extractedData.push({ href, locale: null });
            }
          });
        });
      });
      setHref(extractedData?.filter((x) => x?.href == pathnameWithoutLocale));
      return extractedData;
    }
  };

  useEffect(() => {
    if (pathname == "/") {
      setHref([
        {
          href: "/",
          locale: "en,ar-AE,zh-hans,it-IT,tr-TR,fr-FR,es-ES,hi-IN,vi-VN,id-ID,fa-IR",
        },
      ]);
      return;
    }
    if (params?.slug) {
      setHref([
        {
          href: `${params?.slug?.[0]}/${params?.slug?.[1]}/${params?.slug?.[2]}`,
          locale: "en,ar-AE",
        },
      ]);
      return;
    }
    if (navigationData) {
      extractHrefsAndLocales(navigationData);
    }
  }, [pathname]);

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setShow("");
    },
  });

  return (
    <LocationContextProvider>
  

      <div className="header py-2 sticky top-0 z-[40] bg-white border-b border-gray-200">
        <nav className="container">
          <div className="flex justify-between items-center ">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
              width={200}
              height={72}
              alt="GTCFX"
              className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
              onClick={() => {
                router.push("/", { locale: locale });
              }}
            />
      
            
          </div>
        </nav>
      </div>
    </LocationContextProvider>
  );
};

export default Header;
