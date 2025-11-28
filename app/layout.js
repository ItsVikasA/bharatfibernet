import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";

export const metadata = {
  title: "Bharat Fibernet - Fastest Fiber Internet Service Provider",
  description: "Multi-gateway, low-latency networks designed to keep your teams productive 24/7.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Preloader />
      {children}
      </body>
    </html>
  );
}
