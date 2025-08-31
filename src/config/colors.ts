// Configuração de cores do projeto MyProps
export const colors = {
  // Gradientes principais
  primary: {
    gradient: "from-orange-500 to-red-600",
    gradientHover: "from-orange-600 to-red-700",
    gradientLight: "from-orange-400 to-red-500",
  },
  
  // Gradientes secundários
  secondary: {
    gradient: "from-yellow-500 to-orange-600",
    gradientHover: "from-yellow-600 to-orange-700",
  },
  
  // Gradientes de destaque
  accent: {
    gradient: "from-orange-400 via-red-500 to-pink-600",
    gradientHover: "from-orange-500 via-red-600 to-pink-700",
  },
  
  // Cores sólidas
  solid: {
    orange: "bg-orange-500",
    orangeHover: "hover:bg-orange-600",
    red: "bg-red-500",
    redHover: "hover:bg-red-600",
  },
  
  // Cores de texto
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-600",
    light: "text-gray-500",
    white: "text-white",
  },
  
  // Cores de fundo
  background: {
    primary: "bg-gray-50",
    secondary: "bg-white",
    accent: "bg-orange-50",
  }
};

// Classes CSS prontas para usar
export const gradientClasses = {
  // Botões principais
  primaryButton: `bg-gradient-to-r ${colors.primary.gradient} hover:${colors.primary.gradientHover}`,
  
  // Botões secundários
  secondaryButton: `bg-gradient-to-r ${colors.secondary.gradient} hover:${colors.secondary.gradientHover}`,
  
  // Cards e elementos de destaque
  accentCard: `bg-gradient-to-br ${colors.accent.gradient}`,
  
  // Texto com gradiente
  gradientText: "bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent",
  
  // Bordas com gradiente
  gradientBorder: "border-2 border-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-border",
};
