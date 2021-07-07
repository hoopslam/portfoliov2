import styled from "styled-components";
import emailjs from "emailjs-com";

const ContactForm = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm("service_f4t6rk9", "template_hx5g5sc", e.target, "user_XtYyMqV78dTetP6lLHnBA")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		alert("Thanks! I'll get back to you as soon as possible!");
	}

	return (
		<ContactContainer>
			<Container>
				<div className="text">
					<h1>Drop me a Line!</h1>
					<p>
						Want to get a hold of me? Send me a message and I'll get back to you
						posthaste!
					</p>
				</div>

				<form className="formContainer" onSubmit={sendEmail}>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' required />
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' required />
					<label htmlFor='subject'>Subject</label>
					<input type='text' name='subject' required />
					<label htmlFor='message'>Message</label>
					<textarea required name='message' cols='30' rows='8' />
					<button className="button" type='submit'>
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
		color: ${({theme}) => theme.primary};
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
		background-color: ${({theme}) => theme.primary};
		color: ${({theme}) => theme.background};
		border: none;
	}

	.button:hover {
		background-color: ${({theme}) => theme.light};
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
