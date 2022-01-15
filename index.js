const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://admin:admin123@cluster0.to4er.mongodb.net/'
const client = new MongoClient(url)
const dbName = 'pruebaMongo'

async function main (){
    await client.connect()
    console.log("conexión exitosa")
    
    const db = client.db(dbName)
    const collection = db.collection('Documents')
    
    // const insertResult = await collection.insertMany([{a:1}, {a:2}, {a:3}])
    // console.log("found document => ", insertResult)

    const filteredDocs = await collection.find({a:1}).toArray()
    console.log("elementos filtrados ", filteredDocs)

    // const updateResult = await collection.updateOne({a:4}, {$set: {b:9}})
    // console.log("resultados actualizados", updateResult)

    const deleteResult = await collection.deleteOne({b:9})
    console.log("elementos eliminados ", deleteResult)

    const filteredDocs2 = await collection.find().toArray()
    console.log("elementos filtrados ", filteredDocs2)
    
    return "done"
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())
