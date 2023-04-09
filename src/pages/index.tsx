import { serverSideTranslations } from "next-i18next/serverSideTranslations"; 
import { useTranslation } from "react-i18next";


export default function Home() {
const { t } = useTranslation("common");



  
  return (
    <main  className="h-auto min-h-screen bg-black pt-[80px]">
      <div className='text-[#e7d0ba]'>
        <p className="md:w-[60%] text-center mr-auto ml-auto py-20 text-[14px]">
          <div className="flex flex-row items-center justify-center pb-10 text-white">
          <h1 className="text-4xl font-bold">
            Valhalla 
            </h1>
            <h2 className="pl-4 mt-2 text-sm md:text-xl">
               ღამისკლუბი
              </h2>
          </div>
       {t('hometext')}
        </p>

      </div>
    </main>
  )
}

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
