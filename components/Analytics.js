import Script from "next/script";

export default function Analytics() {
    return (
      // <!-- Google tag (gtag.js) -->
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
   
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </div>
    )
}