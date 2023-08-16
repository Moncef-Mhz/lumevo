import { Navbar } from "./components";
import { CollectionPage, Hero, Testimoniel } from "./page";

function App() {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <Hero />
      <CollectionPage />
      <Testimoniel />
    </div>
  );
}

export default App;
