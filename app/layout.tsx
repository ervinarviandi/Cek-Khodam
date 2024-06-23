import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/organisms/theme-provider";

const sora = Sora({ weight: "400", subsets: ["latin"] });

<head>
  <link
    rel="icon"
    href="https://qrcode-ervin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrands1.29797e4f.png&w=32&q=75"
    type="image/png"
    sizes="32x32"
  />
</head>;

export const metadata: Metadata = {
  icons: {
    icon: "/_525b1de5-acf9-4461-b7b8-2920f23ba501.ico",
  },

  title: "Cek Khodam Online - by ervin arviandi",
  description:
    "Cek khodam yang ada ditubuhmu - powered by google generative ai",
  keywords: [
    "cek khodam",
    "khodam",
    "cek khodam kamu",
    "khodam kamu",
    "online",
  ],
  authors: [
    {
      name: "ervin arviandi",
      url: "https://ervinarviandi.vercel.app/",
    },
  ],
  creator: "ervin arviandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <link
            rel="icon"
            href="/_0f75efe7-e868-4f8d-ba3a-32a667aaca6a.ico"
            sizes="any"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
