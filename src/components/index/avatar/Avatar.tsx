import React, { FC, useState } from 'react';
import avatar from './ph.png'
import './avatar.css';

const Avatar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="ava">
      <a className="ava_a" onClick={() => setIsOpen(!isOpen)}>
        <img className="ava_img" src={avatar} alt="" />
      </a>
      {isOpen && (
        <select className="ava_select">
            <option>EN</option>
            <option>BY</option>
            <option>UA</option>
        </select>
      )}
    </div>
  );
};
export default Avatar;
