import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RegistrationForm from "./register";
import axios from 'axios';
import userEvent from '@testing-library/user-event'

jest.mock('axios');

describe('Registration testing', () => {
  it("renders RegistrationForm and going back to login", async () => {
    const setRegisterMock = jest.fn();

    render(
      <BrowserRouter>
        <RegistrationForm setRegister={setRegisterMock} />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'testpass' } });

    axios.post.mockResolvedValueOnce({ data: { msg: 'Registration successful' } });

    fireEvent.click(screen.getByText('Register'));

    await waitFor(() => {
      expect(screen.getByText('Login')).toBeInTheDocument();
    });


    // Check if the input fields are cleared after registration
    expect(screen.getByLabelText('Username:').value).toBe('');
    expect(screen.getByLabelText('Password:').value).toBe('');
  });

  test('renders username', () => {
    render(
      <BrowserRouter>
      <RegistrationForm/>
      </BrowserRouter>
    );
    const userInput = screen.getByLabelText('Username:');
    expect(userInput).toBeInTheDocument();
  });

  test('typing in username', () => {
    render(
      <BrowserRouter>
      <RegistrationForm/>
      </BrowserRouter>
    );
    const userInput = screen.getByLabelText('Username:');
    userEvent.type(userInput, 'testuser');
    expect(userInput).toHaveValue('testuser');
  });

  

  test('renders password', () => {
    render(
      <BrowserRouter>
      <RegistrationForm/>
      </BrowserRouter>
    );
    const passInput = screen.getByLabelText('Password:');
    expect(passInput).toBeInTheDocument();
  });

  test('typing in password', () => {
    render(
      <BrowserRouter>
      <RegistrationForm/>
      </BrowserRouter>
    );
    const passInput = screen.getByLabelText('Password:');
    userEvent.type(passInput, 'testpass');
    expect(passInput).toHaveValue('testpass');
  });

});

