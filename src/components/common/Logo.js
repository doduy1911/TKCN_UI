"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo/logo.png";

const Logo = ({ className, ...props }) => {
   return (
      <div
         className={cn("flex-center gap-[5px] lg:gap-[30px]", className)}
         {...props}
      >
         {/* <Link prefetch={false} href="/" className="block flex-shrink-0">
            <Image
               src={logo}
               alt={`${siteConfig.name}`}
               width={0}
               height={0}
               sizes="100vw"
               className="lg:w-[120px] lg:h-[120px] md:h-[90px] md:w-[90px] h-[80px] w-[80px] rounded-full object-cover"
            />
         </Link> */}
         <div>
            <Link prefetch={false} href="/">
               <p className="lg:text-[14px] text-left text-[#153680] text-[12px] font-semibold uppercase lg:block">
                  {siteConfig.name}
               </p>
               <h3
                  className={`md:text-[24px] max-w-[100%] sm:max-w-[80%] md:max-w-[460px] text-left lg:mt-[5px] text-[17px] font-semibold uppercase text-[#153680] leading-[1.3] tracking-[-1.3px]`}
               >
                  {siteConfig.bio}
               </h3>
            </Link>
            <p className="text-[#ff0000] text-[10px] md:text-[16px] font-bold">Hotline: 069 928 816 | 069 928 815 | 02437 349 821 | 02437 333 664</p>
         </div>
      </div>
   );
};


export default Logo;
