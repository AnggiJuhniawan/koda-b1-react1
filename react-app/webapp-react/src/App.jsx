import { useState } from "react";
import Header from "./Component/Header";
import ProductCard from "./Component/ProductCard";
import products from "./data/product";

// import Sapa from "";

// import Sapa from "./Component/Sapa";

// const nameTalent = [
//   "Afif",
//   "Alvin",
//   "Rizal",
//   "Zakky",
//   "Bando",
//   "Chandra",
//   "Rifai",
// ];
// const Sapa = (props) => {
//   return props.a + props.b;
// };
// const Sapa = ({ a, b }) => {
//   return a + b;
// };
// function Nama({ name }) {
//   return (
//     <div>
//       <p className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
//         Hello,
//         <span className="font-bold text-green-600">{name}</span>
//       </p>
//     </div>
//   );
// }

const App = () => {
  // const [count, setCount] = useState(0);

  // function tambah() {
  //   if (count > 9) {
  //     alert("Harus kecil dari 10");
  //   } else {
  //     setCount(count + 1);
  //   }
  // }
  // function kurang() {
  //   setCount(count - 1);
  // }
  const [favoritIds, setFavoriteIds] = useState([]);
  function toggleFavorite(productId) {
    setFavoriteIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  }
  return (
    <div>
      <Header favoriteCount={favoritIds.length} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">
          Daftar Product
        </h2>

        <div>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favoritIds.includes(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </main>
      {/* {nameTalent.map((named) => (
        <Nama key={named} name={named} />
      ))}
      <button className="p-2 shadow bg-amber-500 border-2 m-5">TEST</button>
      <button className="p-2 shadow bg-green-500 border-2">TUST</button> */}
      {/* <h1>State</h1>
      <p>Jumlah: {count}</p>

      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang} disabled={count === 0}>
        Kurang
      </button> */}
    </div>
  );
};
export default App;
