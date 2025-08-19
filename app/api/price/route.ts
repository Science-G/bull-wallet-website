export const dynamic = 'force-dynamic'

type GetUserRateParams = {
  fromCurrency?: string
  toCurrency?: string
}

type GetIndexRateHistoryParams = {
  fromCurrency?: string
  toCurrency?: string
  fromDate?: string
  toDate?: string
  interval?: 'fifteen' | 'hour' | 'day'
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const method = body?.method as string
  const element = body?.params?.element ?? {}

  if (!method) {
    return Response.json({ error: { message: 'Missing method' } }, { status: 400 })
  }

  switch (method) {
    case 'getUserRate': {
      // Call upstream. If it fails or returns malformed data, surface an error.
      const upstream = await fetchRequired(process.env.NEXT_PUBLIC_RATE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: body.id ?? `${Date.now()}`, jsonrpc: '2.0', method: 'getUserRate', params: { element } }),
        // Do not cache
      })
      const json = await upstream.json().catch(() => ({} as any))
      validateUserRateResponse(json)
      return Response.json(json)
    }
    case 'getIndexRateHistory': {
      // Not supported by upstream as specified; return explicit error.
      return Response.json({ error: { message: 'getIndexRateHistory not supported by upstream' } }, { status: 400 })
    }
    default:
      return Response.json({ error: { message: `Unknown method: ${method}` } }, { status: 400 })
  }
}

async function fetchRequired(url?: string, init?: RequestInit) {
  if (!url) {
    return new Response(null, { status: 500, statusText: 'Missing NEXT_PUBLIC_RATE_ENDPOINT' })
  }
  const res = await fetch(url, init)
  if (!res.ok) {
    throw new Error(`Upstream error: ${res.status}`)
  }
  return res
}

function validateUserRateResponse(json: any) {
  if (!json || typeof json !== 'object') throw new Error('Malformed upstream response')
  if (!('result' in json) || !json.result || !('element' in json.result)) throw new Error('Missing result.element')
  const el = json.result.element
  if (typeof el.userPrice !== 'number') throw new Error('Missing userPrice')
  if (typeof el.fromCurrency !== 'string' || typeof el.toCurrency !== 'string') throw new Error('Missing currencies')
}


