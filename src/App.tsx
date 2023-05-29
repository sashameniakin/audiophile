import { FC } from "react";
import Nav from "./Nav";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  return (
    <>
      <Nav />
      <AppRouter />
    </>
  );
};

export default App;
