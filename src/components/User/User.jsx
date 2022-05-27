import React from "react";
import { Link } from "react-router-dom";
import cls from "./User.module.css";

const User = ({ name, city, id }) => {
    return (
        <div className={cls.user}>
            <div className={cls.name}>{name}</div>
            <div className={cls.city}>{city}</div>
            <Link to={`/user/${id}`} className={cls.link}>
                <button className={cls.prof}>Смотреть профиль</button>
            </Link>
            {/*<button className={cls.prof}>Смотреть профиль</button>*/}
        </div>
    )
}

export default User;