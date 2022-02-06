import {ListGroup} from "react-bootstrap";
import RepoRow from "./RepoRow";
import {repoL} from '../typedefine';

function Repolist(props: {
	repolist: repoL,
	openRepo: (repo: string) => void
}){
	const generateRepo = () => {
		const output: (JSX.Element | null)[] = [];
		props.repolist.forEach(el => {
			output.push(
				<RepoRow
					reponame={el.reponame}
					starcount={el.starcount}
					open={() => props.openRepo(el.reponame)}
				/>
			);
		});
		return output;
	}

	return(
		<ListGroup>
			{generateRepo()}
		</ListGroup>
	);
}

export default Repolist;