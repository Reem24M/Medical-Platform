import { Link } from 'react-router-dom'
import Button from '../../../../Shared/ui/atoms/button'
import OTPInput from '../../../../Shared/ui/atoms/oTPInput'
import { useState } from 'react'

export default function PhonePage() {
    const [otp, setOtp] = useState('');

    const handleOTPChange = (value: string) => {
        console.log('OTP:', value);
        setOtp(value); 
    };

    const handleConfirmation = () => {
        console.log('Confirmed OTP:', otp);
        // e.g. send OTP to backend
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent p-5 w-full text-black">
            <div className="rounded-lg shadow-lg w-[926px] h-[711px] p-5 LightBgBlue flex flex-col items-center justify-center">
                <div className='w-[458px] h-[500px] flex flex-col justify-center items-center '>
                    <h1 className="text-2xl font-bold mb-5">Please enter the code sent to the phone number.</h1>
                        <h1>Code</h1>
                    <div className='flex justify-center items-center'>
                        
                        <OTPInput length={6} onChangeOTP={handleOTPChange} />
                        </div>
                    <Button text="Confirmation" className="w-full mt-5" onClick={handleConfirmation} />
                    <div className="flex justify-center items-center mt-5">
                        <div className="text-black font-bold">
                            Return to <Link to='/login' className="text-blue-500 underline">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
