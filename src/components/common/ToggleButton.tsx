import React, { useState } from 'react';

// Definimos la interfaz de Props para el componente ToggleButton
interface ToggleButtonProps {
  labelOn: string;
  labelOff: string;
  propOn: string;
  propOff: string;
  class?: string;
  onToggleOn?: () => void;
  onToggleOff?: () => void;
}

// Creamos el componente ToggleButton
const ToggleButton: React.FC<ToggleButtonProps> = ({
  labelOn,
  labelOff,
  propOn,
  propOff,
  class: className = '',
  onToggleOn,
  onToggleOff,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
    if (!isToggled && onToggleOn) {
      onToggleOn();
    }
    if (isToggled && onToggleOff) {
      onToggleOff();
    }
  };

  const currentLabel = isToggled ? labelOn : labelOff;
  const currentProp = isToggled ? propOn : propOff;

  return (
    <button
      onClick={handleToggle}
      className={`cursor-pointer uppercase transition-colors border-2 py-2 px-8 rounded-md text-white font-semibold no-underline focus:outline-none inline-block ${className} ${
        isToggled
          ? 'bg-primary border-primary hover:bg-transparent hover:text-primary'
          : 'bg-secondary border-secondary hover:bg-transparent hover:text-secondary'
      }`}
    >
      {currentLabel}
    </button>
  );
};

export default ToggleButton;
