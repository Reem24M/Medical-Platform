import type { UseFormRegister } from "react-hook-form";

interface LoginFormFields {
  email: string;
  password: string;
}

interface EmailInputProps {
  register: UseFormRegister<LoginFormFields>;
  errors: { email?: { message?: string } };
}

export default function EmailInput({ register, errors }: EmailInputProps) {
  return (
    <div>
      <label htmlFor="email" className="block mb-1 font-medium text-black">
        Email or Phone
      </label>
      <input
        type="email"
        id="email"
        {...register("email")}
        className={`w-full border ${
          errors.email ? "border-red-500" : "border-gray-300"
        } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
        placeholder="email or phone"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
    </div>
  );
}
