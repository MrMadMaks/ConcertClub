import React from "react";
import cls from "./AboutBand.module.css";

const AboutBand = () => {
    return (
        <div className="_container">
            <section className={cls.AboutBand}>
                <h2 className={cls.title}>О&nbsp;группе</h2>
                <div className={cls.descr}>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</div>
            </section>
        </div>
    )
}

export default AboutBand;