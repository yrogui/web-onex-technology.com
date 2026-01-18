export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ONEX Technology",
    description:
      "Cabinet de conseil et delivery spécialisé en transformation digitale, expérience client et solutions CCaaS au Maroc.",
    url: "https://onex-technology.com",
    logo: "https://onex-technology.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-5-22-XX-XX-XX",
      contactType: "Customer Service",
      areaServed: "MA",
      availableLanguage: ["French", "Arabic", "English"],
    },
    sameAs: ["https://www.linkedin.com/company/onex-technology"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
