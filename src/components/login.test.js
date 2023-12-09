import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Login from "./login";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock("axios");


describe('Login testing', () => {
  test("clicking on the Register link navigates to Register", () => {
    render(
      <BrowserRouter>
        <Login />
        const linkElement = screen.getByText(/RegistrationForm/i);
        fireEvent.click(linkElement);
        const contactElement = screen.getByText(/RegistrationForm/i);
        expect(contactElement).toBeInTheDocument();
      </BrowserRouter>
    );
  
  });

  test('renders username', () => {
    render(
      <BrowserRouter>
      <Login/>
      </BrowserRouter>
    );
    const userInput = screen.getByLabelText('Username:');
    expect(userInput).toBeInTheDocument();
  });

  test('typing in username', () => {
    render(
      <BrowserRouter>
      <Login/>
      </BrowserRouter>
    );
    const userInput = screen.getByLabelText('Username:');
    userEvent.type(userInput, 'testuser');
    expect(userInput).toHaveValue('testuser');
  });

  

  test('renders password', () => {
    render(
      <BrowserRouter>
      <Login/>
      </BrowserRouter>
    );
    const passInput = screen.getByLabelText('Password:');
    expect(passInput).toBeInTheDocument();
  });

  test('typing in password', () => {
    render(
      <BrowserRouter>
      <Login/>
      </BrowserRouter>
    );
    const passInput = screen.getByLabelText('Password:');
    userEvent.type(passInput, 'testpass');
    expect(passInput).toHaveValue('testpass');
  });



  test('user input and for submissions', async () => {
    render(
    <BrowserRouter>
    <Login/>
    </BrowserRouter>
    );

    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);

    userEvent.type(username, 'usertest');
    userEvent.type(password, 'passtest');

    axios.post.mockResolvedValueOnce({ data: { code : 0}});

    fireEvent.click(screen.getByRole('button', { name: /log in/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost/comp333hw3/index.php/user/login',
        {username: 'usertest', password: 'passtest'}
      );
    });
    expect(window.location.pathname).toBe('/mainpage');
  });

  test('incorrect value', async() => {
    axios.post.mockRejectedValueOnce({response: {data: {code: 1}}});

    render(
      <BrowserRouter>
      <Login/>
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText('Username:'), {target: {value: 'incorrectUsername'}});
    fireEvent.change(screen.getByLabelText('Password:'), {target: {value : 'incorrectPassword'}});

    fireEvent.click(screen.getByText('Log In'));


    await waitFor(() => {
      const errorMessage = screen.getByText('Login Failed', {exact: false, selector: '.errmsg'});
      expect(errorMessage).toBeInTheDocument();
    });
  });



});

