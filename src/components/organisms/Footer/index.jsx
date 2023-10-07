import NavbarItem from "@/components/atoms/NavbarItem";
import Facebook from "@/icons/facebook.svg";
import Instagram from "@/icons/instagram.svg";
import Arrow from "@/icons/arrow.svg";
import Mail from "@/icons/mail.svg";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="sticky top-full bg-[#f5f5f5] divide-y-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="px-12 divide-x-2 hidden xl:flex">
        <div className="py-12 w-[25%] px-8">
          <h4 className="mb-4 text-sm font-medium">About</h4>
          <div>
            <NavbarItem downCarrot={false} color="gray">
              Our Story
            </NavbarItem>
            <NavbarItem downCarrot={false} color="gray">
              Contact us
            </NavbarItem>
            <NavbarItem downCarrot={false} color="gray">
              Careers
            </NavbarItem>
            <NavbarItem downCarrot={false} color="gray">
              Privacy policy
            </NavbarItem>
          </div>
        </div>

        <div className="py-12 w-[25%] px-8 text-sm font-medium">
          <h4 className="mb-4">Support</h4>
          <div>
            <NavbarItem downCarrot={false} color="gray">
              Payments
            </NavbarItem>
            <NavbarItem downCarrot={false} color="gray">
              Returns/Exchange
            </NavbarItem>
            <NavbarItem downCarrot={false} color="gray">
              Shipment
            </NavbarItem>
            <NavbarItem downCarrot={false} color="gray">
              Terms & conditions
            </NavbarItem>
          </div>
        </div>

        <div className="py-12 w-[25%] px-8 text-sm font-medium">
          <h4 className="mb-4">Customer care</h4>
          <div>
            <p className="text-xs text-gray-600 font-medium leading-5">
              Timings: 10 AM - 6 PM (Mon - Sat)
            </p>
            <p className="text-xs text-gray-600 font-medium leading-5">
              Call: +91 7011263423
            </p>
            <p className="text-xs text-gray-600 font-medium leading-5">
              E-Mail: care@koovs.com
            </p>
            <p className="text-xs text-gray-600 font-medium leading-5 cursor-pointer hover:text-black">
              Submit a return request
            </p>
          </div>
        </div>

        <div className="py-12 w-[25%] px-8 text-sm font-medium">
          <h4 className="mb-4">Subscribe</h4>
          <div>
            <p className="text-xs text-gray-600 font-medium leading-5">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <div className="w-[100%] h-10 bg-white rounded-md mt-4 flex items-center px-4">
                <label htmlFor="emailInput" className="w-[10%] text-lg text-gray-500"><Mail/></label>
                <input type="mail" placeholder="Enter your email" className="focus:outline-none w-[85%] placeholder:text-xs px-2" id="emailInput"/>
                <button type="button" className="w-[10%] text-lg text-gray-500"><Arrow/></button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 py-4 flex divide-gray-200 items-center flex-col gap-y-4 sm:flex-row gap-0">
        <div className="flex gap-2 shrink-0 grow-0 basis-[calc(100%/3)]">
          <Link href={"#"}>
            <Facebook className="text-gray-500 hover:text-black" />
          </Link>
          <Link href={"#"}>
            <Instagram className="text-gray-500 hover:text-black" />
          </Link>
        </div>

        <div className="text-xs shrink-0 grow-0 basis-[calc(100%/3)] text-center">
          © Koovs.com
        </div>

        <div className="shrink-0 grow-0 basis-[calc(100%/3)] flex justify-end">
          <Image src={'/footer.avif'} alt="footer image" width={250} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
