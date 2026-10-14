import { useEffect } from "react";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message_pesan: "",
  });
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("contactMessages");
      const data = saved ? JSON.parse(saved) : [];

      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("contactMessages", JSON.stringify(messages));
  }, [messages]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      nama: form.name,
      email: form.email,
      pesan: form.message_pesan,
    };
    setMessages((prev) => [newMessage, ...prev]);

    setForm({
      name: "",
      email: "",
      message_pesan: "",
    });
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Nama Lengkap"
          value={form.name}
        />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={form.email}
        />
        <textarea
          name="message_pesan"
          onChange={handleChange}
          placeholder="Message"
          value={form.pesan}
        />
        <button type="submit"> Kirim Pesan</button>
      </form>
    </div>
  );
}

export default Contact;
