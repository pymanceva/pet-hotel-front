import React, { useState } from 'react';

interface InputProps {
  placeholder: string;
}

const NewInput: React.FC<InputProps> = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          font: value ? '12px' : '16px',
          position: 'absolute',
          top: value ? '-30px' : '50%',
          left: '15px',
          transform: value ? 'translateY(0)' : 'translateY(-50%)',
          transition: 'all 0.3s ease',
          background: '#fff',
          padding: '0 5px',
          pointerEvents: 'none',
          backgroundColor: 'transparent',
        }}
      >
        {placeholder}
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{
          padding: '12px 20px 12px 20px',
          border: '2px solid #D0CFCF',
          borderRadius: '24px',
          fontSize: '16px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};

export default NewInput;
