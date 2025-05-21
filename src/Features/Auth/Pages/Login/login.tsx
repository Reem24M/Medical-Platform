// src/components/LoginCard.jsx
import { useState } from 'react';
import Logo from '../../../../assets/image6.svg'
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent p-20  w-full text-black">
            {/* <div className='  w-[50rem] h-[50rem] bg-gray-400 flex justify-center items-center'> */}

            <div
                className=" p-10 rounded-lg shadow-lg w-[45rem] h-[35rem]"
                style={{ background: 'rgba(182, 194, 194,0.5)' }} // 80% opacity (20% transparent)
            >
                <div className='flex items-center justify-center w-full'>
                <img src={Logo} alt="img" className='logosize' />
                </div>
                <h2 className="text-3xl font-bold mb-6  text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium text-black">
                            Email or Phone
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white "
                            placeholder="email or phone"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium text-black">
                            PassWord
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#425C5B] text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}
