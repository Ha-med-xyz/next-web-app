import React from 'react';
import Head from 'next/head';
import Counter from '@/components/Counter';

export default function CountPage() {
  return (
    <>
      <Head>
        <title>Counter</title>
      </Head>
      <div className="rounded-xl border border-zinc-200 p-8 shadow-sm dark:border-zinc-800">
        <h1 className="mb-6 text-2xl font-semibold">Press the buttons to count.</h1>
        <Counter />
      </div>
    </>
  );
}
