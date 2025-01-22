import React from 'react';
import './Column.css';

interface ColumnProps {
  id: string;
  title: string;
  color: string;
  children?: React.ReactElement;
}

export default function Column(props: ColumnProps) {
  const { id, title, color, children } = props;
  return (
    <div
      id={id}
      style={{ backgroundColor: color }}
      className='column-container'
    >
      <div className='column-title'>{title}</div>
      <div className='column-body'>{children}</div>
    </div>
  );
}
