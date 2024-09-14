type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    'px-4 py-2 rounded-lg shadow-md focus:outline-none transition duration-150 ease-in-out';

  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary:
      'bg-white text-purple-600 border border-purple-600 hover:bg-gray-100',
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
