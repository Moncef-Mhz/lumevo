import cart from "./cart.svg";
import search from "./search.svg";

const navlinks = ["Men", "Women", "Kids", "Collection", "trends"];

const CollectionData = [
  {
    id: 1,
    title: "sweater",
    url: "https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    title: "hoodies",
    url: "https://images.unsplash.com/photo-1511401677968-feade623d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    title: "t-shirt",
    url: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
];
const CardData = [
  {
    id: 1,
    title: "pastel long sleeve",
    price: 240,
    url: "https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
  },
  {
    id: 2,
    title: "pastel long sleeve",
    price: 200,
    url: "https://images.unsplash.com/photo-1608748010899-18f300247112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
  },
];

export { cart, search, navlinks, CollectionData, CardData };
