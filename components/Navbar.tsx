import Link from 'next/link';
import React, { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/button-count', label: 'Counter' },
  { href: '/form-submit', label: 'Form' },
];

// Links to other pages
export default function Navbar() {

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto grid max-w-[1380px] grid-cols-[auto_1fr] items-center gap-5 px-6 py-4 min-[981px]:grid-cols-[1fr_auto_1fr] md:px-8">
       <span className="font-semibold">Testing Components</span>
        <nav className="items-center gap-7 min-[981px]:flex">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className='font-semibold text-indigo-600'>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}