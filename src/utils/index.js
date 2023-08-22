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
const ProductData = [
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
  {
    id: 3,
    title: "pastel long sleeve",
    price: 240,
    url: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
  },
  {
    id: 4,
    title: "pastel long sleeve",
    price: 200,
    url: "https://plus.unsplash.com/premium_photo-1668485968648-f29fe5157463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 5,
    title: "pastel long sleeve",
    price: 240,
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 6,
    title: "pastel long sleeve",
    price: 200,
    url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 7,
    title: "pastel long sleeve",
    price: 240,
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80",
  },
  {
    id: 8,
    title: "pastel long sleeve",
    price: 200,
    url: "https://images.unsplash.com/photo-1525450754258-0f4cbd02718d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
];
const filter = [
  { id: 1, title: "hot" },
  { id: 2, title: "on sale" },
  { id: 3, title: "trending now" },
  { id: 4, title: "new arrival" },
];
const testimoniels = [
  {
    id: 1,
    title:
      "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ",
    author: "Anisa Zahra",
    role: "Founder milenial",
  },
  {
    id: 2,
    title:
      "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ",
    author: "Anisa Zahra",
    role: "Founder milenial",
  },
  {
    id: 3,
    title:
      "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ",
    author: "Anisa Zahra",
    role: "Founder milenial",
  },
  {
    id: 4,
    title:
      "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ",
    author: "Anisa Zahra",
    role: "Founder milenial",
  },
];

const footerMap = ["men", "women", "kids", "trends", "contact us", "faq"];

export {
  cart,
  search,
  footerMap,
  testimoniels,
  navlinks,
  filter,
  ProductData,
  CollectionData,
  CardData,
};
