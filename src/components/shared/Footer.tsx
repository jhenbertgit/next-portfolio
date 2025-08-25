import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src="/portfolio-logo.svg" alt="Logo" width={32} height={32} />
        </span>
        <p className="text-slate-600">Copyright (c) 2024 Jhenbert</p>
      </div>
    </footer>
  );
};

export default Footer;
