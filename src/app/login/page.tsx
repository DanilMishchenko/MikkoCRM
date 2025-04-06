'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';

import Logo from '@/public/logo.svg';
import Brand from '@/public/brand.svg';
import Mail from '@/public/mail.svg';
import Lock from '@/public/lock-keyhole.svg';

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Невірний формат email' })
    .min(1, { message: "Email обов'язковий" }),
  password: z
    .string()
    .min(8, { message: 'Пароль повинен містити мінімум 8 символів' })
    .min(1, { message: "Пароль обов'язковий" }),
});

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-row min-h-screen bg-primary">
      <div className="flex justify-center items-center w-4/6">
        <Image src={Logo} alt="Logo" width={480} priority />
      </div>
      <div className="flex justify-center items-center w-2/6 bg-secondary">
        <div>
          <div>
            <Image src={Brand} alt="Brand" width={300} />
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col ">
                <label htmlFor="email" className="relative mb-7 text-primary">
                  <input
                    id="email"
                    className="w-full h-11 pl-10 pr-3 py-2 border-1 border-gray-medium rounded-full focus:outline-none focus:border-primary "
                    type="email"
                    {...register('email')}
                    placeholder="E-mail"
                    autoComplete="off"
                    autoCorrect="off"
                  />
                  <Image
                    src={Mail}
                    alt="email"
                    height={18}
                    className="absolute top-1/2 left-3 -translate-y-1/2 "
                  />
                  {errors.email && (
                    <p role="alert" className="absolute text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </label>
                <label htmlFor="password" className="relative text-gray-700">
                  <input
                    id="password"
                    className="w-full h-11 pl-10 pr-3 py-2 border border-gray-medium rounded-full focus:outline-none focus:border-primary "
                    type="password"
                    {...register('password')}
                    placeholder="Password"
                    autoComplete="off"
                    autoCorrect="off"
                  />
                  <Image
                    src={Lock}
                    alt="password"
                    height={18}
                    className="absolute top-1/2 left-3 -translate-y-1/2 "
                  />
                  {errors.password && (
                    <p className="absolute text-red-500 text-xs mt-1">{errors.password.message}</p>
                  )}
                </label>
              </div>

              <button
                className={`block min-w-[200px] mx-auto mt-5 p-3 text-white rounded-full transition ${
                  isValid ? 'bg-primary hover:bg-gray-medium' : 'bg-primary cursor-not-allowed'
                }`}
                type="submit"
                disabled={!isValid}
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
