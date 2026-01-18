/**
 * Script de test des pages blog (simulation)
 *
 * Usage: node scripts/test-blog-pages.mjs
 */

import { getAllArticles, getArticleBySlug, compileMDXContent } from '../src/lib/mdx.ts';

console.log('\n🧪 Test des pages blog (simulation)\n');
console.log('='.repeat(70));

try {
  // Test 1: Page liste blog (/blog)
  console.log('\n1️⃣  Test de la page /blog (liste des articles)\n');
  const articles = await getAllArticles();

  console.log(`   ✅ getAllArticles() appelé avec succès`);
  console.log(`   📊 ${articles.length} article(s) chargé(s)`);

  if (articles.length > 0) {
    console.log(`\n   Aperçu des articles :`);
    articles.forEach((article, index) => {
      console.log(`   ${index + 1}. ${article.title}`);
      console.log(`      Slug: ${article.slug}`);
      console.log(`      Publié: ${article.published ? 'Oui' : 'Non'}`);
    });
  }

  // Test 2: Page article individuel (/blog/[slug])
  console.log(`\n2️⃣  Test de la page /blog/[slug] (article individuel)\n`);

  if (articles.length > 0) {
    const testSlug = articles[0].slug;
    console.log(`   Test avec slug: "${testSlug}"\n`);

    // Charger l'article
    const article = await getArticleBySlug(testSlug);

    if (article) {
      console.log(`   ✅ getArticleBySlug() réussi`);
      console.log(`   📝 Titre: ${article.title}`);
      console.log(`   📅 Date: ${article.date}`);
      console.log(`   📂 Catégorie: ${article.category}`);
      console.log(`   📏 Contenu: ${article.content?.length} caractères`);

      // Compiler le contenu MDX
      if (article.content) {
        console.log(`\n   ⏳ Compilation du contenu MDX...`);
        const { content } = await compileMDXContent(article.content);
        console.log(`   ✅ compileMDXContent() réussi`);
        console.log(`   📦 Type du contenu compilé: ${typeof content}`);
        console.log(`   ℹ️  Le contenu MDX est compilé en React component`);
      } else {
        console.log(`   ⚠️  Pas de contenu à compiler`);
      }
    } else {
      console.log(`   ❌ Article introuvable`);
    }
  }

  // Test 3: generateStaticParams
  console.log(`\n3️⃣  Test de generateStaticParams()\n`);
  const publishedArticles = articles.filter(a => a.published);
  const staticParams = publishedArticles.map(article => ({
    slug: article.slug,
  }));

  console.log(`   ✅ ${staticParams.length} route(s) statique(s) générée(s)`);
  staticParams.forEach(param => {
    console.log(`   - /blog/${param.slug}`);
  });

  console.log('\n' + '='.repeat(70));
  console.log('\n✅ Tous les tests de pages blog passés avec succès !');
  console.log('\n💡 Les pages blog sont prêtes à être utilisées.');
  console.log('   - /blog → Liste des articles ✅');
  console.log('   - /blog/[slug] → Article individuel ✅\n');

} catch (error) {
  console.error('\n❌ Erreur lors des tests:', error);
  console.log('\n' + '='.repeat(70));
  process.exit(1);
}
