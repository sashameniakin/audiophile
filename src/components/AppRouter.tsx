import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Earphones from "../pages/Earphones";
import XX99MarkI from "../pages/XX99MarkI";
import XX99MarkII from "../pages/XX99MarkII";
import XX59 from "../pages/XX59";
import ZX7 from "../pages/ZX7";
import ZX9 from "../pages/ZX9";
import YX1 from "../pages/YX1";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/earphones" element={<Earphones />} />
      <Route path="/headphones/xx99-markI" element={<XX99MarkI />} />
      <Route path="/headphones/xx99-markII" element={<XX99MarkII />} />
      <Route path="/headphones/xx59" element={<XX59 />} />
      <Route path="/speakers/zx7" element={<ZX7 />} />
      <Route path="/speakers/zx9" element={<ZX9 />} />
      <Route path="/earphones/yx1" element={<YX1 />} />
    </Routes>
  );
};

export default AppRouter;
