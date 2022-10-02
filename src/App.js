import ProductComponent from "./Component/ProductComponent";
import "./App.css";

function App() {
  let details = [
    {
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    {
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
    },
    {
      img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 55.99,
      title: "Mens Cotton Jacket",
    },
    {
      img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      price: 15.99,
      title: "Mens Casual Slim Fit",
    },
    {
      img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      price: 695,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    },
    {
      img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      price: 168,
      title: "Solid Gold Petite Micropave ",
    },
    {
      img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      price: 9.99,
      title: "White Gold Plated Princess",
    },
    {
      img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      price: 10.99,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    },
    {
      img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      price: 64,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    },
    {
      img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      price: 109,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    },
    {
      img: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      price: 109,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    },
    {
      img: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      price: 114,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    },
    {
      img: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      price: 599,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    },
    {
      img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      price: 999.99,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    },
    {
      img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      price: 56.99,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    },
    {
      img: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      price: 29.95,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    },
    {
      img: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      price: 39.99,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    },
    {
      img: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      price: 9.85,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    },
    {
      img: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      price: 7.95,
      title: "Opna Women's Short Sleeve Moisture",
    },
    {
      img: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      price: 12.99,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
    },
  ];
  let rows = [];
  for (let i = 0; i < details.length; i++) {
    rows.push(
      <ProductComponent
        titles={details[i].title}
        prices={details[i].price}
        imgs={details[i].img}
      ></ProductComponent>
    );
  }

  return <div className="father">{rows}</div>;
}

export default App;
