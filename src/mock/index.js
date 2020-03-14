const mockjs = require('mockjs')
const delay = require('mocker-api/utils/delay')
const DELAY_TIMER = 1000

const data = {
  'GET /api/user': {
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
  },
  'POST /api/list': (req, res) => {
    let mock = mockjs.mock({
      'list|10-100': 1
    })
    res.send(mock)
  }
}

module.exports = delay(data, DELAY_TIMER)
