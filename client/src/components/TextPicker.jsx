import React from "react";
import CustomButton from "./CustomButton";

const TextPicker = ({
  text,
  setText,
  font,
  setFont,
  fontSize =30,
  setFontSize,
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
          handleClick={() => readText(text, font, fontSize)}
          customStyles="text-xs mt-2"
          disabled={!text.trim()}
        />
      </div>
    </div>
  );
};

export default TextPicker;
