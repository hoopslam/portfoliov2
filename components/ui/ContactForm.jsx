import styled from "styled-components";
import { useState } from "react";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Sending");
		let data = {
			name,
			email,
			message,
		};

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response.accepted) {
				alert("Message Sent!");
				console.log("sent");
				setName("");
				setEmail("");
				setMessage("");
			} 
		} catch (err) {
			alert("There was an error while trying to send your message")
			console.error(err);
		}
	};

	return (
		<ContactContainer id='contact'>
			<Container>
				<div className='text'>
					<h1>Drop me a Line!</h1>
					<p>
						Want to get a hold of me? Send me a message and I'll get back to you
						posthaste!
					</p>
				</div>

				<form className='formContainer'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						onChange={(e) => {
							setName(e.target.value);
						}}
						name='name'
						required
					/>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						name='email'
						required
					/>
					<label htmlFor='message'>Message</label>
					<textarea
						required
						name='message'
						cols='30'
						rows='8'
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>
					<button
						className='button'
						type='submit'
						onClick={(e) => {
							handleSubmit(e);
						}}>
						Send
					</button>
				</form>
			</Container>
		</ContactContainer>
	);
};

export default ContactForm;

const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto;
	width: 100%;
	max-width: 1100px;
	position: relative;
	font-size: 1rem;

	label {
		color: ${({ theme }) => theme.primary};
	}

	input {
		background-color: whitesmoke;
		outline: none;
		border: none;
		height: 2rem;
		border-radius: 8px;
	}
	textarea {
		background-color: whitesmoke;
		border: none;
	}
	input:focus {
		outline: none;
	}

	textarea:focus {
		outline: none;
	}
	h1 {
		color: ${({ theme }) => theme.primary};
		margin: 10px;
	}
	.text {
		text-align: center;
	}
	.formContainer {
		margin: 20px;
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
	}

	.button {
		margin-top: 20px;
		border-radius: 3px;
		height: 2rem;
		width: 100%;
		text-align: center;
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.background};
		border: none;
	}

	.button:hover {
		background-color: ${({ theme }) =>
			theme.light === "#4f5b62" ? theme.primary : theme.light};
		cursor: pointer;
	}
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
	padding: 30px;
`;
