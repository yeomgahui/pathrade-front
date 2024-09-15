interface SelectProps {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select = ({ options, onChange, className }: SelectProps) => {
  return (
    <select className={`border p-2 rounded ${className}`} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
