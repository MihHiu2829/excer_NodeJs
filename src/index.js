const  express = require('express')
const app = express() 

app.listen(8080)
const rootRouter  = require('./routes/rootRouter')
app.use(rootRouter) 



