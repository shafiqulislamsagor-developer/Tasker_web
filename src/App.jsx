import BeginHero from "./components/BeginHero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskBoard from "./components/task/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex items-center flex-col justify-center">
        <BeginHero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
