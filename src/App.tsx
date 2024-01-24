import "./App.css";
import ReduxDemo from "./demo/redux-toolkit-demo/main";
import ZustandDemo from "./demo/zustand-demo/main";
import JotaiDemo from "./demo/jotai-demo/main";
import ValtioDemo from "./demo/valtio-demo/main";
import MobxDemo from "./demo/mobx-demo/main";

function App() {
  return (
    <>
      <h1>React State Managet</h1>
      <ReduxDemo />
      <ZustandDemo />
      <JotaiDemo />
      <ValtioDemo />
      <MobxDemo />
    </>
  );
}

export default App;
