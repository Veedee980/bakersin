import React from "react";

interface InfoSectionProps {
  title: string;
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
  imageSrc?: string;
  reverse?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  text,
  buttonText,
  onButtonClick,
  imageSrc,
  reverse = false,
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-[rgba(38,27,108,1)] text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">{text}</p>
        <button
          onClick={onButtonClick}
          className="bg-[#B2904C] text-white text-base px-6 py-3 rounded hover:bg-[#a58344] transition-colors duration-300 shadow-lg"
        >
          {buttonText}
        </button>
      </div>

      {imageSrc && (
        <div className="flex-1 flex justify-center items-center">
          <img src={imageSrc} alt={title} className="max-w-xl rounded shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default InfoSection;


