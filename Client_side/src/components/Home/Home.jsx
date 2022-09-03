import React from 'react'

import image from "../../img/Learning-amico.png"

function Home() {
  return (
    <div>
     <div className='container my-2'>
<div className='row'> 
<div className='col-md-6 my-auto'>
<h2>Welcome To <span className='text-primary'>Online</span> Education</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio placeat dolorem commodi, quaerat tempore, laudantium in ipsum aspernatur nulla soluta doloribus cumque perferendis libero tempora amet mollitia voluptatem ab. Vitae?</p>
<button className='btn btn-primary'> Get Started </button>
</div>
<div className='col-md-6'>
  <img src={image} className="img-fluid"></img>
</div>
</div>
     </div>
    
    </div>
  )
}

export default Home