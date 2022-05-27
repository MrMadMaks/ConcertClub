import React from "react";
import cls from "./Publications.module.css"

const Publications = () => {
    return (
        <section className={cls.Publications}>
            <div className="_container">
                <h2 className={cls.title}>Публикации</h2>
                <div className={cls.pub}>
                    <div className={cls.pubItem}></div>
                    <div className={cls.pubItem}></div>
                    <div className={cls.pubItem}></div>
                    <div className={cls.pubItem}></div>
                    <div className={cls.pubItem}></div>
                    <div className={cls.pubItem}></div>
                </div>
            </div>
        </section>
    )
}

export default Publications;