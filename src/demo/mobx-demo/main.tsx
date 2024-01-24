import App from "./App";
import { StoresContext } from "./context";
import stores from "./store";

export default function Main() {
  return (
    <StoresContext.Provider value={{ ...stores }}>
      <App />
    </StoresContext.Provider>
  );
}
