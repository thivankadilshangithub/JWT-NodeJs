const express = require('express');
const router = express.Router();
const {getGoals ,setGoals , updateGoals , deleteGoals } = require('../controllers/goalcontrollers');

/*
This is another way to write the routers
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).all.delete(deleteGoals)
 */

router.get('/' , getGoals)

router.post('/' , setGoals )

router.put('/:id' , updateGoals)

router.delete('/:id' , deleteGoals)

module.exports = router;