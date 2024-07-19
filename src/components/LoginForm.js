import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import loginImage from '../assets/login-image.jpg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(1, 1, 0, 0.5);
  
`;

const FormContainer = styled.div`
  width: 400px; /* Increased width for larger inputs */
  margin-right: 40px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  max-width: 500px;
  height: 500px;
  border-radius: 20px;
`;

const Title = styled.h1`
  margin-bottom: 90px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b4;
  }
`;

const Error = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});

const LoginForm = () => (
  <Container>
    <LoginFormContainer>
      <FormContainer>
        <Title>Skillnaav Login</Title>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="form-control" // Optional: Add Bootstrap class for styling
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }} // Custom styles for input
              />
              <ErrorMessage name="email" component={Error} />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="form-control" // Optional: Add Bootstrap class for styling
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }} // Custom styles for input
              />
              <ErrorMessage name="password" component={Error} />
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
      <ImageContainer>
        <StyledImage src={loginImage} alt="Login Image" />
      </ImageContainer>
    </LoginFormContainer>
  </Container>
);

export default LoginForm;
