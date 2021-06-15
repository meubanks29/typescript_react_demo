import React, { useState } from 'react';
import { ControlComponentProps } from '../interfaces/ControlComponentProps';

const ControlComponent : React.FC<ControlComponentProps> = (props) => {
  const { addText, deleteText } = props;

  const [inputValue, setInputValue] = useState<String>('');

  const handleInputValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  }

  return <div>
      <div>
        <label htmlFor="todo-text">Type something in below</label>
        <input 
          type="text" 
          id="todo-text" 
          name="name" 
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => handleInputValue(ev)} />
      </div>
      <button type="button" onClick={(e) => addText(inputValue)}>ADD TEXT</button>
      <button type="button" onClick={(e) => deleteText()}>RESET TEXT</button>
  </div>;
}

export default ControlComponent;
