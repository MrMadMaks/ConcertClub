import React from "react";
import { useParams } from "react-router-dom";
import Name from "../Name/Name";
import Posts from "../Posts/Posts";
import Publications from "../Publications/Publications";
import cls from "./UserCard.module.css";

const UserCard = ({ users }) => {
    const { id } = useParams();
    const user = users.filter(card => card.id === +id)[0]

    return (
        <div className={cls.UserCard}>
            <Name user={user} />
            <Posts user={user} />
            <Publications user={user} />
        </div>
    )
}

export default UserCard;