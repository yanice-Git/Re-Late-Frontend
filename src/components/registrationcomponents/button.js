import styled from 'styled-components';

const LoginButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = () => {
  return (
    <>
      <LoginButton>Login Page</LoginButton>
    </>
  );
};

export default Button;