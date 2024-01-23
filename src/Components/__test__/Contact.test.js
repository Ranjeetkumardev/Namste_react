import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
 test("Should load contact us Components ", () => {
   render(<Contact />);
   const heading = screen.getByRole("heading");
   //Asertion
   expect(heading).toBeInTheDocument();
 });

 test("Should load button insde the contact us Components", () => {
   render(<Contact />);
   //const button = screen.getByRole("button");

   // Other ways
   const button = screen.getByText("Submit");
   //Asertion
   expect(button).toBeInTheDocument();
 });

 it("Should load input name insde the contact us Components", () => {
   render(<Contact />);
   const InputName = screen.getByPlaceholderText("Name");
   //Asertion
   expect(InputName).toBeInTheDocument();
 });

 it("Should load 2 inputBox insde the contact us Components", () => {
   render(<Contact />);
   //Quaring  like thi it return jsx ele/react ele/object/react fiber node / react virtual dom object
   const InputBox = screen.getAllByRole("textbox");

   console.log(InputBox.length);
   //Asertion
   expect(InputBox.length).toBe(2);
   //expect(InputBox.length).not.toBe(3);
 }); 
})


