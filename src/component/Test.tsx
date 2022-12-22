import React from "react";
import { createUseStyles } from "react-jss";
import { Question } from "../questions";

type Props_Test = Question & {
    onSubmit: (ans: number) => void;
};

export const Test: React.FC<Props_Test> = ({question, selection, onSubmit}) => {
    const styles = useStyle();
    return (
        <div className={styles.root}>
            <p className={styles.question}>{question}</p>
            {selection.map((val, idx) => <button className={styles.selection} key={idx} onClick={() => onSubmit(idx)}>{val}</button>)}
        </div>
    );
}

const useStyle = createUseStyles({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    question: {
        fontWeight: 'bolder',
        fontSize: 'large'
    },
    selection: {
        fontWeight: 'bolder',
        fontSize: 'large',
        marginBlock: 10,
        paddingBlock: 3
    }
});
