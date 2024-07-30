// https://mainnet.infura.io/v3/b47f8049fa274d2d97b7624e6f81207c
export async function utilhandler(req, res) {
  const time = new Date().toLocaleTimeString()
  try {
    const response = await fetch('http://0.0.0.0:7545', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_gasPrice',
        id: 1,
      }),
    })
    const data = await response.json()

    res.status(200).json({
      data,
      time,
    })
  } catch (e) {
    res.status(500).json({
      error: e.message,
    })
  }
}

// post
export async function postApiHandler(req, res) {
  const { body } = req
  const { appname, reqprovider, reqmode } = body
  const provider = reqprovider == null ? 'default' : reqprovider
  if (appname == null || reqmode == null || provider == null) {
    res.status(400).json({
      error: 'error api format',
    })
  } else {
    try {
      const response = await fetch('http://0.0.0.0:7545', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: reqmode,
          id: 1,
        }),
      })
      const data = await response.json()

      res.status(200).json({
        appname,
        provider,
        data,
      })
    } catch (e) {
      res.status(500).json({
        error: [e],
      })
    }
  }
}

// get
