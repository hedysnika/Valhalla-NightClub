import { Carousel } from "@mantine/carousel";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; 
import Image from "next/image";
import { useTranslation } from "react-i18next";


export default function Home() {
const { t } = useTranslation("common");



  
  return (
    <main  className="h-auto min-h-screen bg-black">
      <div className="pt-[65px] md:pt-[80px]">
      <Carousel withIndicators height={350} slideSize="80%" slideGap="md">
      <Carousel.Slide><img  alt="nightclub tbilisi"  src="https://i.imgur.com/wpYjTDT.png"/></Carousel.Slide>
      <Carousel.Slide><img  alt="nightclub tbilisi"  src="https://i.imgur.com/jsBPE8i.png"/></Carousel.Slide>
      <Carousel.Slide><img  alt="nightclub tbilisi"  src="https://i.imgur.com/IM0tx8D.png"/></Carousel.Slide>
      <Carousel.Slide><img  alt="nightclub tbilisi"  src="https://i.imgur.com/RLBTuxk.png"/></Carousel.Slide>
    </Carousel>

      </div>
      <div className='text-[#e7d0ba]'>
        <p className="md:w-[60%] text-center mr-auto ml-auto pb-20 pt-5 w-[85%] leading-6 text-xs">
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
