import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Send Email
  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, {
        publicKey: "YOUR_PUBLIC_KEY",
      });

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Heading */}

        <div className="contact-heading">
          <span className="contact-eyebrow">✨ LET'S CONNECT</span>

          <h2>
            Contact <span>Me</span>
          </h2>

          <p>
            Have a question, opportunity, or project in mind? Feel free to send
            me a message. I'd love to hear from you!
          </p>
        </div>

        {/* Contact Content */}

        <div className="contact-content">
          {/* Left Side - Contact Information */}

          <div className="contact-info">
            {/* Email */}

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email Me</h3>

                <a href="mailto:mdf58535@gmail.com">mdf58535@gmail.com</a>
              </div>
            </div>

            {/* Location */}

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>

                <p>Chattogram, Bangladesh</p>
              </div>
            </div>

            {/* Contact Number */}

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaPhone />
              </div>

              <div>
                <h3>Contact Number</h3>

                <a href="tel:+8801753705253">01753705253</a>
              </div>
            </div>

            {/* Social Media */}

            <div className="contact-socials">
              <h3>Find Me Online</h3>

              <div className="contact-social-links">
                <a
                  href="https://github.com/YOUR_GITHUB_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>

            <div className="contact-input-row">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Success / Error Message */}

            {status.message && (
              <p className={`contact-status ${status.type}`}>
                {status.message}
              </p>
            )}

            {/* Submit Button */}

            <button type="submit" className="contact-submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}

              <FaPaperPlane />
            </button>
          </form>
        </div>

        {/* Footer Text */}

        <div className="contact-footer">
          <span>✦</span>
          Thank you for visiting my Panda World!
          <span>✦</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
