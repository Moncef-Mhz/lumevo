import { Navbar, Footer } from "./components";
import {
  BestSeller,
  CollectionPage,
  // Deal,
  Hero,
  People,
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
      {/* <Deal /> */}
      <People />
      <Footer />
    </div>
  );
}

export default App;
