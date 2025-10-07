import React from 'react';
import {CircleMinus, CirclePlus} from 'lucide-react';
import styles from './SelectPost.module.css';

const SelectPost = (props) => {
    return (
        <div className={styles.container}>
            <button className={styles.container_holderIcon} onClick={props.minusFun}>
                <CircleMinus className={styles.container_holderIcon_icon}/>
            </button>
            <span className={styles.container_postId}>{props.postId}</span>
            <button className={styles.container_holderIcon} onClick={props.plusFun}>
                <CirclePlus className={styles.container_holderIcon_icon}/>
            </button>
        </div>
    );
};

export default SelectPost