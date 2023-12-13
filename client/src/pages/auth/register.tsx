import Head from "next/head";
import Link from "next/link";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Register() {
  const registerValidationSchema = yup.object().shape({
    firstname: yup.string().max(128).required("This field is required."),
    lastname: yup.string().max(128).required("This field is required."),
    email: yup.string().required("This field is required.").email("Email is invalid."),
    password: yup.string().required("This field is required.").min(6, "Password must be at least 6 characters.").max(30, "Password must be less than 30 characters."),
    confirm: yup.string().required("This field is required.").oneOf([yup.ref("password")], "Passwords must be match.")
  });

  const formOptions = { resolver: yupResolver(registerValidationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const submitForm = () => {
    console.log("here");
  };

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>

      <main className="flex justify-center items-center w-full h-screen">
        <div className="container flex justify-center items-center w-full h-screen">
          <form className="flex flex-col w-96 p-8 shadow-xl shadow-gray-300 fade-up duration-500" onSubmit={handleSubmit(submitForm)}>
            <h1 className="text-center text-3xl my-4">Sign Up</h1>
            <Input type="text" form={register("firstname")} placeholder={"First Name"} error={errors.firstname} />
            <Input type="text" form={register("lastname")} placeholder={"Last Name"} error={errors.lastname} />
            <Input type="text" form={register("email")} placeholder={"Email Address"} error={errors.email} />
            <Input type="password" form={register("password")} placeholder={"Password"} error={errors.password} />
            <Input type="password" form={register("confirm")} placeholder={"Confirm Password"} error={errors.confirm} />

            <Button type="submit" className="btn-bg-black w-full h-12 mt-12 mb-4">Sign up</Button>
            <Link href={"/auth/login"} className="text-center hover:text-blue-500 hover:underline mb-2">Already have an account?</Link>
            <Link href={"/"} className="text-center hover:text-blue-500 hover:underline mb-4">Go to Homepage</Link>
          </form>
        </div>
      </main>
    </>
  );
}