import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick, disabled  }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: disabled ? '#ccc' : snap.color,
        color: disabled ? '#666' : getContrastingColor(snap.color),
        cursor: disabled ? 'not-allowed' : 'pointer',
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: disabled ? '#ccc' : snap.color,
        color: disabled ? '#666' : snap.color,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={!disabled ? handleClick : undefined}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default CustomButton