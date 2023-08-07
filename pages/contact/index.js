import { BsArrowRight } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const serviceId = "service_edhdjll";
  const templateId = "template_bdr5hvl";
  const apiKey = "9qL5qhRzoxFwPA7Rj";

  const formRef = useRef();
  const [form, setForm] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const HandleonChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service Id:", serviceId);
    console.log("Template Id:", templateId);
    console.log("Api Key:", apiKey);
    emailjs
      .sendForm(serviceId, templateId, formRef.current, apiKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setForm({
          username: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-ledt flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Lets <span className="text-accent">connect.</span>
          </h2>
          <form
            ref={formRef}
            className="flex-1 flex flex-col gap-6 w-fulll mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-x-6 w-full">
              <input
                id="name"
                type="text"
                placeholder="name"
                className="input"
                value={form.username}
                name="username"
                onChange={HandleonChange}
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                value={form.email}
                onChange={HandleonChange}
                className="input"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              value={form.subject}
              onChange={HandleonChange}
              className="input"
            />
            <textarea
              placeholder="message"
              name="message"
              value={form.message}
              onChange={HandleonChange}
              className="textarea"
            ></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              type="submit"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                lets talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
