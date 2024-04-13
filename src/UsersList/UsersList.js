import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./style.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Userslist() {
  const [users, setUsers] = useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  useEffect(() => {
    f();
  }, []);

  const handleUpdateUser = async (userId, updatedUserData) => {
    try {
      const res = await fetch(`https://reqres.in/api/users/${userId}`, {
        method: "PUTCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });
      if (res.ok) {
        alert("Пользователь успешно добавлен");
        f();
      } else {
        throw new Error("Ошибка при обновлении пользователя");
      }
    } catch (error) {
      console.error("Ошибка при обновлении пользователя: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Userslist">
        <div className="title">
          <h1 className="title__user-list">Список пользователей</h1>
          <NavLink to="/signin">
            <button className="ButtonSignIn">Sign In</button>
          </NavLink>
        </div>
        <div className="container__user-list">
          <div className="flex__user-list">
            {users.length &&
              users.map((user) => {
                return (
                  <div key={user.id}>
                    <div className="userList__desc">
                      <p>
                        <strong>{user.first_name}</strong>
                      </p>
                      <p>{user.email}</p>
                    </div>
                    <img className="userList__img" src={user.avatar} alt="" />
                    {/* Добавляем кнопку для обновления пользователя */}
                    <button
                      onClick={() =>
                        handleUpdateUser(user.id, {
                          name: "Новое имя",
                          job: "Новая должность",
                        })
                      }
                    ></button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
