import { Burger, Drawer } from "@mantine/core";
import { notifications } from "@mantine/notifications";
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

    useEffect(() => {
        if (localeChanged) {
          notifications.show({
            title: "aegaeg",
            message: "aegaeg",
            autoClose: 3000,
            styles: (theme) => ({
              root: {
                backgroundColor: '#25262B',
                borderColor: '#25262B',
                '&::before': { backgroundColor: '#9C36B5' },
              },
              title: { color: theme.white },
              description: { color: 'rgb(144, 146, 150)' },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: '#9C36B5' },
              },
            }),
          });
    
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
      const handleToggle = useCallback(() => {
        toggle();
      }, [opened, toggle]);
    
  
    return (
        <div className="fixed bg-[#0F0F0F] mg:h-[80px] h-[60px] text-white w-full">
                                <Burger
            className="ml-5 mt-[10px] md:ml-0 md:mt-0 md:hidden"
            onClick={handleToggle}
            color="white"
            size={22}
            opened={opened}
          />
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
              <Link href="/upcomingevents" className="hover:bg-[#26678c] px-12 py-1.5 rounded-md">
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