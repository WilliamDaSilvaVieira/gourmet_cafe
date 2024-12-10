const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

async function loadProductsCollection() {
  const client = await mongodb.MongoClient.connect('', {
    // useNewUrlParser: true
  })

  return client.db('gourmet_cafe_db').collection('products_collection')
}

router.get('/', async (req, res) => {
  const products = await loadProductsCollection();
  res.send(await products.find({}).toArray())
})

router.get('/orders', async (req, res) => {
  const products = await loadProductsCollection();
  res.send(await products.find({order: {$gt: 0}}).toArray())
})

router.put('/:id/:sign', async (req,res) => {
  const products = await loadProductsCollection();
  await products.updateOne({_id: new mongodb.ObjectId(req.params.id)}, { $inc: {order: new mongodb.Int32( req.params.sign)}})
  res.status(200).send() 
})

router.put('/reset', async (req,res) => {
  const products = await loadProductsCollection();
  await products.updateMany({order: {$gt: 0}}, { $set: {order: new mongodb.Int32( 0)}})
  res.status(200).send() 
})

module.exports = router;
