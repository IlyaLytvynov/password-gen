import React from 'react';

export const GeneratorPage = ({ suggestedPassword, onGenerate }) => {
  return (
    <div>
      <div className='suggestion'>{suggestedPassword}</div>
      <button onClick={onGenerate}>Get</button>
    </div>
  );
};
