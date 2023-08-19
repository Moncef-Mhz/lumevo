import { Navbar } from "./components";
import {
  BestSeller,
  CollectionPage,
  Deal,
  Hero,
  Product,
  Testimoniel,
} from "./page";

function App() {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <Hero />
      <CollectionPage />
      <Testimoniel />
      <BestSeller />
      <Product />
      <Deal />
    </div>
  );
}

export default App;
