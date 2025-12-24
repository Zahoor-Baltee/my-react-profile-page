import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, Phone, MapPin, MessageSquare } from "lucide-react";
import constantData from "@/constant/constant";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const contactInfos = [
    { icon: Mail, label: "Email", value: constantData.personalInfo.email, href: `mailto:${constantData.personalInfo.email}` },
    { icon: Phone, label: "Phone", value: constantData.personalInfo.phone, href: `tel:${constantData.personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: constantData.personalInfo.location, href: "#" }
  ];
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_0zrjpds",
        "template_2mg39at",
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        "kCmRNovEbyNUXu2ql"
      );

      alert("Message sent successfully 🚀");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Get In Touch</h2>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid gap-6">
              {contactInfos.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] bg-blue-600 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <MessageSquare className="h-32 w-32" />
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">Let's work together!</h4>
              <p className="text-blue-100 mb-6 relative z-10 font-medium">I'm currently available for freelance work and full-time positions.</p>
              <div className="flex gap-4 relative z-10">
                {constantData.socialLinks.map((social, i) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </a>
                  )
                })}
              </div>

            </div>
          </div>

          {/* Contact Form */}
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full h-14 px-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full h-14 px-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white resize-none"
                  ></textarea>
                </div>

                <Button className="w-full h-14 rounded-2xl text-lg gap-2" disabled={loading}>
                  <Send className="h-5 w-5" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
