import React, { useState } from 'react';

interface Props {
  value: string,
  id: string,
  label: string,
  onChange: (e: React.ChangeEvent<any>) => void;
  containerClasses?: string;
  error?: string;
}

export const InputField: React.FC<Props> = ({ id, value, onChange, label, containerClasses, error }) => {
  return (
    <div className={`bg-gray-444 p-20 flex flex-col rounded-default w-5/12 w-full ${containerClasses || ''}`}>
      <label className='mb-5 text-gray-f2f text-body-sm' htmlFor={id}>{label}</label>
      <input className='bg-gray-444 border-b border-gray-e0e text-white font-light text-body-lg' id={id} value={value} onChange={onChange} />
      <p className='text-gray-999 text-body-sm font-medium mt-5'>{error}</p>
    </div>
  );
};
