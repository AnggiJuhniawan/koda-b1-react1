import { Route, Routes } from "react-router";

function Home() {
  return <h1>Halaman Home</h1>;
}
function About() {
  return <h1>Halaman About</h1>;
}
function Contact() {
  return <h1>Halaman Contact</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
