/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen } from "@testing-library/react";
 import Home from "../src/pages/index";
 
 describe("Home", () => {
   it("Welcome to next eksisterer ikke", () => {
     render(<Home />);
     const welcometoNext = screen.queryByText("heading", {
       name: /welcome to next/i,
     });
  
     expect(welcometoNext).not.toBeInTheDocument();
   });
 
   it("Om Meg eksisterer", () => {
     render(<Home />);
     const velkommen = screen.getByRole("heading", {
       name: /Om Meg/i,
     });
     expect(velkommen).toBeInTheDocument();
   });
 });
 