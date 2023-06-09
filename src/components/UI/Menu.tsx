import { Dispatch, FC, ReactChild, ReactNode, SetStateAction } from "react";

type Props = {
  children: ReactNode | ReactChild;
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
};

const Menu: FC<Props> = ({ children, menu, setMenu }) => {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-bgGray z-40 overflow-y-auto"
      onClick={() => setMenu(false)}
    >
      <div className="bg-pureWhite z-10" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Menu;
