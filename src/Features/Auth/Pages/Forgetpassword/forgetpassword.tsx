import Button from "../../../../Shared/ui/atoms/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const ForgetpassSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type ForgetPassForm = z.infer<typeof ForgetpassSchema>;

export default function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPassForm>({
    resolver: zodResolver(ForgetpassSchema),
  });

  const onSubmit = (data: ForgetPassForm) => {
    console.log("Sent email:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent p-5   w-full text-black">
      {/* <div className='  w-[50rem] h-[50rem] bg-gray-400 flex justify-center items-center'> */}

      <div
        className="  rounded-lg shadow-lg w-[926px] h-[711px]  p-5 LightBgBlue flex flex-col items-center justify-center "
      >
        <div className='   w-[458px] h-[458px]  '>
          <form onSubmit={handleSubmit(onSubmit)} className="  h-auto w-full flex flex-col gap-10 mb-5 ">
            <h1 className="text-2xl font-bold">Cannot access your account?</h1>
            <p className="text-xl">
              Enter your email address or phone and we will send you a link to
              recover your account.
            </p>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                placeholder="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <Button type="submit" text="Send Recovery Link" className="w-full" />
          </form>
          <div className="flex justify-center items-center">
          <div className="text-bleck font-bold">Return to <Link to='/login' className="text-blue-500 underline">Log In</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
