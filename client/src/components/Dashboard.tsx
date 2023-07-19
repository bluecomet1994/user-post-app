import Head from "next/head";
import Image from "next/image";
import Post from "./Post";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>User Dashboard</title>
      </Head>

      <main className="flex justify-center relative w-full min-h-screen">
        <div className="flex justify-start items-center fixed top-0 left-0 w-full h-20 bg-white shadow-xl shadow-gray-200">
          <Link
            href={''}
            className="flex justify-center items-center p-8 h-full hover:bg-gray-100 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            Profile
          </Link>
        </div>


        <div className="w-80 mx-8 my-28">
          <div className="flex flex-col items-center fixed w-80 h-1/2 p-8 rounded-sm shadow-2xl">
            <Image alt="profile_image" src={'/man.jpg'} width={128} height={128} priority />
            <h1 className="font-bold text-xl mt-4 mb-2">Morgan Mastrangelo</h1>
            <p>Saint Petersburg, Florida</p>
            <p>United States</p>
          </div>
        </div>

        <div className="w-96 mx-8 my-28">
          <Post />
          <Post />
        </div>
      </main>
    </>
  )
}