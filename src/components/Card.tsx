import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import getAirline from "../services/Card"

type response = {
    airline: string
}
const Card = () => {
    const [airline,setAirline] = useState<response>({airline: ""})

    useEffect(() => {
        let response = getAirline();
        setAirline(response)
    }
    ,)

    return (
        <div className={styles.card}>
            {airline.airline}
        </div>
    )
};

export default Card;
