interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

import './slider.css';

export const Slider: React.FC<SliderProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        onChange={(event) => {
          onChange(Number(event.target.value));
        }}
        value={value}
        type="range"
        min={0}
        max={10000}
        step={100}
        className="slider my-6"
      />
    </div>
  );
};
export default Slider;
