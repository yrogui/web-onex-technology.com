export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "One-X Technology",
    description:
      "Cabinet de conseil et delivery spécialisé en transformation digitale, expérience client et solutions CCaaS au Maroc.",
    url: "https://onex-technology.com",
    logo: "https://onex-technology.com/images/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-6-65-56-72-67",
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
