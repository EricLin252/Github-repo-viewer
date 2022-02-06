import Repolist from './component/Repolist';
import RepoPage from './component/RepoPage';
import RepoNav from './component/RepoNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState, useRef} from 'react';
import datafetch from './datafetch';
import {repo, repoL, loadingState} from './typedefine';
import {createUseStyles} from 'react-jss';
import {Spinner} from 'react-bootstrap';

function App(){
	const [username, setUsername] = useState("");
	const [repolist, setRepolist] = useState<repoL>([]);
	const [loading, setLoading] = useState(loadingState.none);
	const [page, setPage] = useState(1);
	const [repo, setRepo] = useState<repo>();
	const myRef = useRef<HTMLDivElement>(null);

	const classes = createUseStyles({
		root: {
			width: "100%",
			height: "100%",
			overflowY: "scroll"
		},
		blocker: {
			display: (loading: loadingState) => loading === loadingState.none? "none" : "block",
			position: "absolute",
			width: "100%",
			height: "100%",
			top: "0%",
			left: "0%",
			backgroundColor: "rgba(0, 0, 0, 0.4)",
			zIndex: 1055
		},
		spinner: {
			position: "absolute",
			bottom: "1%",
			left: "50%",
			transform: "translate(-50%, 0%)",
			"& *": {
				verticalAlign: "middle"
			}
		}
	})(loading);

	useEffect(() => {
		if(loading === loadingState.none) return;
		if(loading === loadingState.append && page === -1){
			setLoading(loadingState.none);
			return;
		}
		
		datafetch(username, loading === loadingState.append? page : 1)
		.then(result => {
			console.log(result);
			const data: repoL = [];
			(result as Array<any>).forEach(el => {
				data.push({
					reponame: el.name? el.name : "",
					starcount: el.stargazers_count? el.stargazers_count : 0
				});
			});
			setRepolist(prev => {
				if(loading === loadingState.append) return prev.concat(data);
				else return data;
			});
			setLoading(loadingState.none);
			if(loading === loadingState.new) setPage(2);
			else if(data.length !== 10) setPage(-1);
			else setPage(prev => prev+1);
		})
		.catch(err => window.alert(err));
	}, [loading, page, username]);

	const openRepo = (reponame: string) => {
		datafetch(username, 0, reponame)
		.then(result => {
			console.log(result);
			const tmp: any = result;
			setRepo({
				fullname: tmp.full_name? tmp.full_name : "",
				description: tmp.description? tmp.description : "",
				starcount: tmp.stargazers_count? tmp.stargazers_count : 0,
				url: tmp.clone_url? tmp.clone_url : ""
			});
		})
		.catch(err => window.alert(err));
	}

	const search = (input: string) => {
		myRef.current?.scrollTo(0, 0);
		setUsername(input);
		setLoading(loadingState.new);
	}

	const checkScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const el = e.currentTarget;
		const scrollTop = el.scrollTop;
		const windowHeight = el.clientHeight;
		const scrollHeight = el.scrollHeight;

		if(scrollHeight - (windowHeight + scrollTop) < 1 && page !== -1) setLoading(loadingState.append);
	}

	return(<>
		<div className={classes.root} onWheel={checkScroll} onTouchMove={checkScroll} ref={myRef}>
			<RepoNav search={search}/>
			<Repolist repolist={repolist} openRepo={openRepo}/>
		</div>
		<RepoPage
			show={repo !== undefined}
			fullname={repo?.fullname}
			description={repo?.description}
			starcount={repo?.starcount}
			url={repo?.url}
			close={() => setRepo(undefined)}
		/>
		<div className={classes.blocker}>
			<div className={classes.spinner}>
				<Spinner animation="border"/>
				<span> Loading...</span>
			</div>
		</div>
	</>);
}

export default App;
