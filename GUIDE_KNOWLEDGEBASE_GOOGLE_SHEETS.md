# 📊 GUIDE : Base de Connaissances Google Sheets pour l'Assistant IA

**Date :** 18 janvier 2026
**Statut :** ✅ Template Prêt à l'Emploi
**Fichier :** `KNOWLEDGEBASE_GOOGLE_SHEETS.csv`

---

## 🎯 Vue d'Ensemble

Ce fichier CSV contient **22 entrées structurées** extraites de votre site ONEX Technology, optimisées pour l'AI Agent n8n.

### Contenu du Template

| Catégorie | Nombre d'entrées | Priorité |
|-----------|------------------|----------|
| **FAQ** | 5 | Haute (réponses aux questions fréquentes) |
| **Services** | 4 | Haute (offres CCaaS) |
| **Offres** | 3 | Haute (packs tarifaires) |
| **Méthode** | 4 | Moyenne (processus de travail) |
| **À Propos** | 3 | Moyenne (équipe, valeurs, partenaires) |
| **Contact** | 1 | Haute (coordonnées) |
| **Statistiques** | 1 | Basse (chiffres clés) |
| **Process** | 1 | Haute (prise de RDV) |

---

## 🚀 Étape 1 : Importer dans Google Sheets

### Option A : Import Direct (Recommandé)

1. **Ouvrir Google Sheets**
   - Aller sur https://sheets.google.com
   - Cliquer sur "Nouveau" → "Feuille de calcul vierge"

2. **Importer le fichier CSV**
   - Fichier → Importer
   - Onglet "Importer"
   - Cliquer sur "Sélectionner un fichier depuis votre ordinateur"
   - Choisir `KNOWLEDGEBASE_GOOGLE_SHEETS.csv`

3. **Configurer l'import**
   - **Type d'importation :** Remplacer la feuille de calcul actuelle
   - **Séparateur :** Virgule
   - **Convertir le texte en nombres et dates :** Décoché
   - Cliquer sur "Importer les données"

4. **Renommer la feuille**
   - Double-cliquer sur l'onglet "Feuille 1"
   - Renommer en `Knowledgebase`

5. **Formater les colonnes**
   - Sélectionner toute la feuille (Ctrl+A)
   - Format → Retour à la ligne automatique → Retour à la ligne
   - Ajuster largeur colonnes :
     - Colonne A (ID) : 50px
     - Colonne B (Catégorie) : 100px
     - Colonne C (Sous-Catégorie) : 120px
     - Colonne D (Question) : 300px
     - Colonne E (Réponse) : 500px
     - Colonne F (Mots-Clés) : 200px
     - Colonne G (URL) : 250px
     - Colonne H (Priorité) : 80px

### Option B : Copier-Coller depuis Excel

Si vous préférez passer par Excel d'abord :

1. Ouvrir `KNOWLEDGEBASE_GOOGLE_SHEETS.csv` dans Excel
2. Sélectionner tout (Ctrl+A) → Copier (Ctrl+C)
3. Ouvrir Google Sheets
4. Coller (Ctrl+V) dans la cellule A1
5. Formater comme ci-dessus

---

## 🔧 Étape 2 : Configurer n8n pour Utiliser la Base

### 2.1 Obtenir l'ID du Google Sheet

1. **Ouvrir votre Google Sheet**
2. **Copier l'URL** (exemple) :
   ```
   https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit#gid=0
   ```
3. **Extraire l'ID** (partie entre `/d/` et `/edit`) :
   ```
   1a2b3c4d5e6f7g8h9i0j
   ```

### 2.2 Configurer le Nœud "Knowledgebase Lookup" dans n8n

1. **Ouvrir votre workflow n8n**
   - https://n8n.expertiaacademy.com/workflows/YkGnkxgzW5hxp6RN

2. **Cliquer sur le nœud "Knowledgebase Lookup" (Google Sheets)**

3. **Configurer les paramètres :**
   - **Credential** : Sélectionner "Google Sheets account" (déjà configuré)
   - **Operation** : `Read` → `Get Many`
   - **Document ID** : Coller l'ID copié ci-dessus
   - **Sheet Name** : `Knowledgebase` (ou `Sheet1` si pas renommé)
   - **Options** :
     - **Return All** : Activé ✅
     - **RAW Data** : Désactivé

4. **Sauvegarder le workflow** (Ctrl+S)

### 2.3 Améliorer le Prompt Système de l'AI Agent

Actuellement, votre AI Agent a cette instruction pour la base de connaissances :

```
Get Knowledgebase → Reads the Knowledgebase from Google Sheets (the database).
Constraints:
- Call this node at most once per request (no second pass).
- Use it only for factual/company/pack/FAQ/policy/account questions.
```

**Amélioration recommandée :**

Modifiez le prompt système pour ajouter après la section "Get Knowledgebase" :

```
Get Knowledgebase → Searches the knowledge base from Google Sheets.

**How to use it:**
1. Call this tool when the user asks about:
   - Services (migrations Genesys, AWS Connect, Avaya)
   - Pricing (tarifs, coûts, budgets)
   - Timeline (délais, durée de migration)
   - Process (méthode, phases, approche)
   - Company info (équipe, valeurs, partenaires)

2. The knowledge base contains:
   - FAQ (5 questions fréquentes)
   - Services (4 services CCaaS)
   - Offers (3 packs tarifaires)
   - Method (4 phases de travail)
   - About (équipe, valeurs, pourquoi ONEX)
   - Contact (coordonnées, prise de RDV)

3. Constraints:
   - Call ONCE per user request max
   - Always cite the source URL if available
   - If info missing: "Cette information n'est pas dans la base de connaissances"
   - Never mention "Google Sheets" or "database" → say "notre documentation"

4. Priority levels in the base:
   - **Haute** : Answer immediately with full details + URL
   - **Moyenne** : Provide short answer + offer more details
   - **Basse** : Mention briefly, no need to expand
```

---

## 📈 Étape 3 : Tester l'Intégration

### Test 1 : Question FAQ (Priorité Haute)

**Question utilisateur :**
> Combien coûte une migration Genesys Cloud ?

**Réponse attendue de l'AI :**
```
Le coût d'une migration CCaaS dépend de plusieurs facteurs :

- Audit CCaaS complet : 15 000 MAD HT (déduit si projet signé)
- Migration 20-50 agents : À partir de 150 000 MAD HT
- Migration 50-200 agents : 300 000 à 800 000 MAD HT
- Migration 200-500+ agents : Sur devis

Nos tarifs incluent l'architecture cloud, intégrations CRM,
migration progressive et support 30 jours post go-live.

➡️ Plus de détails : https://onex-technology.com/#offres

Souhaitez-vous un audit gratuit pour obtenir un devis personnalisé ?
```

### Test 2 : Question Service

**Question utilisateur :**
> Quels services proposez-vous pour migrer vers AWS Connect ?

**Réponse attendue de l'AI :**
```
Nous proposons une migration complète vers AWS Connect incluant :

✅ Migration sans interruption (bascule progressive)
✅ Architecture omnicanale (voix, WhatsApp, chat, email)
✅ Intégrations CRM (Salesforce, Dynamics, custom)
✅ Formation terrain agents

Résultats mesurés :
- Coûts télécoms : -20 à -40%
- Time-to-market : divisé par 4
- Disponibilité : 99,95% garanti

➡️ En savoir plus : https://onex-technology.com/#expertises

Voulez-vous en discuter lors d'un diagnostic gratuit (30 min) ?
```

### Test 3 : Prise de Rendez-vous

**Question utilisateur :**
> Je voudrais prendre rendez-vous demain à 14h

**Réponse attendue de l'AI :**
```
Je vérifie la disponibilité pour demain 19 janvier 2026 à 14h00 (Paris)...

[L'AI Agent appelle le Calendar Tool pour vérifier]

✅ Ce créneau est disponible !

Pour confirmer, j'ai besoin de :
- Votre nom complet
- Votre email

Pouvez-vous me les fournir ?
```

---

## ✨ Étape 4 : Enrichir la Base de Connaissances

### Comment Ajouter du Contenu

La base est structurée pour être facilement enrichie. Ajoutez simplement des lignes avec :

| Colonne | Description | Exemple |
|---------|-------------|---------|
| **ID** | Numéro unique (23, 24, 25...) | `23` |
| **Catégorie** | Type de contenu | `Services`, `FAQ`, `Offres` |
| **Sous-Catégorie** | Précision | `Migration Genesys`, `Tarifs` |
| **Question** | Question ou titre | `Comment migrer sans downtime ?` |
| **Réponse** | Contenu complet (markdown accepté) | `Notre méthode...` |
| **Mots-Clés** | Mots-clés séparés par virgules | `migration,genesys,downtime` |
| **URL** | Lien vers la page du site | `https://onex-technology.com/#...` |
| **Priorité** | Haute, Moyenne, Basse | `Haute` |

### Exemples de Contenu à Ajouter

**1. Nouvelles FAQ issues de vraies questions clients :**
```csv
23,FAQ,Support,"Quel support proposez-vous après la mise en production ?","Support 24/7 la première semaine, puis support niveau 3 avec SLA < 4h. Équipe basée à Casablanca disponible en français/arabe. Hotline dédiée + portail tickets. Formation continue de vos équipes IT pour devenir autonomes sous 6 mois.","support,assistance,maintenance,après go-live",https://onex-technology.com/#offres,Haute
```

**2. Études de cas / Success Stories :**
```csv
24,Références,Banque,"Cas client : Migration 200 agents pour une grande banque","Migration Genesys Cloud pour une banque marocaine (200 agents). Durée : 10 semaines. Résultats : -35% coûts télécoms, +20% FCR, 0 downtime. SLA 99,97% maintenu 6 mois post go-live.","cas client,référence,banque,success story,étude de cas",https://onex-technology.com/#temoignages,Haute
```

**3. Comparaisons produits détaillées :**
```csv
25,Comparaison,Genesys vs AWS,"Tableau comparatif Genesys Cloud vs AWS Connect","**Genesys Cloud** : Meilleur pour 200+ agents, omnicanal avancé, IA puissante. Prix 150-200€/agent/mois. **AWS Connect** : Meilleur pour <100 agents, infra AWS, coût optimisé 80-120€/agent/mois. **Notre recommandation** : contactez-nous pour un diagnostic gratuit selon VOS critères.","comparaison,genesys,aws,connect,différence,tableau",https://onex-technology.com/#expertises,Haute
```

**4. Témoignages clients :**
```csv
26,Témoignages,LinkedIn,"Témoignages LinkedIn authentiques","Nos clients témoignent : 'Yassine a été un contributeur clé... capacité exceptionnelle à traduire les besoins en solutions robustes.' - Josquin V., Head of Pre-Sales. Plus de témoignages sur notre profil LinkedIn.","témoignages,avis,clients,recommandations,linkedin",https://www.linkedin.com/in/yrogui/details/recommendations/,Moyenne
```

---

## 🎨 Étape 5 : Améliorer le Prompt de l'AI Agent

Pour que l'AI utilise mieux la base de connaissances, mettez à jour le prompt système :

**Dans n8n → AI Agent → System Message**, remplacez la section "Get Knowledgebase" par :

```
Get Knowledgebase → Searches the knowledge base (22 entries covering FAQ, services, pricing, process).

**When to use:**
- User asks about ONEX services, pricing, process, timeline, team
- User wants to compare Genesys/AWS/Avaya
- User has questions about migration costs or duration
- User wants to know how we work

**How to use:**
1. Call this tool ONCE per request (no repeated calls)
2. Parse the result to find the most relevant entry
3. Always cite the source URL if available (format: "➡️ Plus d'infos : [URL]")
4. If multiple entries match, prioritize by Priority field (Haute > Moyenne > Basse)
5. If no match, say: "Je n'ai pas cette information dans ma base. Je vous mets en contact avec un expert ?"

**Response format:**
- Keep it SHORT (max 4 bullets or 3 sentences)
- Include the URL at the end
- Add a follow-up question to engage (e.g., "Voulez-vous un audit gratuit ?")

**Never say:**
- "Dans la base de données Google Sheets" → Say "Dans notre documentation"
- "Selon la ligne 5" → Just provide the answer naturally
- "Je cherche dans..." → Just answer directly
```

---

## 🔍 Étape 6 : Monitoring & Amélioration Continue

### Analyser les Logs n8n

1. **Aller sur n8n → Workflow → Executions**
   - https://n8n.expertiaacademy.com/workflows/YkGnkxgzW5hxp6RN/executions

2. **Filtrer les exécutions** par :
   - Statut : Success / Error
   - Date : Dernières 24h / 7 jours

3. **Analyser les questions non répondues :**
   - Cliquer sur une exécution
   - Regarder les logs du nœud "Knowledgebase Lookup"
   - Si aucun résultat → Question manquante → Ajouter entrée dans Google Sheets

### Questions Fréquentes à Anticiper

Basé sur votre secteur (CCaaS), voici des questions probables à ajouter :

**FAQ Manquantes (à ajouter) :**
- "Quelles certifications avez-vous ?"
- "Supportez-vous Salesforce / Dynamics ?"
- "Combien d'agents formez-vous par jour ?"
- "Quelle est votre expérience en banque / assurance ?"
- "Proposez-vous du support en arabe ?"
- "Peut-on garder nos numéros de téléphone existants ?"
- "Quelle bande passante Internet faut-il pour CCaaS ?"

---

## 📊 Structure Recommandée pour Croissance

Quand votre base dépassera 50 entrées, organisez-la en **plusieurs feuilles** :

### Feuille 1 : FAQ (Questions Clients)
- Catégories : Prix, Délais, Risques, Technique, Support

### Feuille 2 : Services & Offres
- Catégories : Migration CCaaS, Optimisation CX, IA Conversationnelle, Infrastructure

### Feuille 3 : Processus & Méthode
- Catégories : Phases, Livrables, Engagement, SLA

### Feuille 4 : À Propos & Contact
- Catégories : Équipe, Valeurs, Partenaires, Témoignages, Contact

### Feuille 5 : Comparaisons & Guides
- Catégories : Genesys vs AWS, On-prem vs Cloud, Guides techniques

---

## 🚨 Troubleshooting

### Problème 1 : L'AI ne trouve aucune réponse

**Cause :** Le nœud Google Sheets ne retourne rien.

**Solution :**
1. Vérifier l'ID du Google Sheet dans n8n
2. Vérifier que le nom de la feuille est `Knowledgebase` (sensible à la casse)
3. Tester manuellement le nœud dans n8n (bouton "Test step")
4. Vérifier les permissions Google (le compte Google doit avoir accès au sheet)

### Problème 2 : L'AI répond "n'est pas dans la base" alors que l'info existe

**Cause :** Les mots-clés ne matchent pas la question de l'utilisateur.

**Solution :**
1. Enrichir la colonne "Mots-Clés" avec plus de variantes
2. Ajouter des synonymes (ex: "prix" → "prix,tarif,coût,budget")
3. Améliorer le prompt de l'AI pour faire une recherche plus flexible

### Problème 3 : Réponses trop longues

**Cause :** L'AI copie toute la réponse du Google Sheet.

**Solution :**
Modifier le prompt système :
```
When using Get Knowledgebase:
- Summarize long answers (max 4 bullets)
- Always end with the URL for full details
- If the user wants more, THEN provide the full response
```

---

## ✅ Checklist Post-Import

- [ ] Fichier CSV importé dans Google Sheets
- [ ] Feuille renommée en `Knowledgebase`
- [ ] ID du Google Sheet copié
- [ ] Nœud n8n "Knowledgebase Lookup" configuré avec le bon ID
- [ ] Nom de la feuille correct dans n8n (`Knowledgebase`)
- [ ] Workflow n8n sauvegardé
- [ ] Test réussi : "Combien coûte une migration ?" → Réponse correcte
- [ ] Test réussi : "Quels services proposez-vous ?" → Réponse correcte
- [ ] Test réussi : "Je veux prendre RDV" → Processus fonctionne
- [ ] Prompt système amélioré avec instructions claires
- [ ] Logging désactivé dans `ai-chat-modal.tsx` (console.log en prod)

---

## 🎯 Prochaines Étapes

**Cette semaine :**
1. ✅ Importer le CSV dans Google Sheets
2. ✅ Configurer n8n avec le bon ID
3. ✅ Tester 10 questions différentes
4. Ajouter 5-10 nouvelles FAQ basées sur vos vraies questions clients

**Semaine prochaine :**
5. Créer le workflow de web scraping automatique (pour sync quotidienne)
6. Ajouter des études de cas clients (anonymisées)
7. Enrichir avec des comparaisons produits détaillées

**Mois prochain :**
8. Analyser les logs n8n pour identifier questions manquantes
9. Migrer vers RAG + Vector DB si base > 100 entrées
10. A/B tester différents prompts système

---

## 📞 Support

**Questions sur ce guide ?**
- Email : contact@onex-technology.com
- L'assistant IA peut aussi vous aider ! 😉

---

**Date de création :** 18 janvier 2026
**Dernière mise à jour :** 18 janvier 2026
**Version :** 1.0

✅ **Votre base de connaissances est maintenant prête à alimenter votre AI Agent !**
