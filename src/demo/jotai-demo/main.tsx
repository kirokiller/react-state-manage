import { Provider } from "jotai";
import App from "./App";

export default function Main() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}
