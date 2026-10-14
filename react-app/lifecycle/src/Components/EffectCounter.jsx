import { useEffect, useState } from "react";

function EffectCounter() {
  const [number, setNumber] = useState(0);
  const numberEffect = () => console.log("Nilai number Sekarang:", number);
  useEffect(numberEffect, [number]);
  function tambah() {
    setNumber((prev) => prev + 1);
  }
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h1 className="text-xl font-bold">useEffect</h1>

      <p className="my-4">Nilai Number: {number}</p>
      <button
        onClick={tambah}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Tambah
      </button>
    </div>
  );
}

export default EffectCounter;
