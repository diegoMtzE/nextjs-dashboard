import "./ui/global.css";
import { nunito } from "./ui/fonts";
import { Nunito } from "next/font/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.className} antialiased`}>
      <body>
        {children} 
       <footer className="py-10 bg-blue-400 flex justify-center items-center">Hecho con ❤️ por --diegomtzE--</footer>
      </body>

    </html>
  );
}
