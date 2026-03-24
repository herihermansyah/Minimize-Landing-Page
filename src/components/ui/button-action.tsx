import React from "react";
type ButtonActionProps = {
  title: string;
  icon?: React.ReactNode;
};
function ButtonAction({title, icon}: ButtonActionProps) {
  return (
    <button className="bg-brand-primary text-white px-8 py-3.5 rounded-sm flex items-center gap-2">
      <span>{title}</span>
      <span>{icon}</span>
    </button>
  );
}

export default ButtonAction;
