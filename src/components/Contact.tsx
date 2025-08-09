import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulation d'envoi du formulaire
    toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.");

    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "exaucebenjamink@gmail.com",
      action: "mailto:exaucebenjamink@gmail.com",
    },
    {
      icon: "🟢", // alternative emoji combiné (ou voir ci-dessous pour Unicode ou HTML)
      title: "WhatsApp",
      value: "+243 81 25 44 510",
      action: "https://wa.me/243812544510",
    },
    {
      icon: "📍",
      title: "Localisation",
      value: "Kinshasa, République Démocratique du Congo",
      action: "#",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "/in/exauce-benjamin-kyalondawa",
      action: "https://linkedin.comhttps://www.linkedin.com/in/exauce-benjamin-kyalondawa ",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contacter
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ! Je serais ravi de
            discuter de vos idées et de vous aider à les concrétiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Informations de contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors group"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Disponibilité
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span>Disponible pour de nouveaux projets</span>
                </div>
                <p className="text-sm">
                  Réponse généralement sous 24h. N'hésitez pas à me contacter
                  pour discuter de votre projet !
                </p>
              </div>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-3">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/30 border-border focus:border-primary"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted/30 border-border focus:border-primary"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-muted/30 border-border focus:border-primary"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-muted/30 border-border focus:border-primary resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
