import React from 'react';
import {FaCircleNotch} from "react-icons/fa6";
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_iconHolder}>
                <FaCircleNotch className={styles.container_iconHolder_icon}/>
            </div>
            <h2 className={styles.container_text}>Loading...</h2>
        </div>
    );
};

export default Loading