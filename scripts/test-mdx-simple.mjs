/**
 * Script de test simple du système MDX (ESM)
 *
 * Usage: node scripts/test-mdx-simple.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import readingTime from "reading-time";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDirectory = path.join(__dirname, "../content/blog");

console.log("\n🧪 Test du système MDX (Simple)\n");
console.log("=".repeat(50));

// Test 1: Vérifier que le dossier content/blog existe
console.log("\n1️⃣  Vérification du dossier content/blog/");
if (fs.existsSync(contentDirectory)) {
  console.log(`   ✅ Dossier trouvé: ${contentDirectory}`);
} else {
  console.log(`   ❌ Dossier introuvable: ${contentDirectory}`);
  process.exit(1);
}

// Test 2: Lister les fichiers MDX
console.log("\n2️⃣  Listing des fichiers MDX");
const files = fs.readdirSync(contentDirectory);
const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

console.log(`   ✅ ${mdxFiles.length} fichier(s) MDX trouvé(s)`);
mdxFiles.forEach((file, index) => {
  console.log(`   ${index + 1}. ${file}`);
});

// Test 3: Parser le fichier de test
if (mdxFiles.includes("test-systeme-mdx.mdx")) {
  console.log("\n3️⃣  Parsing de test-systeme-mdx.mdx");

  const filePath = path.join(contentDirectory, "test-systeme-mdx.mdx");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  console.log("   ✅ Frontmatter parsé avec succès");
  console.log(`   - Titre: ${data.title}`);
  console.log(`   - Excerpt: ${data.excerpt.substring(0, 80)}...`);
  console.log(`   - Date: ${data.date}`);
  console.log(`   - Catégorie: ${data.category}`);
  console.log(`   - Tags: ${data.tags.join(", ")}`);
  console.log(`   - Auteur: ${data.author}`);
  console.log(`   - Publié: ${data.published}`);
  console.log(`   - Featured: ${data.featured}`);

  // Test reading-time
  const stats = readingTime(content);
  console.log(`   - Temps de lecture calculé: ${stats.text}`);

  // Taille du contenu
  console.log(`   - Taille du contenu: ${content.length} caractères`);
  console.log(`   - Mots: ${stats.words} mots`);
} else {
  console.log("\n3️⃣  ❌ Fichier test-systeme-mdx.mdx non trouvé");
}

console.log("\n" + "=".repeat(50));
console.log("\n✅ Tests simples terminés avec succès !\n");
