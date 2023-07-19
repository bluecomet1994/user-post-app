import Head from "next/head";
import Link from "next/link";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "@/components/Input";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { user: userId } = router.query;

  const registerValidationSchema = yup.object().shape({
    firstname: yup.string().max(128).required('This field is required.'),
    lastname: yup.string().max(128).required('This field is required.'),
    email: yup.string().required('This field is required.').email('Email is invalid.'),
    ip: yup.string(),
    city: yup.string(),
    region: yup.string(),
    country: yup.string(),
    date: yup.string()
  });

  const formOptions = { resolver: yupResolver(registerValidationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const submitForm = () => {
    console.log('here');
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      <main className="flex justify-center items-center w-full h-screen">
        <div className="container flex justify-center items-center w-full h-screen">
          <form className="flex flex-col items-center p-8 shadow-xl shadow-gray-300 fade-up duration-500" onSubmit={handleSubmit(submitForm)}>
            <h1 className="text-center text-3xl my-4">Profile</h1>

            <div className="flex">
              <div className="flex flex-col justify-center w-96 m-4">
                <div className="flex justify-center">
                  <Image
                    alt="profile_image"
                    src={'/man.jpg'}
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-gray-200"
                    priority
                  />
                </div>

                <Input
                  type="text"
                  form={register('firstname')} 
                  placeholder={'First Name'}
                  error={errors.firstname}
                />

                <Input
                  type="text"
                  form={register('lastname')}
                  placeholder={'Last Name'}
                  error={errors.lastname}
                />

                <Input
                  type="text"
                  form={register('email')}
                  placeholder={'Email'}
                  error={errors.email}
                />

              </div>

              <div className="flex flex-col justify-center w-96 m-4">
                <Input
                  type="password"
                  form={register('ip')}
                  placeholder={'IP Address'}
                  error={errors.ip}
                />

                <Input
                  type="password"
                  form={register('city')}
                  placeholder={'City'}
                  error={errors.city}
                />

                <Input
                  type="password"
                  form={register('region')}
                  placeholder={'Region'}
                  error={errors.region}
                />

                <Input
                  type="password"
                  form={register('country')}
                  placeholder={'Country'}
                  error={errors.country}
                />

                <Input
                  type="password"
                  form={register('date')}
                  placeholder={'Join Date'}
                  error={errors.date}
                />

              </div>
            </div>

            <Button type="submit" className="btn-bg-black w-72 h-12 mt-12 mb-4">Update Profile</Button>

            <div className="flex justify-end w-full">
              <Link href={`/${userId}/change-password`} className="text-center hover:text-blue-500 hover:underline mx-2 mb-4">Reset Password</Link>
              <Link href={'/'} className="text-center hover:text-blue-500 hover:underline mx-2 mb-4">Go to Homepage</Link>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}