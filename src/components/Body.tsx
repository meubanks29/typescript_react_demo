import React from 'react';
import { BodyProps } from '../interfaces/BodyProps';

const Body : React.FC<BodyProps> = (props: any) => {
  const { textValue } = props;
  return <section className="text-output">
    <p>{ textValue }</p>
  </section>;
}

export default Body;
