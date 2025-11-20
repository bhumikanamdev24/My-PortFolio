import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nContact email: ${form.email}`);
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-card">
          <h2>Contact</h2>
          <p>Feel free to contact me — I’d love to hear about opportunities.</p>

          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="5" value={form.message} onChange={handleChange} required />
                </div>

                <button className="btn btn-primary" type="submit">Send Message</button>
              </form>
            </div>

            <div className="col-md-6">
              <h5>Other ways to reach me</h5>
              <p>Email: <a href="mailto:bhumikanamdev24@navgurukul.org">bhumikanamdev24@navgurukul.org</a></p>
              <p>Phone: <a href="tel:+919617491718">+91-9617491718</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">your-linkedin</a></p>
              <p>GitHub: <a href="https://github.com/" target="_blank" rel="noreferrer">your-github</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
