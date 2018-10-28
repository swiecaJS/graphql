const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const PORT = 4000

app.use('/graphql', graphqlHTTP({

}));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})