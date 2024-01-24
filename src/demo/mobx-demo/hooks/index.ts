import { useContext } from "react";
import { StoresContext } from "../context";

export const useStores = () => useContext(StoresContext);
