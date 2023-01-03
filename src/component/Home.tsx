import React from "react";
import { createUseStyles } from "react-jss";

type Props_Home = {
    start: () => void;
}

export const Home: React.FC<Props_Home> = ({start}) => {
    const styles = useStyle();
    return(
        <div className={`${styles.root} home`}>
            <button className={styles.start} onClick={start}/>
        </div>
    );
};

const useStyle = createUseStyles({
    root: {
        display: 'flex',
        width: '100%',
        height: '185.25vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#2f5496',
        fontWeight: 'bolder',
        fontSize: 'large'
    },
    start: {
        position: 'absolute',
        backgroundColor: 'transparent',
        border: 'none',
        width: '40%',
        height: '20vw',
        top: '125vw',
        left: '30%'
    }
});