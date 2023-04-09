import { serverSideTranslations } from "next-i18next/serverSideTranslations"; 
import { useTranslation } from "react-i18next";


export default function Home() {
const { t } = useTranslation("common");



  
  return (
    <main  className="h-auto min-h-screen bg-black pt-[80px]">
      <div className='text-white'>
        <p className="w-[60%] mr-auto ml-auto py-20">
          <div className="flex flex-row items-center justify-center pb-10">
          <h1 className="text-4xl font-bold">
            Valhalla 
            </h1>
            <h2 className="pl-4 mt-2 text-xl">
               ღამისკლუბი
              </h2>
          </div>
      გასული ექვსი თვის განმავლობაში, Valhalla ღამისკლუბ-მა ქარიშხალივით მოიცვა ჩვენი ქალაქი და სწრაფად დაიმკვიდრა თავი,  
      როგორც წვეულების ეპიცენტრათ, იმათთვის ვინც ეძებს დაუვიწყარ ღამეებს, სავსე სასიამვნო მუსიკით და უწყვეტი ცეკვით.  
      ჩვენმა კლუბმა, სწრაფად მოიპოვა რეპუტაცია შეუდარებელი გამოცდილების მიწოდებისა და ძლიერი ატმოსფეროს გამო, რომელსაც სხვაგან ვერ ნახავ. 
        
       Valhalla-ს კლუბი არ არის მხოლოდ განსატვირთი ადგილი; 
       ეს არის გამოცდილება, რომელიც დაგიტოვებთ მეტის სურვილს. 
       შემოგვიერთდით ღამეს, რომელიც არ დაგავიწყდებათ და გახდით ჩვენი მზარდი მოყვარულთა საზოგადოების ნაწილი, 
       რომლებმაც აღმოაჩინეს გართობის ნამდვილი არსი.
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
