import React from "react";
import cls from "./Posts.module.css";

const Posts = ({ user }) => {
    return (
        <section className={cls.Posts}>
            <div className="_container">
                <h2 className={cls.title}>Посты</h2>
                <div className={cls.postsItems}>
                    <div className={cls.item}>
                        <div className={cls.header}>
                            <h4 className={cls.itemTitle}>Twenty One Pilots</h4>
                            <div className={cls.date}>12.01.22</div>
                        </div>
                        <div className={cls.descr}>Просто шикарный альбом, Пилоты после Blurryface решили не идти проторенной дорожкой, и сделали что то новое. На мой взгляд у них на 100% получилось, альбом слушается на одном дыхании, каждая песня чем то запоминается, естественно нужно понимать тексты, чтобы вникнуть до конца во весь сюжет и атмосферу альбома.... </div>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.header}>
                            <h4 className={cls.itemTitle}>Twenty One Pilots</h4>
                            <div className={cls.date}>12.01.22</div>
                        </div>
                        <div className={cls.descr}>Просто шикарный альбом, Пилоты после Blurryface решили не идти проторенной дорожкой, и сделали что то новое. На мой взгляд у них на 100% получилось, альбом слушается на одном дыхании, каждая песня чем то запоминается, естественно нужно понимать тексты, чтобы вникнуть до конца во весь сюжет и атмосферу альбома.... </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts;