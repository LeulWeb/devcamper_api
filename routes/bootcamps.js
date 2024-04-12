const express = require('express')
const router = express.Router()

const {index, show, update, store , destroy} = require('../controller/bootcamps')

router.route('/').get(index).post(store)

router.route('/:id').get(show).put(update).delete(destroy)


module.exports = router