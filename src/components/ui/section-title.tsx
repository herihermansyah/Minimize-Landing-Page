import React from "react";

type SectionTitleProps = {
  title: string;
  description: string;
  className?: string;
  titleClass?: string;
  descriptionClass?: string;
};

function SectionTitle({title, description, className, titleClass, descriptionClass}: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-2 text-center ${className}`}>
      <h2 className={`text-[36px] font-semibold text-neutral-d-gray ${titleClass}`}>{title}</h2>
      <p className={`text-neutral-gray text-[16px] ${descriptionClass}`}>{description}</p>
    </div>
  );
}

export default SectionTitle;
