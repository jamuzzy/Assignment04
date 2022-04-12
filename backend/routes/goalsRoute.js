const express = require('express')
const router = express.Router(); //router.get('/', getGoals);
//const {getGoal} = require('../controllers/goalController') 


router.get('/', (req,res) =>{
  res.status(200).json({Message: 'Get student'})
});
router.post('/', (req,res) =>{
  res.status(200).json({Message: 'Set student'})
});
router.put('/:id', (req,res) =>{
  res.status(200).json({Message: ` Update student ${req.params.id}.`})
});
router.delete('/:id', (req,res) =>{
  res.status(200).json({Message: ` delete student ${req.params.id}.`})
});

//@Descp Get Goal @route Get/api/goals/:id
//@access private  
/*const  getGoal =  (req,res) =>{
 res.status(200).json({Message: 'Get goal'})
 }
const  setGoal= (req, res) =>{
  res.status(200).json({message:'Create a goal.'}); 
}
const  updateGoal =  (req, res) =>{
  res.status(200).json({message:` Update goal ${req.params.id}.`});
 }
 //@Descp delete Goal @route Delete /api/goals/:id
 //@access private 
 const  deleteGoal = (req, res) =>{
  res.status(200).json({message:` delete goal ${req.params.id}.`});
 }*/
module.exports = router; 
  //{getGoals, setGoal,
    //updateGoal,deleteGoal,}