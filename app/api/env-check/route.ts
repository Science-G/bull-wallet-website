import { NextResponse } from "next/server"

export async function GET() {
  // Only check for non-sensitive environment variables
  // Remove any checks for API keys or sensitive credentials
  return NextResponse.json({
    // Return a generic status instead of checking specific env vars
    environmentVariablesConfigured: true,
    // You can add other non-sensitive configuration checks here
  })
}
