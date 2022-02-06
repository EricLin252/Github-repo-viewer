import {useState} from "react";
import {Container, Navbar, Form, FormControl, Button} from "react-bootstrap";
import {createUseStyles} from "react-jss";

function RepoNav(props: {
	search: (input: string) => void
}){
	const classes = createUseStyles({
		brand: {
			"@media screen and (max-width: 450px)": {
				display: "block!important"
			}
		}
	})();

	const [username, setUsername] = useState("");

	const submit = (e: React.FormEvent) => {
		props.search(username);
		e.preventDefault();
	  	e.stopPropagation();
	}

	return(
		<Navbar bg="dark" variant="dark" onSubmit={submit} sticky="top">
			<Container className={classes.brand}>
				<Navbar.Brand>Github RepoViewer</Navbar.Brand>
				<Form className="d-flex">
					<FormControl
						type="search"
						placeholder="Search username"
						className="me-2"
						aria-label="Search"
						value={username}
						onChange={e => setUsername(e.target.value.replace(/\s*/g, ""))}
					/>
					<Button variant="outline-success" type="submit">Search</Button>
				</Form>
			</Container>
		</Navbar>
	);
}

export default RepoNav;