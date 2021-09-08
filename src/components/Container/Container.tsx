import React from 'react';
import './Container.css';

type ContainerProps = {
  children: any
};

const Container = (props: ContainerProps) => (
  <div className="container">
    {props.children}
  </div>
);

export default Container;
