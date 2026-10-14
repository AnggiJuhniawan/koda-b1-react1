import { useEffect } from "react";
import { useState } from "react";

function UserPreview({ userId }) {
  const [name, setName] = useState("Memuat...");
  const [detikAktif, setDetikAktif] = useState(0);

  useEffect(() => {
    console.log("Komponen baru saja muncul di layar (Mounted)");
    const timer = setInterval(() => {
      setDetikAktif((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Komponen dihapus (Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log(`Mengambil data baru karena userId berubah menjadi: ${userId}`);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, [userId]);

  return (
    <div>
      <h2>Hallo, {name}</h2>
      <p>Anda telah membuka halaman ini selama {detikAktif} detik.</p>
    </div>
  );
}

export default UserPreview;
