import ConetextProvider from "./components/context";
import Routers from "./components/routes";

function App() {
  return (
    <ConetextProvider>
      <Routers />
    </ConetextProvider>
  );
}

export default App;
