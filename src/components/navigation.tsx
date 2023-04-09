import { Burger, Drawer, Popover } from "@mantine/core";
import Link from "next/link"
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@mantine/hooks";

export function Navigation() {
    const router = useRouter();
    const { t } = useTranslation("common");
    const [localeChanged, setLocaleChanged] = useState(false);
    const [opened, { toggle }] = useDisclosure(false);

    const handleToggle = useCallback(() => {
      toggle();
    }, [opened, toggle]);

    
    useEffect(() => {
        if (localeChanged) {    
          setLocaleChanged(false);
        }
      }, [localeChanged, t]);
    
      const changeLanguage = async (language: any) => {
        try {
          await router.push(router.pathname, router.asPath, { locale: language });
          setLocaleChanged(true);
        } catch (error) {
          console.error('Error changing language:', error);
        }
      };
      
    
  
    return (
        <div className="fixed bg-[#0F0F0F] mg:h-[80px] h-[60px] text-white w-full z-50">
            <div className="flex justify-between md:hidden">
            <Burger
            className="ml-5 mt-[12px] md:ml-0 md:mt-0 md:hidden"
            onClick={handleToggle}
            color="white"
            size={22}
            opened={opened}
            />
           <div
            className="pr-10 mt-[12px] md:pr-0 md:mt-0 md:hidden"
            >
                  <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <div>{t('languagee')}</div>
      </Popover.Target>
      <Popover.Dropdown className="p-0 border-none">
        <div className="flex flex-col py-4 text-white bg-black gap-y-3">
        <button onClick={() => changeLanguage("ge")}>GE</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        </div>
      </Popover.Dropdown>
    </Popover>

          </div>
            </div>
             <Drawer
          opened={opened}
          onClose={() => toggle()}
          size="100%"
          withCloseButton={false}
          padding={0}
          lockScroll={false}
          >
          <div className="w-full h-auto text-white">
            <div className="flex flex-col items-center w-full h-auto pt-5 gap-y-4">
              <Link href="/" className="hover:bg-[#26678c] px-12 py-1.5 rounded-md">
                {t("home")}
              </Link>
              <Link href="https://www.facebook.com/valhallaclub11/photos" target="blank" className="hover:bg-[#26678c] px-12 py-1.5 rounded-md">
                {t("gallery")}
              </Link>
              <Link href="https://www.facebook.com/valhallaclub11/events" className="hover:bg-[#26678c] px-12 py-1.5 rounded-md">
                {t("events")}
              </Link>

              <Link href="/about" className="hover:bg-[#26678c] px-12 py-1.5 rounded-md">
                {t("about")}
              </Link>
              <Link href="/contact" className="hover:bg-[#26678c] px-12 py-1.5 rounded-md">
                {t("contact")}  
              </Link>

            </div>
          </div>
        </Drawer>

            <div className="hidden w-full h-full ml-auto mr-auto text-center md:flex lg:w-5/12">
                <div className="flex items-center justify-between w-full h-full">
                    
                <Link href="/" >
                {t('home')}
                </Link>
                <Link href='gallery'>
                    {t('gallery')}
                </Link >
                <div>
                    {t('events')}
                </div>
                <Link href="/contact">
                    {t('contact')}
                </Link>
                <Link href="/about" >                    
                    {t('about')}
                </Link>
                </div>
            </div>
        </div>
    )
}