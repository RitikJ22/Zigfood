import Contact from "../Contact";
import {screen,render} from "@testing-library/react";
import "@testing-library/jest-dom";


test("should component is loaded", ()=>{
render(<Contact/>);
 const heading=screen.getByRole("heading");
 expect(heading).toBeInTheDocument();

}); 

test("should button is loaded", ()=>{
    render(<Contact/>);
     const button=screen.getByRole("button");
     expect(button).toBeInTheDocument();
    
    }); 

    test("should laod 2 input box ", ()=>{
        render(<Contact/>);
         const input=screen.getAllByRole("textbox"); 
         expect(input.length).toBe(2);
        
        }); 