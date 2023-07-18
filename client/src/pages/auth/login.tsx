import Head from "next/head";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>

      <main className="flex justify-center items-center w-full h-screen">
        <div className="container flex justify-center items-center w-full h-screen">
          <form className="flex flex-col w-96 p-8 shadow-xl shadow-gray-300 fade-up duration-500">
            <h1 className="text-center text-3xl my-4">Sign In</h1>
            <Input type="text" placeholder={'Email Address'} />
            <Input type="password" placeholder={'Password'} />

            <Button className="btn-bg-black w-full h-12 mt-12 mb-4">Sign in</Button>
            <Link href={'/auth/register'} className="text-center hover:text-blue-500 hover:underline mb-2">Don&apos;t have an account?</Link>
            <Link href={'/'} className="text-center hover:text-blue-500 hover:underline mb-4">Go to Homepage</Link>
          </form>
        </div>
      </main>
    </>
  )
}