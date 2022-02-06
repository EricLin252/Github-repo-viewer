import {Modal, Badge, Button} from "react-bootstrap";

function RepoPage(props: {
	show: boolean,
	fullname: string | undefined,
	description:  string | undefined,
	starcount:  number | undefined,
	url: string | undefined,
	close: () => void
}){
	return(
		<Modal show={props.show} fullscreen={true} onHide={props.close}>
			<Modal.Header closeButton className="d-flex justify-content-between align-items-middle">
				<Modal.Title className="ms-2 me-auto fw-bold">
					{props.fullname + " "}
					<Badge bg="primary" pill>⭐{props.starcount}</Badge>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{props.description}
				<br/>
				<Button variant="primary" href={props.url} target="_blank">Github</Button>
			</Modal.Body>
		</Modal>
	);
}

export default RepoPage;