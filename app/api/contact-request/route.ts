import { NextRequest, NextResponse } from 'next/server'

interface ContactRequest {
  clientType: string
  firstname: string
  lastname: string
  accountNumber?: string
  country: string
  buyOrSell: string
  volume: string
  message: string
  email?: string
  phone?: string
  telegram?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json()

    // Validate required fields
    const requiredFields = ['clientType', 'firstname', 'lastname', 'country', 'buyOrSell', 'volume', 'message']
    for (const field of requiredFields) {
      if (!body[field as keyof ContactRequest]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate that at least one contact method is provided
    const contactMethods = [body.email, body.phone, body.telegram].filter(Boolean)
    if (contactMethods.length === 0) {
      return NextResponse.json(
        { error: 'At least one contact method is required' },
        { status: 400 }
      )
    }

    // Prepare Slack message
    const slackMessage = {
      text: `OTC Contact Request from ${body.firstname} ${body.lastname}`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: `OTC Contact Request from ${body.firstname} ${body.lastname}`
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: formatSlackMessage(body)
          }
        }
      ]
    }

    // Send to Slack if webhook is configured
    const webhookUrl = process.env.OTC_CONTACT_WEBHOOK
    if (webhookUrl) {
      try {
        const slackResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(slackMessage),
        })

        if (!slackResponse.ok) {
          console.error('Failed to send to Slack:', await slackResponse.text())
        }
      } catch (error) {
        console.error('Error sending to Slack:', error)
      }
    }

    // Log the request (for debugging)
    console.log('OTC Contact Request:', {
      name: `${body.firstname} ${body.lastname}`,
      clientType: body.clientType,
      volume: body.volume,
      country: body.country,
      buyOrSell: body.buyOrSell,
      contactMethods: {
        email: body.email || 'Not provided',
        phone: body.phone || 'Not provided',
        telegram: body.telegram || 'Not provided'
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing contact request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function formatSlackMessage(data: ContactRequest): string {
  const fields = [
    `*clientType*: \`${data.clientType}\``,
    `*firstname*: \`${data.firstname}\``,
    `*lastname*: \`${data.lastname}\``,
    data.accountNumber ? `*accountNumber*: \`${data.accountNumber}\`` : null,
    `*country*: \`${data.country}\``,
    `*buyOrSell*: \`${data.buyOrSell}\``,
    `*volume*: \`${data.volume}\``,
    data.email ? `*email*: \`${data.email}\`` : null,
    data.phone ? `*phone*: \`${data.phone}\`` : null,
    data.telegram ? `*telegram*: \`${data.telegram}\`` : null,
    `*message*: \`\`\`${data.message}\`\`\``
  ].filter(Boolean)

  return fields.join('\n')
} 