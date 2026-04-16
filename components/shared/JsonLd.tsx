import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * JSON-LD Structured Data Component
 * Use this to add schema.org structured data to your pages
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
