import React from "react";
import cls from "./Header.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {

    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const head = document.querySelector('header');
        if (id) {
            head.style.position = 'relative'
        }
    })

    return (
        <header className={cls.header}>
            <div className="_container">
                <div className={cls.content}>
                    <a href="/">concert club</a>
                    <div className={cls.buttons}>
                        <button className={cls.btn}>Версия для слабовидящих</button>
                        <button className={cls.btn}>Мой профиль</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;