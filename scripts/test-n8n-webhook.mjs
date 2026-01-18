/**
 * Script de test du webhook n8n
 *
 * Usage: node scripts/test-n8n-webhook.mjs
 */

const N8N_WEBHOOK_URL = "https://n8n.expertiaacademy.com/webhook/78de5190-132b-4220-8df8-a7945a444927";

console.log("\n🧪 Test du webhook n8n - Assistant IA\n");
console.log("=".repeat(70));
console.log("\n📡 URL:", N8N_WEBHOOK_URL);

// Test 1: Envoi d'un message simple
console.log("\n1️⃣  Test 1: Envoi d'un message simple\n");

const testMessage = "Bonjour, je voudrais des informations sur vos services";

console.log(`📤 Message envoyé: "${testMessage}"`);

try {
  const startTime = Date.now();

  const response = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchQuery: testMessage,
    }),
  });

  const endTime = Date.now();
  const duration = endTime - startTime;

  console.log(`⏱️  Temps de réponse: ${duration}ms`);
  console.log(`📊 Statut HTTP: ${response.status} ${response.statusText}`);

  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  console.log("\n📦 Réponse reçue:");
  console.log(JSON.stringify(data, null, 2));

  // Extraire la réponse de l'AI
  const aiResponse = data.output || data.response || data.message || JSON.stringify(data);

  console.log("\n💬 Réponse de l'AI:");
  console.log(`"${aiResponse}"`);

  console.log("\n✅ Test 1 réussi !");

} catch (error) {
  console.error("\n❌ Erreur lors du test:");
  console.error(error.message);
  console.log("\n⚠️  Vérifications à effectuer:");
  console.log("   1. Le workflow n8n est-il actif ?");
  console.log("   2. L'URL du webhook est-elle correcte ?");
  console.log("   3. Le firewall n8n autorise-t-il votre IP ?");
  console.log("   4. Les crédits OpenAI sont-ils suffisants ?");
  process.exit(1);
}

// Test 2: Vérification de la structure de réponse
console.log("\n2️⃣  Test 2: Vérification de la structure\n");

try {
  const response = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchQuery: "Test",
    }),
  });

  const data = await response.json();

  console.log("📋 Champs disponibles dans la réponse:");
  Object.keys(data).forEach(key => {
    console.log(`   - ${key}: ${typeof data[key]}`);
  });

  const hasValidResponse = data.output || data.response || data.message;

  if (hasValidResponse) {
    console.log("\n✅ Test 2 réussi ! Structure de réponse valide.");
  } else {
    console.log("\n⚠️  La réponse ne contient pas les champs attendus (output/response/message).");
    console.log("   Vous devrez peut-être ajuster le parsing dans ai-chat-modal.tsx");
  }

} catch (error) {
  console.error("\n❌ Erreur lors du test 2:");
  console.error(error.message);
}

console.log("\n" + "=".repeat(70));
console.log("\n🎉 Tests terminés !\n");
console.log("📝 Prochaines étapes:");
console.log("   1. Tester l'interface chat dans le navigateur (npm run dev)");
console.log("   2. Cliquer sur l'icône Assistant IA (MessageCircle violet)");
console.log("   3. Envoyer un message de test");
console.log("   4. Vérifier la réponse de l'AI");
console.log("   5. Tester une prise de rendez-vous\n");
