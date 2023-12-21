import React from 'react';
import "./Friends.css"


const FriendList = ({ friends }) => {

  return (
    <div className="friends">
      <ul className="friends-list">
        {friends.map(({ avatar, name, isOnline, id}) => (
          <li className="friends-item" key={id}>
            <span className={`status ${isOnline ? 'online' : 'offline'}`}>           </span>
            <img className="avatar" src={avatar} alt={name} />
            <p className="friends-name">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FriendList }