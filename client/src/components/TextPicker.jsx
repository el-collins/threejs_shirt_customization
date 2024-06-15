import React from "react";
import CustomButton from "./CustomButton";

const TextPicker = ({
  text,
  setText,
  font,
  setFont,
  fontSize,
  setFontSize,
  textColor,
  setTextColor,
  readText,
}) => {
  const fonts = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Courier New",
    "Georgia",
  ];

  return (
    <div className="textpicker-container">
      <div className="flex flex-col">
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="textpicker-label w-full textpicker-input"
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          placeholder="Font size"
          className="textpicker-input"
        />

        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="p-1 h-10 w-14 block bg-transparent border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
          id="hs-color-input"
          title="Choose your color"
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          className="textpicker-input"
        />
        <p className="text-gray-500 text-xs truncate">
          {text === "" ? "No text entered" : ""}
        </p>
      </div>

      <div className="flex">
        <CustomButton
          type="filled"
          title="Write"
          handleClick={() => readText(text, font, fontSize, textColor)}
          customStyles="text-xs mt-2"
          disabled={!text.trim()}
        />
      </div>
    </div>
  );
};

export default TextPicker;
