import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("common");

    return (
        <div className="min-h-[90vh] h-auto pt-2 bg-black">
          <div className="px-8 pt-20 md:w-[60%] text-center text-white">

        <span className="text-xs" >
          {t('text-1')}
</span> <span className="text-xs" >

როგორი Face-Control-ი გაქვთ? შესვლა დასაშვებია 21 წლიდან . 🚫

როგორ შევუკვეთო მაგიდა? მაგიდის შესაკვეთათ გთხოვთ გადახვიდეთ კონტაქტის გვერდზე. 🍾

არის თუ არა გადაღება დასაშვები კლუბში? დასაშვებია თუ გადაღების პროცესში არ იყენებთ მაღალ შუქს. 📸

მე დამრჩა თქვენთან ნივთი, როგორ შემიძლია დავიბრუნო? თუ გაქვთ იმის ეჭვი, რომ ჩვენს კლუბში დაგრჩათ პირადი ნივთი, გთხოვთ შეგვეხმიანოთ შემდეგ ნომერზე საღამოს 8-დან დილის 5მდე . ☎️ 

</span>
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
      