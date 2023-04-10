import { Layout } from "@/components/layout";
import { Carousel } from "@mantine/carousel";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default function Home() {
  const { t } = useTranslation("common");
  const windowWidth = useWindowWidth();

  return (
    <Layout>
      <main className="h-auto min-h-screen bg-black">
        <div className="pt-[65px] md:pt-[80px]">
          <Carousel
            withIndicators
            slideGap="md"
            height={windowWidth >= 768 ? 480 : 350}
            slideSize={windowWidth >= 768 ? "40%" : "80%"}
            align={windowWidth >= 768 ? "start" : "center"}
          >
            <Carousel.Slide>
              <img alt="nightclub tbilisi" src="https://i.imgur.com/jsBPE8i.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img alt="nightclub tbilisi" src="https://i.imgur.com/wpYjTDT.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img alt="nightclub tbilisi" src="https://i.imgur.com/IM0tx8D.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img alt="nightclub tbilisi" src="https://i.imgur.com/RLBTuxk.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img alt="nightclub tbilisi" src="https://i.imgur.com/EifsRkv.png" />
            </Carousel.Slide>
          </Carousel>
        </div>
        <div className="text-[#e7d0ba]">
          <p className="md:w-[60%] text-center mr-auto ml-auto pb-20 pt-5 w-[85%] leading-6 text-xs">
            <div className="flex flex-row items-center justify-center pb-10 text-white">
              <h1 className="text-4xl font-bold">Valhalla</h1>
              <h2 className="pl-4 mt-2 text-sm md:text-xl">ღამისკლუბი</h2>
            </div>
            {t("hometext")}
          </p>
        </div>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDqTLL7WOfkfwa700iTGlhAxTiNVLxjZoA&q=Rkinis+Rigi+N11,+Tbilisi,+Georgia&zoom=15"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>

        <div className="pb-5 text-xs text-center text-[#c9c9c9] font-light">
          Rkinis Rigi N11, Tbilisi, Georgia <br />
          +995 595 20 86 68
          <br />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
