import { FC } from "react";
import Nav from "./components/UI/Nav";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/Footer";

const App: FC = () => {
  return (
    <>
      <Nav />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
