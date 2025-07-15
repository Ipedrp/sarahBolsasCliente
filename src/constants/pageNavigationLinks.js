// navLinks.js
export const navLinks = [
  { label: "Início", path: "/" },
  {
    label: "Linha Feminina",
    submenu: [
      { label: "Bolsas", path: "/womenLine/bags" },
      { label: "Mochilas", path: "/womenLine/backpacks" },
      { label: "Ver Tudo", path: "/womenLine" },
    ],
  },
  {
    label: "Linha Masculina",
    submenu: [
      { label: "Pastas", path: "/menLine/briefcases" },
      { label: "Mochilas", path: "/menLine/backpacks" },
      { label: "Ver Tudo", path: "/menLine" },

    ],
  },
  { label: "Promoção", path: "/promotion" },
  { label: "Sobre a Empresa", path: "/about" },
  { label: "Entrar em Contato", path: "/contact" },
  { label: "Rastrear Produto", path: "/track" },
];

export const perfilLinks = [
  {
    submenu: [
      { label: "Entrar", path: "/login" },
      { label: "Cadastrar", path: "/register" },
    ],
  },
];
