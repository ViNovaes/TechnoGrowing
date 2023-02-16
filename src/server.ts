import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'
//importando flash messages
import flash from 'connect-flash'
//importando session
import session from 'express-session'


dotenv.config()
const server = express()

//fazendo o declaration merging de userId
declare module 'express-session' {
    interface SessionData {
      userId: string,
    }
}

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))


//POST
server.use(express.urlencoded({extended:true}))

//express session
server.use(
    session({
        name:'session',
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 3600000,
            expires: new Date(Date.now() + 3600000),
            httpOnly: true
        }
    })
)
server.use(flash())

server.use((req, res, next) => {
    
    if(req.session.userId) {
        res.locals.session = req.session
    }

    next()
})


server.use(mainRoutes)

server.listen(process.env.PORT)

server.use((req,res) =>{
    res.send("Página não encontrada")
})