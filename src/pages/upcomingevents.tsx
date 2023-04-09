import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function UpcomingEvents() {

   return (
        <div>
        aegea
        </div>
    )
}


export async function getStaticProps({ locale }: { locale: any }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "footer"])),
      },
    };
  }
  