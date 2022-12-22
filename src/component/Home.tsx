import React from "react";
import { createUseStyles } from "react-jss";

type Props_Home = {
    start: () => void;
}

export const Home: React.FC<Props_Home> = ({start}) => {
    const styles = useStyle();
    return(
        <div className={styles.root}>
            <p className={styles.title}>心理測驗「你的原生底色」</p>
            <button className={styles.start} onClick={start}>開始測驗！</button>
        </div>
    );
};

const useStyle = createUseStyles({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#2f5496',
        fontWeight: 'bolder',
        fontSize: 'large'
    },
    start: {
        fontWeight: 'bolder',
        fontSize: 'large'
    }
});