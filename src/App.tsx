import { FC } from "react";
import Nav from "./components/Nav";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

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
