import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("common");
  
    return (
        <div className="h-auto min-h-screen text-center text-white bg-black md:pt-[80] pt-[50px] ">
          <div className="text-xl py-14">
            {t('contactus')}
            </div>          
            <div>
              მაგიდის დასაჯავშნად დარეკეთ შემდეგ ნომერზე: 599 99 99 99 <br />
              ან დააჭირეთ ამ ღილაკს <br />
              ინფორმაციისთვის გადადით ჩვენს შესახებ გვერდზე ან დააჭირეთ ამ ღილაკს
            </div>

          
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
      