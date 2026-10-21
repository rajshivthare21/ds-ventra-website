
'use client';

import { useState } from 'react';



export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <section className="pagehero">
        <span className="eyebrow lime">GET IN TOUCH</span>
        <h1>Let’s Discuss Your Requirement</h1>
        <p>
          Tell us what you need help with and we’ll get back to you.
        </p>
      </section>

      <section className="section contactgrid">
        <div>
          <h2>Contact DS VENTRA</h2>

          <div className="contactitem">
            <b>Office</b>
            <p>
              Building No. 445, Ganpati Mal Road,<br />
              Near Ganpati Temple, Kalambhe, Wai<br />
              Satara, Maharashtra – 415514
            </p>
          </div>

          <div className="contactitem">
            <b>Phone</b>
            <p>
              +91 92702 81115
            </p>
          </div>

          <div className="contactitem">
            <b>Email</b>
            <p>dsventra@gmail.com</p>
          </div>
        </div>

        <form
          action="https://formsubmit.co/dsventra@gmail.com"
          method="POST"
          onSubmit={() => setSent(true)}
        >
          <h2>Send an Enquiry</h2>

          <input
            type="hidden"
            name="_subject"
            value="New Enquiry from DS VENTRA Website"
          />

          <input type="hidden" name="_template" value="table" />

          <label>
            Name
            <input
              required
              name="name"
              placeholder="Your name"
            />
          </label>

          <label>
            Phone
            <input
              required
              type="tel"
              name="phone"
              placeholder="Mobile number"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Email address"
            />
          </label>

          <label>
            Requirement
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>Environmental Consultancy</option>
              <option>Environmental Compliance</option>
              <option>MPCB Consent</option>
              <option>CGWA / Ground Water</option>
              <option>STP / ETP / WTP / ZLD</option>
              <option>EIA / EMP / Audit</option>
              <option>Training & Documentation</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Message
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell us briefly about your requirement"
            />
          </label>

          <button className="btn primary" type="submit">
            Send Enquiry →
          </button>

          {sent && (
            <p className="success">
              Submitting your enquiry. Please wait for confirmation.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
