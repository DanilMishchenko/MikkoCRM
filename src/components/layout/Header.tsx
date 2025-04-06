'use client';

import React from 'react';
import Image from 'next/image';

import Brand from '@/public/brand.svg';
import Logo from '@/public/logo.svg';

interface HeaderProps {
  setSidebar: () => void;
}

export const Header = ({ setSidebar }: HeaderProps) => {
  return (
    <header className="h-14 bg-primary max-sm:px-3 sm:px-6 flex justify-between items-center shrink-0">
      <div className="flex gap-6 max-sm:gap-3">
        <Image src={Logo} alt="Mikko CRM" width={40} className="max-sm:w-9" />
        <Image
          src={Brand}
          alt="Mikko CRM"
          width={140}
          className="max-sm:w-30"
        />
      </div>
      <button
        className="sm:hidden bg-gray-dark  text-white px-4 py-2 rounded-md"
        onClick={() => setSidebar()}
      >
        Меню
      </button>
    </header>
  );
};
