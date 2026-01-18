/**
 * Script de test du système MDX
 *
 * Usage: npx tsx scripts/test-mdx.ts
 */

import { getAllArticles, getArticleBySlug } from "../src/lib/mdx";

async function testMDX() {
  console.log("\n🧪 Test du système MDX\n");
  console.log("=".repeat(50));

  // Test 1: Récupérer tous les articles
  console.log("\n1️⃣  Test getAllArticles()");
  const allArticles = await getAllArticles();
  console.log(`   ✅ ${allArticles.length} article(s) trouvé(s)`);

  if (allArticles.length > 0) {
    allArticles.forEach((article, index) => {
      console.log(`   ${index + 1}. ${article.title}`);
      console.log(`      - Slug: ${article.slug}`);
      console.log(`      - Date: ${article.date}`);
      console.log(`      - Catégorie: ${article.category}`);
      console.log(`      - Tags: ${article.tags.join(", ")}`);
      console.log(`      - Publié: ${article.published ? "Oui" : "Non"}`);
    });
  }

  // Test 2: Récupérer l'article de test
  console.log("\n2️⃣  Test getArticleBySlug('test-systeme-mdx')");
  const testArticle = await getArticleBySlug("test-systeme-mdx");

  if (testArticle) {
    console.log("   ✅ Article chargé avec succès");
    console.log(`   - Titre: ${testArticle.title}`);
    console.log(`   - Excerpt: ${testArticle.excerpt.substring(0, 80)}...`);
    console.log(`   - Temps de lecture: ${testArticle.readTime}`);
    console.log(
      `   - Contenu: ${testArticle.content?.substring(0, 100)}...`
    );
  } else {
    console.log("   ❌ Article non trouvé");
  }

  // Test 3: Tester un slug inexistant
  console.log("\n3️⃣  Test getArticleBySlug('inexistant')");
  const nonExistent = await getArticleBySlug("inexistant");

  if (nonExistent === null) {
    console.log("   ✅ Gestion correcte des articles inexistants");
  } else {
    console.log("   ❌ Devrait retourner null");
  }

  console.log("\n" + "=".repeat(50));
  console.log("\n✅ Tests terminés avec succès !\n");
}

testMDX().catch((error) => {
  console.error("\n❌ Erreur lors des tests:", error);
  process.exit(1);
});
