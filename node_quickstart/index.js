//setupfor the server to run 

const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";

//transform to json
app.use(bodyParser.json())



app.post('/', (req, res) => {

console.log(req.body);

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('mongodemo');
    const students = database.collection('student');
    // Query for a movie that has the title 'Back to the Future'
    // const query = { name: 'jujiana', age: "18" };
    const result = await students.updateOne(req.body,  { $set: { "age" : 3 } });



    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

res.send("hello you")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


