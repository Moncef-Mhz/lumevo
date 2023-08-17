import { Navbar } from "./components";
import { BestSeller, CollectionPage, Hero, Testimoniel } from "./page";

function App() {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <Hero />
      <CollectionPage />
      <Testimoniel />
      <BestSeller />
    </div>
  );
}

export default App;
