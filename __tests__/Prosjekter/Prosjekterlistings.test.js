/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProsjekterListings from "../../src/components/Prosjekter/ProsjekterListings.component";

import projects from "../../__mocks__/projects.json";
import categories from "../../__mocks__/categories.json";

describe("ProsjekterListings", () => {
  beforeEach(() => {
    render(<ProsjekterListings projects={projects} categories={categories} />);
  });

  it("ProsjekterListings laster inn og kan vises", () => {
    const prosjekterlistings = screen.getByRole("main", { name: /innhold portefølje/i });
    expect(prosjekterlistings).toBeInTheDocument();
  });

  it("Vi laster inn 5 kategorier i kategorifilter", () => {
    const kategorifilter = screen.getByRole("combobox", { name: /kategorifilter/i });
    expect(kategorifilter.length).toBe(5);
  });

  it("Vi velger Typescript og tester at Typescript er valgt", () => {
    const kategorifilter = screen.getByRole("combobox", { name: /kategorifilter/i });
    const typescript = screen.getByRole("option", { name: "Typescript" });
    userEvent.selectOptions(kategorifilter, typescript);
    expect(typescript.selected).toBe(true);
  });
});
