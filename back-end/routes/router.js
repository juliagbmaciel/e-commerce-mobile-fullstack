const express = require('express');
const router = express.Router();
const Products = require('../firebaseConfig')
router.use(express.json());



router.post('/addProducts', async (req, res)=>{
    const data = req.body
    console.log(data)
    try{
        await Products.add(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json("falhou ao adicionar o produtos")
    }
})



router.get('/getAllProducts', async (req, res)=>{
    try{
        const data = await Products.get()
        const docs = data.docs.map((docs) => ({id:docs.id, ...docs.data()}))
        res.status(200).json(docs)
    }
    catch(err){
        res.status(500).json('falhou ao pegar os produtos')
    }
})


router.get('/getProduct/:id', async(req, res)=>{
    const id = req.params.id
    console.log(id)
    try{
        const product = await Products.doc(id).get()
        res.status(200).json(product.data())
        
    }catch(err){
        res.status(500).json('falhou ao pegar o produto')
    }
    
})

router.get('/search/:value', async (req, res) => {

    const value = req.params.value;

    try {
        const querySnapshot = await Products.where('title', '==', value).get();
        console.log(querySnapshot)

        if (querySnapshot.empty) {
            res.status(404).json('Produto não encontrado');
            return;
        }

        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                ...doc.data()
            });
        });

        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json('Falhou ao pegar o produto');
    }
});

router.post('/update', async(req, res)=>{
    const id = req.body.id;
    delete req.body.id;
    try{
        await Products.doc(id).update(req.body)
        return res.status(200).json("produto atualizado")
    }catch(err){
        return res.status(400).json('ocorreu um erro')
    }

})


module.exports = router;