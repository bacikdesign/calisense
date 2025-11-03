import "./../styles/globals.css";
export const metadata = { title:"Calisense – MVP", description:"Mobil ve dijital sensör kalibrasyonu" };
export default function RootLayout({ children }) {
  return (<html lang="tr"><body>{children}</body></html>);
}
