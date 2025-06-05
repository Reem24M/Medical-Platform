type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function Button({ text, onClick, type = 'button', className = '' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-4 bg-[#0E56CA] text-white cursor-pointer rounded-xl text-xl ${className}`}
    >
      {text}
    </button>
  );
}
