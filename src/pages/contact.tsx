import { Layout } from "@/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("common");
  
    return (
      <Layout>
        <div className="h-auto min-h-[90vh] text-center text-white bg-black md:pt-[80] pt-[60px] ">
          <div className="text-xl py-14">
            {t('contactus')   }
            </div>          
            <div className="px-20 text-xs md:w-[40%]">
              მაგიდის დასაჯავშნად დარეკეთ შემდეგ ნომერზე: <a href="tel:+995595208668" className="text-[#a2aaff]">595208668</a>  <br />
              ინფორმაციისთვის გადადით ჩვენს  
              <Link href="/about" className=" px-1 text-[#a2aaff]" >
               შესახებ გვერდზე
              </Link>
            </div>

          
        </div>
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
      