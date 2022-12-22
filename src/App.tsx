import React, { useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { Home } from './component/Home';
import { Result } from './component/Result';
import { Test } from './component/Test';
import { questions } from './questions';
import { testAnswer } from './testAnswer';

const enum TestState {
	home,
	test,
}

const App: React.FC = () => {
	const styles = useStyle();
	const [state, setState] = useState(TestState.home);
	const [quesIdx, setQuesIdx] = useState(0);
	const [answer, setAnswer] = useState<number[]>([]);
	const onSubmit = useCallback((ans: number) => {
		setAnswer((prev) => [...prev, ans]);
		setQuesIdx((prev) => prev+1);
	}, []);

	return(
		<div className={styles.root}>
			{state === TestState.home ? <Home start={() => setState(TestState.test)}/> : null}
			{state === TestState.test && quesIdx < questions.length ? <Test {...questions[quesIdx]} onSubmit={onSubmit} /> : null}
			{quesIdx >= questions.length ? <Result result={testAnswer(answer)}/> : null }
		</div>
	);
}

const useStyle = createUseStyles({
	root: {
		width: '95vw',
		height: '100vh',
		position: 'absolute',
		top: 0,
		left: '2.5vw',
	}
});

export default App;
