import React from 'react';
import Head from 'next/head';
import SimpleForm from '@/components/SignupForm';
 
/** Form page: layout and padding come from <Layout> in _app.tsx. */
export default function FormPage() {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className="mx-auto max-w-md rounded-xl border border-zinc-200 p-8 shadow-sm dark:border-zinc-800">
        <h1 className="mb-6 text-2xl font-semibold">Create your account</h1>
        <SimpleForm />
      </div>
    </>
  );
}
