import { createContext, useContext } from "react";

type ModalContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({
  open: false,
  setOpen: () => {},
});

export const useModal = () => useContext(ModalContext);