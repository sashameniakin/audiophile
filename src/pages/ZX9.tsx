import { FC } from "react";
import Categories from "../components/Categories";
import Gear from "../components/Gear";

const ZX9: FC = () => {
  return (
    <main className="w-[80%] mx-auto mt-[160px]">
      <Categories />
      <Gear />
    </main>
  );
};

export default ZX9;
