import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
    return (
        <div>
        <h1>WHERE IS VALHALLA CLUB? VALHALLA CLUB is located AT SHARDENI TBILISI at Rkinis rigi N 11, 0144. 🌃

IS THERE A DRESS CODE? Come as you are, as long as you’re not wearing sandals. 👡

WHAT ARE THE AGE RESTRICTIONS? შესვლა დასაშვებია 21 წლიდან . 🚫

როგორ შევუკვეთო მაგიდა? მაგიდის შესაკვეთათ გთხოვთ გადახვიდეთ კონტაქტის გვერდზე. 🍾

არის თუ არა გადაღება დასაშვები კლუბში? დასაშვებია თუ გადაღების პროცესში არ იყენებთ მაღალ შუქს. 📸

მე დამრჩა თქვენთან ნივთი, როგორ შემიძლია დავიბრუნო? თუ გაქვთ იმის ეჭვი, რომ ჩვენს კლუბში დაგრჩათ პირადი ნივთი, გთხოვთ შეგვეხმიანოთ შემდეგ ნომერზე საღამოს 8-დან დილის 5მდე . ☎️ 

WHAT CAN’T I BRING TO CLUB SPACE? Club Space does not permit any hula hoops, glow sticks, or any object that can be used as a projectile. We also do not allow any weapons such as firearms, knives, or pepper spray into the venue. This is in the best interest of all of our Space Invaders. 👽

</h1>
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
      