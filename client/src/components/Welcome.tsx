import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import Button from "./Button";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main className='flex justify-center w-full h-screen p-6'>
        <div className="flex container">
          <div className="flex justify-center items-center w-full h-full">
            <div>
              <h1 className="font-bold text-2xl md:text-4xl my-2 fade-left duration-500">
                Assessment Task For<br /> Backend Engineer Role
              </h1>
              <hr />
              <p className="md:text-2xl my-2 opacity-0 fade-left duration-500 delay-250">
                Morgan Mastrangelo
              </p>

              <div className="flex mt-12 opacity-0 fade-left duration-500 delay-500">
                <Link href={"/auth/login"}>
                  <Button className="btn-bg-white w-28 h-12 mx-2">Sign in</Button>
                </Link>

                <Link href={"/auth/register"}>
                  <Button className="btn-bg-black w-28 h-12 mx-2">Sign up</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center w-full h-full">
            <Image src={"/home-bg.jpg"} width={512} height={512} alt="home-bg" className="fade-down duration-1000" />
          </div>
        </div>
      </main>
    </>
  );
}