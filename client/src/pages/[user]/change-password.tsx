import Head from "next/head";
import Link from "next/link";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function ChangePassword() {
  const loginValidationSchema = yup.object().shape({
    email: yup.string().required('This field is required.').email('Email is invalid.'),
    password: yup.string().required('This field is required.')
  });

  const formOptions = { resolver: yupResolver(loginValidationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const submitForm = () => {
    
  }

  return (
    <>
      <Head>
        <title>Change Password</title>
      </Head>

      <main className="flex justify-center items-center w-full h-screen">
        <div className="container flex justify-center items-center w-full h-screen">
          <form onSubmit={handleSubmit(submitForm)} className="flex flex-col w-96 p-8 shadow-xl shadow-gray-300 fade-up duration-500">
            <h1 className="text-center text-3xl my-4">Reset Password</h1>
            <Input type="text" placeholder={'Current Password'} form={register('email')} error={errors.email} />
            <Input type="text" placeholder={'New Password'} form={register('email')} error={errors.email} />
            <Input type="password" placeholder={'Confirm Password'} form={register('password')} error={errors.password} />

            <Button type='submit' className="btn-bg-black w-full h-12 mt-12 mb-4">Change Password</Button>
            <Link href={'/auth/register'} className="text-center hover:text-blue-500 hover:underline mb-2">Don&apos;t have an account?</Link>
            <Link href={'/'} className="text-center hover:text-blue-500 hover:underline mb-4">Go to Homepage</Link>
          </form>
        </div>
      </main>
    </>
  )
}