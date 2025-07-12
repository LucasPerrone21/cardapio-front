import ThemeProvider from "@/providers/Theme";
import { Grid } from "@mui/material";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Um Sushi",
  description: "Cardápio - Um sushi",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <Grid>{children}</Grid>
        </ThemeProvider>
      </body>
    </html>
  );
}
