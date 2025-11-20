import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-light">
      <div className="container">
        <div className="section-card">
          <h2>About Me</h2>

          <p>
            I am a Frontend Developer and a software development student at NavGurukul. I enjoy creating clean, responsive,
            and user-friendly websites. I focus on writing readable code, accessibility and performance.
          </p>

          <div className="row mt-3">
            <div className="col-md-6">
              <h5>Education</h5>
              <ul>
                <li><strong>Software Development</strong> — NavGurukul, Jaspur (Apr 2024 – Present)</li>
                <li><strong>PGDCA</strong> — Dr. C.V. Raman University (Aug 2023 – Apr 2024)</li>
                <li><strong>12th</strong> — Govt. H.S. School, Chhuri (2020)</li>
                <li><strong>10th</strong> — Govt. H.S. School, Chhuri (2018)</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h5>Experience</h5>
              <ul>
                <li><strong>Machine Operator & Quality Checker</strong> — Takahata Precision India Pvt. Ltd.</li>
                <li><strong>Class Monitor</strong> — Saraswati Shishu Mandir</li>
              </ul>
            </div>
          </div>

          <div className="mt-3">
            <h5>Short Bio</h5>
            <p>
              A motivated programming student building a strong foundation in web development. I practice by building small
              projects and learning modern tools like React, Bootstrap and Tailwind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
