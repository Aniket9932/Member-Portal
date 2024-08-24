import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Login, { validateEmail } from "../../Pages/Login"


describe("Test the Login Component", () => {
    
    test("render the login form with 2 button", async () => {
        render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
        );
        const buttonList = await screen.findAllByRole("button");
        // console.log(buttonList);
        expect(buttonList).toHaveLength(2);
    })

    test("should be failed on email validation", () => {
        const testEmail = "aniket.com"
        expect(validateEmail(testEmail)).not.toBe(true);
    })

    test("email input field should accept email", () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        const email = screen.getByPlaceholderText("Username");
        userEvent.type(email, "aniket");
        expect(email.value).not.toMatch("aniket@gmail.com")
    })

    // test("password input should be type password", () => {
    //     render(
    //         <BrowserRouter>
    //             <Login />
    //         </BrowserRouter>
    //     )
    //     const password = screen.getByPlaceholderText("Password");
    //     expect(password.value).toHaveAttribute("type", "password");
    // })

})