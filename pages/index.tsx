import React from "react"; 
import Head from 'next/head';

export default function Home() {
  return (
    <div className="pt-[clamp(120px,14vh,168px)] text-center">
      <main className="mx-auto max-w-[1440px]">
        <div>
          <h1 className="text-[40px] lg:text-[86px] leading-[1.1] tracking-tight">
            Welcome.
            <br></br>
            Let's explore
            <span className="font-serif italic transition-colors hover:bg-indigo-600"> components.</span>
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
            Try the counter or the form.
          </p>
        </div>
      </main>
    </div>
  );
}
