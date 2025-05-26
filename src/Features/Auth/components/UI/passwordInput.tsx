import { useState } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordFormFields {
    password: string;
}

interface Props {
    register: ReturnType<UseFormRegister<PasswordFormFields>>;
    error?: FieldError;
}

export default function PasswordInput({ register, error }: Props) {
    const [showPassword,setShowPassword] = useState(false);

    return (
        <div className="relative">
            <label htmlFor="password" className="block mb-1 font-medium text-black">
                Password
            </label>

            <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register}
                autoComplete="new-password"
                className={`w-full border ${error ? "border-red-500" : "border-gray-300"
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

            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
}
