import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
    return (
        <div>
        <h1>About</h1>
        </div>
    );
    }



    export async function getStaticProps({ locale }: { locale: any }) {
        return {
          props: {
            ...(await serverSideTranslations(locale, ["common", "footer"])),
          },
        };
      }
      