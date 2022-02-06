import {useState} from "react";
import {Container, Navbar, Form, FormControl, Button} from "react-bootstrap";

function RepoNav(props: {
    search: (input: string) => void
}){
    const [username, setUsername] = useState("");

    const submit = (e: React.FormEvent) => {
        props.search(username);
        e.preventDefault();
      	e.stopPropagation();
    }

    return(
        <Navbar bg="dark" variant="dark" onSubmit={submit} sticky="top">
			<Container>
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