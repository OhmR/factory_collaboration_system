// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

var url = 'mongodb://127.0.0.1:27017/';

export default async (req, res) => {
  MongoClient.connect(url).then((db) => {
    console.log("Connection successfully to server");
    // const taskJson = await findTasks(db.db('G306'), () => { });

    var collection = db.db('G306').collection("task")
    collection.find({}).toArray(function(err, tasks) {
      const taskJson = {};
      taskJson["res"] = 0;
      taskJson["data"] = tasks
      console.log("in find", taskJson)

      res.statusCode = 200;
      console.log("task", taskJson)
      res.json(taskJson);
    })
    db.close();
  })
}
