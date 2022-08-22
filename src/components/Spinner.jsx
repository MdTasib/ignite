import styled, { keyframes } from "styled-components";

const Spinner = () => {
	return (
		<SpinnerDiv>
			<SpinnerIcon />
		</SpinnerDiv>
	);
};

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SpinnerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;
const SpinnerIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.2em solid rgba(0, 0, 0, 0.1);
	border-top: 0.2em solid #767676;
	border-radius: 50%;
	width: 2.28571429rem;
	height: 2.28571429rem;
	animation: ${spin} 0.6s linear infinite;
`;

export default Spinner;
