import React from "react";

const CardUser = ({ user }) => {
  return (
    <article className="user">
      <h2 className="user__id">User {user.id}</h2>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__bold">Nombre: </span>
          {user.name}
        </li>
        <li className="user__item">
          <span className="user__bold">Email: </span>
          {user.email}
        </li>
        <li className="user__item">
          <span className="user__bold">City: </span>
          {user.address.city}
        </li>
      </ul>
    </article>
  );
};

export default CardUser;
