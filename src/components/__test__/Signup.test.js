import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Signup, { validateEmail, validateName, validatePassword } from "../../Pages/Signup";

describe("Test the Signup Component", () => {
    
    test("render the Signup form with 2 buttons",async () => {
        render(
            <BrowserRouter>
                <Signup/>
            </BrowserRouter>
        );
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    })

    test("should pass on email validation", () => {
        const testEmail = "aniket@gmail.com"
        expect(validateEmail(testEmail)).toBe(true);
    })
    
    test("should fail on password validation", () => {
        const testPassword = "Aniket"
        expect(validatePassword(testPassword)).not.toBe(true);
    })

    test("should pass on Name validation", () => {
        const testName = "Aniket"
        expect(validateName(testName)).toBe(true);
    })
    
})