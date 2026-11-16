export const siteConfig = {
  name: "Kazoa",
  phone: "0621602069",
  email: "Ngolovintan@ymail.com",
  location: "Dar es Salaam",
  whatsapp: "255621602069",
  tagline: "Ujenzi kwa Mpangilio, Ubora na Uwazi",
  hero: {
    headline: "Kutoka Wazo la Nyumba Hadi Makabidhiano.",
    subheadline:
      "Mwongozo na usimamizi wa kazi za ujenzi kwa mpangilio, ubora, usalama na uwazi wa gharama.",
    ctaPrimary: "Anza Mradi Wako",
    ctaSecondary: "Jifunze Jinsi Tunavyofanya Kazi",
  },
  nav: [
    { label: "Home", key: "home", href: "/" },
    { label: "Mchakato wa Ujenzi", key: "process", href: "/process" },
    { label: "Mifano", key: "gallery", href: "/gallery" },
    { label: "About", key: "about", href: "/about" },
    { label: "Wasiliana Nasi", key: "contact", href: "/contact" },
  ],
} as const;
