import AppRouter from "./app/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRouter />;
      <Toaster position="top-center" />
    </>
  );
}

export default App;
