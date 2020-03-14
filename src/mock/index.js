const mockjs = require('mockjs')
const delay = require('mocker-api/utils/delay')
const DELAY_TIMER = 1000

const json = (mock) => {
  return (req, res) => {
    req.body && console.log(req.body)
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
  )
}

module.exports = delay(data, DELAY_TIMER)
