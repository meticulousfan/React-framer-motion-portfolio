import { NextPage } from "next";
import { SetStateAction, useState } from "react";

import ProsjektIndividualProjects from "./ProsjektIndividualProjects.component";

interface IProject {
  projects: IProjectInterface;
  categories: Array<string>;
}

type TStringOrEmpty = string | null | undefined;
interface IProjectInterface {
  _id: string;
  id: null | undefined | number;
  name: TStringOrEmpty;
  description: TStringOrEmpty;
  subdescription: TStringOrEmpty;
  urlgithub: TStringOrEmpty;
  urlwww: TStringOrEmpty;
  //handleFilterChange: void;
}

//const ProsjekterListings: NextPage<IProject> = ({ projects, categories }) => {
const ProsjekterListings: any = ({ projects, categories }: any) => {
  const [categoryFilter, setCategoryFilter] = useState();

  const handleFilterChange = (e: any) => {
    /**
     * Eslint seems to complain if I replace this with a ternary
     */
    if (e.target.value) {
      setCategoryFilter(e.target.value);
    } /*else {
        setCategoryFilter()
      }*/
  };

  return (
    <main aria-label="Innhold portefølje" className="mt-32 bg-graybg">
      <div className="container mx-auto rounded">
        <div className="px-4 mx-auto mt-4 lg:px-0 xl:px-0 md:px-0">
          <span className="flex justify-end mb-4">
            <form>
              <label
                className="p-2 mr-4 text-lg"
                aria-label="kategorifilter"
                htmlFor="kategorifilter">
                Filtrer kategori:
              </label>
              <select
                id="kategorifilter"
                name="kategorifilter"
                onChange={handleFilterChange}
                className="w-40 p-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                <option label="" value="">
                  Ingen filtrering
                </option>
                {categories &&
                  categories.map((category: any, index: any) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </form>
          </span>

          <div
            id="prosjektgrid"
            className="grid gap-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <ProsjektIndividualProjects filter={categoryFilter} allProjects={projects} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProsjekterListings;
