import { useRef } from 'react';

export default function OTPInput({ length = 6, onChangeOTP }: { length?: number; onChangeOTP: (otp: string) => void }) {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // only digits

    const newOTP: string[] = Array(length).fill('');
    inputsRef.current.forEach((input, idx) => {
      newOTP[idx] = input.value;
    });

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    onChangeOTP(newOTP.join(''));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !inputsRef.current[index].value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2 my-5">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          ref={(el) => {
            if (el) inputsRef.current[idx] = el;
          }}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className="w-12 h-12 text-center border bg-white mx-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
}
