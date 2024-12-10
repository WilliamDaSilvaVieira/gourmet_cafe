const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

async function loadFinalPriceCollection() {
  const client = await mongodb.MongoClient.connect('', {
    // useNewUrlParser: true
  })

  return client.db('gourmet_cafe_db').collection('final_price_collection')
}

router.get('/', async (req, res) => {
  const price = await loadFinalPriceCollection();
  res.send(await price.find({}).toArray())
})

router.put('/:price', async (req,res) => {
  const price = await loadFinalPriceCollection();
  await price.updateOne({_id: new mongodb.ObjectId("67462f2d97733b969cf87d9f")}, { $inc: {final_price: new mongodb.Double( req.params.price)}})
  res.status(200).send() 
})

router.put('/reset/:price', async (req,res) => {
  const price = await loadFinalPriceCollection();
  await price.updateOne({_id: new mongodb.ObjectId("67462f2d97733b969cf87d9f")}, { $inc: {final_price: new mongodb.Double( req.params.price)}})
  res.status(200).send() 
})

module.exports = router;
