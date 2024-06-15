import React from 'react';

const TextPicker = ({ text, setText, font, setFont }) => {
  const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia'];

  return (
    <div className="textpicker-container">
      <div className="flex-1 flex flex-col">
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="textpicker-label w-full"
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          className="textpicker-input"
        />
      </div>
    </div>
  );
};

export default TextPicker;

