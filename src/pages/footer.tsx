import Link from "next/link";
import Image from "next/image";
import React from "react"; 

export default function Footer() { 
  return (
    <footer className="bg-[#2f1975] text-white px-4 py-12 text-sm font-sans"> 
      <div className="flex flex-col items-center mb-10"> 
        <Image src="/Images/footer-logo.png" alt="Logo" width={50} height={50} />
        <span className="text-white text-xs mt-1 mb-4">BAKERS INN</span> 
        <div className="w-full h-px bg-white/50"></div> 
      </div>
      <div className="border-b border-white/20 py-10 grid md:grid-cols-4 gap-10 md:gap-8 px-4 md:px-12"> 
        <div>
          <h4 className="font-bold mb-4 text-base">Instagram Feed</h4>
          <div className="flex gap-2">
            <Image src="/Images/footer1.png" alt="Insta" width={70} height={70} /> 
            <Image src="/Images/footer2.png" alt="Insta" width={70} height={70} />
            <Image src="/Images/footer3.png" alt="Insta" width={70} height={70} />
          </div>

          <div className="flex gap-4 mt-6"> 
            <a href="#" aria-label="Twitter">
              <Image src="/Images/twitter.png" alt="Twitter" width={24} height={24} className=" p-1" />
            </a>
            <a href="#" aria-label="Facebook">
              <Image src="/Images/facebook.png" alt="Facebook" width={24} height={24} className=" p-1" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image src="/Images/linkedin.png" alt="LinkedIn" width={24} height={24} className=" p-1" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-base">Our Location</h4>
          <p>1 Shepperton Road,<br />Graniteside,<br />Harare, Zimbabwe.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-base">Get In Touch With Us</h4>
          <p>
            08080151<br />
            08080152<br />
            +263 242 751 481<br />
            +263 242 710 334
          </p>
          <p className="mt-2 text-[#B2904C] ">marketing@bakersinnzim.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-base">Sitemap</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Recipes</li>
            <li>Kids Corner</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 flex-col md:flex-row gap-4 px-4 md:px-12"> 
        <p className="flex items-center gap-2">
          Subsidiary of <Image src="/Images/footer.png" alt="Innscor Logo" width={80} height={24} />
        </p>
        <p className="text-center md:text-left"> 
          © 2022 Bakers Inn. All rights reserved. Site by{" "}
          <span className="text-[#B2904C]  font-semibold">NoWalls Pan Africa</span>
        </p>
      </div>
    </footer>
  );
}

