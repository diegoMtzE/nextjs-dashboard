import "./ui/global.css"
import {nunito} from "./ui/font"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
