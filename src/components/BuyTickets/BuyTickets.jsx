import React from "react";
import User from "../User/User";
import cls from "./BuyTickets.module.css";

const BuyTickets = ({ users }) => {
    return (
        <section className={cls.BuyTickets}>
            <div className="_container">
                <div className={cls.header}>
                    <h2 className={cls.title}>Купили билеты</h2>
                    <div className={cls.num}>932/ <span>1000</span></div>
                </div>
                <div className={cls.users}>
                    {
                        users.map((user) => {
                            return (
                                <User name={user.name} city={user.address.city} id={user.id} key={user.id} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BuyTickets;