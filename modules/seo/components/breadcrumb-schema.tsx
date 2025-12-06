import { SEO_CONFIG } from "../lib/constants";
import { JsonLd } from "./json-ld";

type BreadcrumbItem = {
  name: string;
  url: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbItems = [
    { name: "About", url: SEO_CONFIG.url },
    ...items.map((item) => ({
      ...item,
      url: item.url.startsWith("http")
        ? item.url
        : `${SEO_CONFIG.url}${item.url}`,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
}
