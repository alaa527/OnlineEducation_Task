  let data = require('../../../JSON/TestData.json')

var array=data.wordList;
var scorearray=data.scoresList;

const words =async (req,res) =>{
try{
  const studentsdata=array.sort(() => Math.random() - Math.random()).slice(0,10)
         if(studentsdata.some(x=> x.pos === 'noun')&&studentsdata.some(x=>x.pos === 'adverb')&&studentsdata.some(x=>x.pos === 'adjective')&&studentsdata.some(x=>x.pos === 'verb'))
        { res.json(studentsdata)} 
        else{
         words(req,res)
        } 
} 
catch(err){
res.json({message:"ERROR",err})

}
    };
 
  const rank =async (req,res) =>{
  let {scoresList}=req.body;
   try{
    const score=await scorearray.filter(x=> x < scoresList)
    const finalscore=score.length *100/30;
    res.json(finalscore.toFixed(2))
      } 
   catch(err){
      res.json({message:"ERROR",err})
      } 
    }

module.exports={words,rank}