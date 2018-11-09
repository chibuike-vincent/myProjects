const config = require('config')
const morgan = require('morgan')
const helmet = require('helmet')
const midleware = require('./middleware')
const courses = require('./routes/courses')
const home = require('./routes/home')
const express = require('express')
const startupDebugger = require('debug')("app:startup")
const dbDebugger = require('debug')("app:db")
const app = express()


app.set('view engine', 'pug')
app.set('views', './views')


//this is used to get the environment ur app is currently running on
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
// console.log(`app: ${app.get('env')}`)


//built-in middlewares in express
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
// third-party middlewares
app.use(helmet())
// app.use(morgan('tiny'))
app.use('/api/courses', courses)
app.use('/', home)

//setting the configuration of your app
console.log("Application Name:" + config.get('name'));
console.log("Mail Server:" + config.get('mail.host'));
console.log("Mail password:" + config.get('mail.password'));




//to display morgan msg in the dev environment
if(app.get('env') === 'development') {
  app.use(morgan('tiny'))
  // console.log('morgan enabled...')
  startupDebugger('morgan enabled...')
}

//developers middleware
app.use(midleware)


dbDebugger("starting the database")

app.use(function(req, res,next) {
  console.log("authenticating...")
  next()
})





const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
// app.post();
// app.delete();
// app.put();