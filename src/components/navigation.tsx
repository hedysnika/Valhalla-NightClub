import Link from "next/link"
import { useTranslation } from "react-i18next";

export function Navigation() {
    const { t } = useTranslation("common");


    return (
        <div className="fixed bg-[#0F0F0F] h-[80px] text-white w-full">
            <div className="w-full h-full ml-auto mr-auto text-center lg:w-5/12">
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