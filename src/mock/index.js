const mockjs = require('mockjs')
const delay = require('mocker-api/utils/delay')
const DELAY_TIMER = 0

const json = (mock) => {
  return (req, res) => {

    Object.keys(req.query).length && console.log('[QUERY]', req.query)
    Object.keys(req.body).length && console.log('[BODY]', req.body)

    res.send(mock)
  }
}

const data = {
  'GET /user': json(
    {
      code: 0,
      msg: '成功',
      data: {
        rows: [
          {
            id: 1,
            name: '刘德华2'
          },
          {
            'id': 2,
            'name': '张学友'
          }
        ]
      }
    }
  ),
  'POST /list': json(
    mockjs.mock({
      'list|10-100': 1
    })
  ),
  'POST /list2': (req, res) => {

    let data = { id: 0 }
    if (req.body.id === 1) {
      data = { id: 1 }
    }
    json(data)(req, res)
  }
}

module.exports = delay(data, DELAY_TIMER)
