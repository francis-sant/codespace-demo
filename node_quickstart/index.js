const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";


app.post('/', (req, res) => {
  

  console.log(req);

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('mongodemo');
    const students = database.collection('student');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'jujiana', age: "18" };
    const result = await students.insertOne(query);

    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


