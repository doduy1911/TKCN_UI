import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Providers from "@/components/Providers"
import { siteConfig } from "@/config/site"
import "@/styles/fontFamily.css"
import "@/styles/globals.css"
import NextTopLoader from "nextjs-toploader"

// Import css Slick-Carouse
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
export const dynamicParams = true
// Layout website
export const metadata = {
   title: {
      default: `${siteConfig.name}`,
      template: `%s - ${siteConfig.name}`,
   },
   description: siteConfig.bio,
   themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
   ],
   icons: {
      icon: "/favicon.ico"
   },
}


export default function RootLayout({ children }) {
   return (
      <html lang="vi">
         <head>
            <base href="/" />
            <meta charSet="UTF-8" />
            <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>Trang chủ - CỔNG THÔNG TIN ĐIỆN TỬ BAN CHỈ ĐẠO PHÒNG THỦ DÂN SỰ QUỐC GIA</title>
            <link rel="canonical" href="https://tkcn.gov.vn/" />
            <meta property="og:locale" content="vi_VN" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Trang chủ - CỔNG THÔNG TIN ĐIỆN TỬ BAN CHỈ ĐẠO PHÒNG THỦ DÂN SỰ QUỐC GIA" />
            <meta property="og:url" content="https://tkcn.gov.vn/" />
            <meta property="og:site_name" content="CỔNG THÔNG TIN ĐIỆN TỬ BAN CHỈ ĐẠO PHÒNG THỦ DÂN SỰ QUỐC GIA" />
            <meta property="article:modified_time" content="2023-03-10T01:58:57+00:00" />
            <meta name="twitter:card" content="summary_large_image" />
            <script type="text/javascript" dangerouslySetInnerHTML={{
               __html: `
               var _govaq = window._govaq || [];
               _govaq.push(['trackPageView']);
               _govaq.push(['enableLinkTracking']);
               (function () {
                  _govaq.push(['setTrackerUrl', 'https://f-emc.ngsp.gov.vn/tracking']);
                  _govaq.push(['setSiteId', '4064']);
                  var d = document,
                  g = d.createElement('script'),
                  s = d.getElementsByTagName('script')[0];
                  g.type = 'text/javascript';
                  g.async = true;
                  g.defer = true;
                  g.src = 'https://f-emc.ngsp.gov.vn/embed/gov-tracking.min.js';
                  s.parentNode.insertBefore(g, s);
               })();
            ` }} />
         </head>
         <body
            className="bg-white dark:bg-[#161D31]"
         >
            <NextTopLoader showSpinner={false} />
            <Providers>
               <Header />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   )
}
