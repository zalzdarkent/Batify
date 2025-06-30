import { defaultConfig, createSystem, defineConfig } from '@chakra-ui/react'
// import colors from '@lib/theme/colors'
import { IconButton, Text, Heading, Button } from './components'


const colors = {
  neutral: {
    "50": { value: "#F8FAFC" },
    "100": { value: "#F1F5F9" },
    "200": { value: "#E2E8F0" },
    "300": { value: "#CBD5E1" },
    "400": { value: "#94A3B8" },
    "500": { value: "#64748B" },
    "600": { value: "#475569" },
    "700": { value: "#334155" },
    "800": { value: "#1E293B" },
    "900": { value: "#0F172A" }
  },
  primary: {
    "50": { value: "#CCD9D8" },
    "100": { value: "#AABDC0" },
    "200": { value: "#667A8C" },
    "300": { value: "#445371" },
    "400": { value: "#232B57" },
    "500": { value: "#04023c" },
    "600": { value: "#0E0135" },
    "700": { value: "#15002F" },
    "800": { value: "#1A0027" },
    "900": { value: "#1C0020" }
  },
  secondary: {
    "50": { value: "#E4FFFC" },
    "100": { value: "#E0FFFF" },
    "200": { value: "#DCFBFF" },
    "300": { value: "#D8F3FF" },
    "400": { value: "#D4EAFF" },
    "500": { value: "#D1E0FF" },
    "600": { value: "#BFD5EA" },
    "700": { value: "#ADC8D5" },
    "800": { value: "#9CBBC0" },
    "900": { value: "#8AABAB" }
  },
  tertiary: {
    "50": { value: "#FDF2F8" },
    "100": { value: "#FCE7F3" },
    "200": { value: "#FBCFE8" },
    "300": { value: "#F9A8D4" },
    "400": { value: "#F472B6" },
    "500": { value: "#EC4899" },
    "600": { value: "#DB2777" },
    "700": { value: "#BE185D" },
    "800": { value: "#9D174D" },
    "900": { value: "#831843" }
  },
  danger: {
    "50": { value: "#FEF2F2" },
    "100": { value: "#FEE2E2" },
    "200": { value: "#FECACA" },
    "300": { value: "#FCA5A5" },
    "400": { value: "#F87171" },
    "500": { value: "#EF4444" },
    "600": { value: "#DC2626" },
    "700": { value: "#B91C1C" },
    "800": { value: "#991B1B" },
    "900": { value: "#7F1D1D" }
  },
  warning: {
    "50": { value: "#FFFBEB" },
    "100": { value: "#FEF3C7" },
    "200": { value: "#FDE68A" },
    "300": { value: "#FCD34D" },
    "400": { value: "#FBBF24" },
    "500": { value: "#F59E0B" },
    "600": { value: "#D97706" },
    "700": { value: "#B45309" },
    "800": { value: "#92400E" },
    "900": { value: "#78350F" }
  },
  orange: {
    "50": { value: "#FFF7ED" },
    "100": { value: "#FFEDD5" },
    "200": { value: "#FED7AA" },
    "300": { value: "#FDBA74" },
    "400": { value: "#FB923C" },
    "500": { value: "#F97316" },
    "600": { value: "#EA580C" },
    "700": { value: "#C2410C" },
    "800": { value: "#9A3412" },
    "900": { value: "#7C2D12" }
  },
  info: {
    "50": { value: "#F0F9FF" },
    "100": { value: "#E0F2FE" },
    "200": { value: "#BAE6FD" },
    "300": { value: "#7DD3FC" },
    "400": { value: "#38BDF8" },
    "500": { value: "#0EA5E9" },
    "600": { value: "#0284C7" },
    "700": { value: "#0369A1" },
    "800": { value: "#075985" },
    "900": { value: "#0C4A6E" }
  },
  success: {
    "50": { value: "#F0FDF4" },
    "100": { value: "#DCFCE7" },
    "200": { value: "#BBF7D0" },
    "300": { value: "#86EFAC" },
    "400": { value: "#4ADE80" },
    "500": { value: "#22C55E" },
    "600": { value: "#16A34A" },
    "700": { value: "#15803D" },
    "800": { value: "#166534" },
    "900": { value: "#14532D" }
  },
  tartiary: {
    "50": { value: "#FDF2F8" },
    "500": { value: "#EC4899" }
  },
}

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Poppins', sans-serif` },
        body: { value: `'Poppins', sans-serif` },
      },
      colors
    },
    recipes: {
      heading: Heading,
      text: Text,
      iconButton: IconButton,
      button: Button
    },
  }
})

export const system = createSystem(defaultConfig, config)