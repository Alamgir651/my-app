import "./App.css";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container my-3">
        <TestForm heading="Enter the Text to Analyze" />
      </div>
    </>
  );
}

export default App;
