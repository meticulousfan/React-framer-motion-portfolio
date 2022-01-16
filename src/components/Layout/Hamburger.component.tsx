import type { NextComponentType } from "next";

const Hamburger: NextComponentType = () => {
  return <div data-testid="hamburger" className="z-50 md:hidden lg:hidden xl:hidden">Hamburger</div>;
};

export default Hamburger;
