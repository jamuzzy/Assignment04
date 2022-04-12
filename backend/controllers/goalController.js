const getGoal = (req,res)=>{
  res.status(200).json({Message : 'Get student'});
}

module.exports= {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}