import React from "react";
import cls from "./Name.module.css";

const Name = ({ user }) => {
    return (
        <div className={cls.Name}>
            <div className="_container">
                <h2 className={cls.title}>{user.name}</h2>
                <div className={cls.line}></div>
                <div className={cls.descrip}>
                    <div className={cls.city}>{user.address.city}</div>
                    <div className={cls.email}>{user.email}</div>
                    <div className={cls.tel}>{user.phone}</div>
                    <button className={cls.message}>Написать сообщение</button>
                    <button className={cls.goConc}>Предложить сходить на концерт</button>
                    <div className={cls.line}></div>
                </div>
            </div>
        </div>
    )
}

export default Name;