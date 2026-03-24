import React from "react";

type ToggleButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  click: boolean;
  iconOn: React.ReactNode;
  iconOf: React.ReactNode;
};

function ToggleButton({onClick, click, iconOn, iconOf} : ToggleButtonProps) {
  
  return (
    <button
      className="text-2xl text-brand-primary cursor-pointer"
      onClick={onClick}
    >
      {click ? iconOf : iconOn}
    </button>
  );
}

export default ToggleButton;
