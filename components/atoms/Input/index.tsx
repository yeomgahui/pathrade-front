interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ placeholder, onChange, className }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={`border p-2 rounded ${className}`}
    />
  );
};

export default Input;
