export const site = {
  name: "Laboratoire International de Chimie Monétaire",
  tagline: "Expertise monétaire, nettoyage et traitement chimique de billets de banque sécurisés",
  logo: "/logo-monetalab.png",
};

// Coordonnées conservées strictement selon la consigne de l'utilisateur
export const contact = {
  address: "9, Quai du Lazaret, 13002 Marseille - France",
  email: "monetalab680@gmail.com",
  phoneDisplay: "+33 7 48 23 32 62",
  phoneHref: "tel:+33748233262",
  whatsappHref: "https://wa.me/33748233262",
};

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "Présentation" },
  { href: "/services", label: "Nos Prestations" },
  { href: "/expertise", label: "Expertise" },
  { href: "/ressources", label: "Démarche Qualité" },
  { href: "/multimedia", label: "Multimédia" },
  { href: "/contact", label: "Contactez-nous" },
] as const;

export const footerNav = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
] as const;

const videoFiles = Array.from({ length: 17 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    id: `video-${number}`,
    title: `Démonstration Laboratoire #${number}`,
    src: `/videos/${number}.mp4`,
    poster: `/videos/thumbnails/${number}.jpg`,
  };
});

export const videos = videoFiles;

export const photos = [
  { id: "laboratoire", alt: "Techniciens travaillant dans un laboratoire de chimie monétaire", src: "/images/laboratoire-equipe.jpg" },
  { id: "billets", alt: "Billets de banque sécurisés traités en laboratoire", src: "/images/billets-de-banque.jpg" },
  { id: "liasses", alt: "Liasses de billets de banque réhabilités", src: "/images/overviewblock_banknote_wrappers.jpg" },
  { id: "details", alt: "Détail de sécurité d'un billet de banque", src: "/images/OIP.webp" },
  { id: "billets-table", alt: "Contrôle qualité des billets de banque sur banc d'essai", src: "/images/pexels-karola-g-5980890.jpg" },
];
