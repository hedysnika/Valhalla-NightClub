import { Icon } from '@iconify/react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full text-white bg-black">
      <div className='flex flex-row w-[40%] py-3 mr-auto ml-auto justify-center items-center gap-4'>
      <Link href="https://www.facebook.com/valhallaclub11"><Icon icon="ic:baseline-facebook" width="25" height="25" /></Link >
      <Link href="https://www.facebook.com/valhallaclub11"><Icon icon="mdi:facebook-messenger"  width="25" height="25" /></Link >
      <Link href="https://www.instagram.com/valhallaclub11/"><Icon icon="mdi:instagram" width="25" height="25" /></Link>
      <Link href="https://www.tiktok.com/@valhalla_club11"><Icon icon="iconoir:tiktok" width="25" height="25" /></Link >
      <a href="tel:+995595208668"><Icon icon="material-symbols:phone-enabled-sharp" width="25" height="25" /></a>
      </div>
      <div className='pt-3 pb-1 text-xs text-center'>
        All Rights Reserved. © 2023 <br />
         Developed By NikkoDev
      </div>
    </footer>
  );
}