import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { links } from "../testAnswer";

type Props_Result = {
    result: number;
}

export const Result: React.FC<Props_Result> = ({result}) => {
    const styles = useStyle();
    const [state, setState] = useState(true);
    return(<>
        <div className={`${styles.root} result result${result}`}>
            <a className={styles.link} href={links[result]} target='_blank' rel="noreferrer"> </a>
        </div>
        {state ? <div className={styles.cover}>
            <p className={styles.title}>測驗結束啦！！</p>
            <button className={styles.seeResult} onClick={() => setState(false)}>看看測驗結果</button>
        </div> : null}
    </>);
}

const useStyle = createUseStyles({
    root: {
        width: '100%',
        height: '185.25vw'
    },
    link: {
        width: '40%',
        height: '5%',
        backgroundColor: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top: '160vw',
        left: '30%'
    },
    cover: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        color: '#2f5496',
        fontWeight: 'bolder',
        fontSize: 'large'
    },
    seeResult: {
        fontWeight: 'bolder',
        fontSize: 'large'
    }
});