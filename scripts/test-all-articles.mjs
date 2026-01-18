/**
 * Script de test complet de tous les articles MDX
 *
 * Usage: node scripts/test-all-articles.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDirectory = path.join(__dirname, '../content/blog');

console.log('\n🧪 Test complet de tous les articles MDX\n');
console.log('='.repeat(70));

// Lire tous les fichiers MDX
const files = fs.readdirSync(contentDirectory);
const mdxFiles = files.filter(file => file.endsWith('.mdx'));

console.log(`\n📁 ${mdxFiles.length} article(s) trouvé(s)\n`);

let successCount = 0;
let errorCount = 0;

// Parser chaque article
for (const file of mdxFiles) {
  const filePath = path.join(contentDirectory, file);
  const slug = file.replace('.mdx', '');

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    console.log(`✅ ${slug}`);
    console.log(`   📝 Titre: ${data.title}`);
    console.log(`   📅 Date: ${data.date}`);
    console.log(`   📂 Catégorie: ${data.category}`);
    console.log(`   🏷️  Tags: ${data.tags?.join(', ') || 'Aucun'}`);
    console.log(`   👤 Auteur: ${data.author}`);
    console.log(`   ⏱️  Temps de lecture: ${stats.text} (${stats.words} mots)`);
    console.log(`   📊 Publié: ${data.published ? 'Oui' : 'Non (brouillon)'}`);
    console.log(`   ⭐ Featured: ${data.featured ? 'Oui' : 'Non'}`);
    console.log(`   📏 Taille: ${content.length} caractères`);

    // Validation des champs requis
    const errors = [];
    if (!data.title) errors.push('Titre manquant');
    if (!data.excerpt) errors.push('Excerpt manquant');
    if (!data.date) errors.push('Date manquante');
    if (!data.category) errors.push('Catégorie manquante');
    if (!data.author) errors.push('Auteur manquant');

    if (errors.length > 0) {
      console.log(`   ⚠️  Avertissements: ${errors.join(', ')}`);
    }

    console.log('');
    successCount++;

  } catch (error) {
    console.log(`❌ ${slug}`);
    console.log(`   Erreur: ${error.message}\n`);
    errorCount++;
  }
}

console.log('='.repeat(70));
console.log(`\n📊 Résumé des tests :\n`);
console.log(`   ✅ ${successCount} article(s) valide(s)`);
console.log(`   ❌ ${errorCount} article(s) en erreur`);
console.log(`   📁 Total: ${mdxFiles.length} article(s)\n`);

if (errorCount === 0) {
  console.log('🎉 Tous les articles sont valides et prêts à être utilisés !\n');
} else {
  console.log('⚠️  Certains articles nécessitent des corrections.\n');
  process.exit(1);
}
