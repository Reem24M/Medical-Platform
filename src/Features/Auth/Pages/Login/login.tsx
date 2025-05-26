// src/components/LoginCard.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/image6.svg';
import Google from '../../../../assets/icons8-google.svg'
import Facebook from '../../../../assets/icons8-facebook.svg'
import Button from '../../../../Shared/ui/atoms/button';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import PasswordInput from '../../components/UI/passwordInput';
import EmailInput from '../../components/UI/emailInput';

export default function Login() {


    const loginSchema = z.object({
        email: z.string().email("Invalid email"),
        password: z.string().min(8, "Password must be at least 8 characters"),
    })
    type logindata = z.infer<typeof loginSchema>
    const { register, handleSubmit, formState: { errors } } = useForm<logindata>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const onSubmit = (data: logindata) => {

        alert(`Email: ${data.email}\nPassword: ${data.password}`);
    };


    if (errors) <h1>Error..........................</h1>

    useEffect(() => {

        console.log("login page loaded");
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent   w-full text-black">
            {/* <div className='  w-[50rem] h-[50rem] bg-gray-400 flex justify-center items-center'> */}

            <div
                className="  rounded-lg shadow-lg w-[50rem] h-[40rem] LightBgBlue flex flex-col items-center justify-center"
            >
                <div className='flex items-center justify-center w-full'>
                    <img src={Logo} alt="img" className='logosize' />
                </div>
                <h2 className="text-3xl font-bold mb-6  text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-[20rem]">
                     <EmailInput register={register} errors={errors} />

                    <PasswordInput
                        register={register("password")}
                        error={errors.password}
                    />

                    <Button type='submit' text="Log In" className='w-full' />
                </form>
                {/* login with */}
                <div className='mt-5'>
                    <h2 className='text-white text-center'>Login With</h2>
                    <div className='flex justify-center items-center mt-2'>
                        <button><img src={Google} className='IconSizeSmall' /></button>
                        <button><img src={Facebook} className=' w-8 h-8' /></button>
                    </div>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <p className='text-white'>Don't have an account? <Link to='/signup' className='text-blue-500 underline'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}
