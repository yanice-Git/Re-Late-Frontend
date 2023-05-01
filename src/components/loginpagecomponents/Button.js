import styled from 'styled-components';

const RegistrationButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = () => {
  return (
    <>
      <RegistrationButton>Sign-up Page</RegistrationButton>
    </>
  );
};

export default Button;