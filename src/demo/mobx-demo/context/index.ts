import { createContext } from "react";
import stores from "../store";

export const StoresContext = createContext({
  ...stores,
});
