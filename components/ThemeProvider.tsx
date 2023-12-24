"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// ComponentPropsWithoutRef type can be used to grab all the native attributes of an HTML element as the props type of your component
interface ThemeProviderProps {
  children: React.ReactNode;
  attribute: string;
  defaultTheme: string;
}

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider;
