import React, {useState,useEffect} from 'react';
import axios from 'axios'
import style from "./Words.module.css"
function Words() {
    const [Words, setWords]=useState([])
    const [rank, setrank]=useState(0)
    const [Score, setScore]=useState(0)

    // Send a POST request to "rank" endpoint to get the student's rank
  const postdata=async ()=>{
   
        const Finalscore = { scoresList: Score };
     
        axios.post('http://localhost:4000/rank', Finalscore)
        .then(response => {setrank(response.data)
      }
            );
  }
  postdata();
  // Fetch the words list from "words" endpoint
    const fetchData = async () => {
    const { data } =await axios.get('http://localhost:4000/words')
    setWords(data);
    
      };
      useEffect(() => {
        fetchData();  
      }, []);
    
      var x=0;
      var s;
// Compare the correct answer with the chosen answer and calculate the score
    const  handleClick = async(e)=> {
       const btnvalue =e.target.innerText;  
       const correctvalue =e.target.value;  // Click Me

     if(btnvalue===correctvalue){
        
   alert("Your Answer Is Correct");
    x++;
    s=(x/10)*100;
    setScore(Score+s)
     }
       
     else{
        alert("Your Answer Is Wrong");
          }   
    }

  return (

    <div>
       
        <h2 className='text-center'>Words</h2>
        <div className='container py-5'>
  <div className='row'>{Words.map((Word) => (
 
        <div className="col-md-3 py-4" key={Word.id}>
     <div className={style.cardstyle}>
        <h5 className='my-4'>{Word.word}</h5>
        <div>
        <button className='btn btn-dark' value={Word.pos}  onClick={handleClick}>noun</button>
        <button className='btn btn-dark' value={Word.pos}  onClick={handleClick}>verb</button>
        <button className='btn btn-dark' value={Word.pos}  onClick={handleClick}>adverb</button>
        <button className='btn btn-dark' value={Word.pos}  onClick={handleClick}>adjective</button>
        </div>
        </div>

      </div>
  ))}

     
  </div>
  <div className="progress">
  <div className= "progress-bar" style={{width:`${Score}%`}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Score}%</div>

</div>
<p>YOUR RANK : {rank}</p>
<button className='btn btn-primary' onClick={() => {setrank(0); setScore(0)}}>Try Again</button>
  </div>

    </div>
  )
}

export default Words