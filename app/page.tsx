import Script from "next/script";
import SiteMarkup from "@/components/SiteMarkup";

export default function Page() {
  return (
    <>
      <SiteMarkup />
      <Script src="/js/site.js" strategy="afterInteractive" />
    </>
  );
}
