const app = require('express')()

const route = require('./router')

app.use(route)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})