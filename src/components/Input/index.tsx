import Image from 'next/image';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  isTextArea?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  isTextArea = false,
}) => {
  return (
    <div>
      <label>{label}</label>
      <div className="my-3 flex rounded-lg border-[3px] border-green-700 p-3">
        {isTextArea ? (
          <textarea
            className="font-lato w-full text-[1.6rem] outline-none"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <input
            className="font-lato w-full text-[1.6rem] outline-none"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
        {value && (
          <button
            onClick={(event) => {
              onChange('');
              event.preventDefault();
            }}
          >
            <Image
              src={'/icons/clear.svg'}
              width={16}
              height={16}
              alt="clear"
            />
          </button>
        )}
      </div>
    </div>
  );
};
export default Input;
