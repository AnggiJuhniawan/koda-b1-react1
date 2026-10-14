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
    <section>
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

        {/* Daftar Pesan */}
        <div>
          <h2>Daftar Pesan ({messages.length})</h2>

          {messages.length === 0 ? (
            <p>Belum ada Pesan</p>
          ) : (
            <div className="space-y-4">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <h3 className="font-semibold">item.name</h3>
                  <p className="text-sm text-slate-500">{item.email}</p>
                  <p className="mt-2 whitespace-pre-wrap wrap-break-word text-slate-700">
                    {item.message_pesan}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
