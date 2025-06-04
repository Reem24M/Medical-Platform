// src/components/LoginCard.jsx
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/image6.svg';
import Google from '../../../../assets/icons8-google.svg'
import Facebook from '../../../../assets/icons8-facebook.svg'
import Button from '../../../../Shared/ui/atoms/button';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import EmailInput from '../../components/UI/emailInput';

import { useState } from 'react';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    const signupSchema = z.object({
        fullName: z.string().min(1, "Full Name is required"),
        email: z.string().email("Invalid email"),
        phone: z.string().min(1, "Phone number is required"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmpassword: z.string().min(8, "Confirm Password must be at least 8 characters")
    });
    type signupdata = z.infer<typeof signupSchema>
    const { register, handleSubmit, formState: { errors } } = useForm<signupdata>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmpassword: '',
            fullName: '',
            phone: '',
        }
    })
    const onSubmit = (data: signupdata) => {

        alert(`Email: ${data.email}\nPassword: ${data.password}`);
    };


    if (errors) <h1>Error..........................</h1>


    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent p-5   w-full text-black">
            {/* <div className='  w-[50rem] h-[50rem] bg-gray-400 flex justify-center items-center'> */}

            <div
                className="  rounded-lg shadow-lg w-[50rem] h-auto p-5 LightBgBlue flex flex-col items-center justify-center"
            >
                <div className='flex items-center justify-center w-full'>
                    <img src={Logo} alt="img" className='logosize' />
                </div>
                <h2 className="text-3xl font-bold mb-6  text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-[20rem]">
                    <div>
                        <label htmlFor="name" className="block mb-1 font-medium text-black">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("fullName")}
                            className={`w-full border ${errors.fullName ? "border-red-500" : "border-gray-300"
                                } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                            placeholder="Full Name"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                    </div>


                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                                } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                            placeholder="email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="Phone" className="block mb-1 font-medium text-black">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="Phone"
                            {...register("phone")}
                            className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"
                                } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                            placeholder="Phone"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* <PasswordInput register={register("password")} error={errors.password} /> */}

                    <div className="relative">
                        <label htmlFor="password" className="block mb-1 font-medium text-black">
                            Password
                        </label>

                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            {...register("password")}
                            className={`w-full border ${errors ? "border-red-500" : "border-gray-300"
                                } rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white
                               appearance-none`}
                            placeholder="********"
                        />


                        <button
                            type="button"
                            className="absolute right-3 top-[38px] text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>

                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block mb-1 font-medium text-black">
                            Confirm Password
                        </label>

                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirmpassword"
                            {...register("confirmpassword")}
                            className={`w-full border ${errors ? "border-red-500" : "border-gray-300"
                                } rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white
                               appearance-none`}
                            placeholder="********"
                        />


                        <button
                            type="button"
                            className="absolute right-3 top-[38px] text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>

                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <Button type='submit' text="Create Account" className='w-full' />
                </form>
                {/* login with */}
                <div className='mt-5'>
                    <h2 className='text-white text-center'>Sign Up With</h2>
                    <div className='flex justify-center items-center mt-2'>
                        <button><img src={Google} className='IconSizeSmall' /></button>
                        <button><img src={Facebook} className=' w-8 h-8' /></button>
                    </div>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <p className='text-white'>Already have an account? <Link to='/login' className='text-blue-500 underline'>Log In</Link></p>
                </div>
            </div>
        </div>
    );
}
