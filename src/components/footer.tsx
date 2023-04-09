import { Icon } from '@iconify/react';

export function Footer() {
  return (
    <footer className="w-full text-white bg-black">
      <div className='flex flex-row w-[40%] py-3 mr-auto ml-auto justify-center items-center gap-4'>
      <div><Icon icon="ic:baseline-facebook" width="35" height="35" /></div>
      <div><Icon icon="mdi:facebook-messenger"  width="35" height="35" /></div>
      <div><Icon icon="mdi:instagram" width="35" height="35" /></div>
      <div><Icon icon="iconoir:tiktok" width="35" height="35" /></div>
      <div><Icon icon="material-symbols:phone-enabled-sharp" width="25" height="25" /></div>
      </div>
      <div className='pt-3 pb-1 text-center'>
        All Rights Reserved. © 2023 <br />
         Developed By NikkoDev
      </div>
    </footer>
  );
}