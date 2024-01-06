import React, { FC, useState } from 'react';
import avatar from './ph.png'
import './avatar.css';
import {useGetCurrentUserQuery} from "../../../store/api/userApi";
import {IUser} from "../../../types/IUser";

const Avatar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const {data:user} = useGetCurrentUserQuery()

  return (
    <div className="ava">
      <a className="ava_a" onClick={() => setIsOpen(!isOpen)}>
        <img className="ava_img" src={avatar} alt={user?.email} title={user?.email}/>
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
