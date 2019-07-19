const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('src/views'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//const express = require('express')
//const path = require('path')
//const PORT = process.env.PORT || 5000

//express()
  //.use(express.static(path.join(__dirname, 'public')))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
  //.listen(PORT, () => console.log(`Listening on ${ PORT }`))
