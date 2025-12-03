import { SEO_CONFIG } from "../lib/constants";
import { JsonLd } from "./json-ld";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.url}/#website`,
    url: SEO_CONFIG.url,
    name: SEO_CONFIG.name,
    description: SEO_CONFIG.description,
    publisher: {
      "@type": "Person",
      "@id": `${SEO_CONFIG.url}/#person`,
    },
    inLanguage: "en",
  };

  return <JsonLd data={schema} />;
}
