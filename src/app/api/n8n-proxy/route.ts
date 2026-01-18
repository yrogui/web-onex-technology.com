import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy API pour le webhook n8n
 * Contourne les problèmes CORS en passant par le serveur Next.js
 *
 * ⚠️ SOLUTION TEMPORAIRE - Préférez configurer CORS directement dans n8n
 */

const N8N_WEBHOOK_URL =
  "https://n8n.expertiaacademy.com/webhook/78de5190-132b-4220-8df8-a7945a444927";

export async function POST(request: NextRequest) {
  try {
    // Récupérer le body de la requête
    const body = await request.json();

    // Appeler le webhook n8n
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Erreur n8n: ${response.status} ${response.statusText}`);
    }

    // Récupérer la réponse
    const data = await response.json();

    // Renvoyer la réponse avec headers CORS
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Erreur proxy n8n:", error);

    return NextResponse.json(
      {
        error: "Erreur lors de la communication avec l'assistant IA",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

// Gérer les requêtes OPTIONS (preflight CORS)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
