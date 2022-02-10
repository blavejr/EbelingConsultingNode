const router = require('express').Router();
const { addListener } = require('../app');
const controller = require('../controllers/boards');


/* GET home page. */
router.post('/', function(req, res, next) {
    const title = req.body.title
    const stage = 1
    const result = controller.insertOne(title, stage)
    res.status(201)
    res.send(result)
  });

router.get('/', function(req, res, next) {
    const result = controller.findAll()
    res.send(result)
})

router.put('/:id ', function(req, res, next) {
    const stage = req.body.stage
    const id = req.params.id
    if (![1,2,3].includes(stage)){
        res.status(400)
        res.send
    }

    controller.update({stage: stage}, {where: {id: id}})
})

module.exports = router;
