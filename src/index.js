const express = require("express")
const routes = require("./routes")

const app = express()

// configurado para express usar .JSON
app.use(express.json())

app.use(routes)


app.listen(3001)