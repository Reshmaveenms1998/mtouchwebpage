import React from 'react'

const Dashboard = ()=>{
    return(
        <div className='container-fluid'>
        <div className='row mt-5'>
        <div className='card col-lg-4 col-md-3 col-sm-6 col-xs-12 ' style={{width:'18rem',marginLeft:'4%'}}>
                             <div className='card-body'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16" style={{marginLeft:"25%",color:"lightpink"}}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>
                             <p className="card-text mt-5" style={{textAlign:"center"}}>Total number of posts.</p>
                             </div>
                             </div>
        <div className='card col-lg-4 col-md-3 col-sm-6 col-xs-12 ' style={{width:'18rem',marginLeft:'4%'}}>
        
                             <div className='card-body'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16" style={{marginLeft:"25%",color:"lightpink"}}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>
                             <p className="card-text mt-5" style={{textAlign:"center"}}>Total number of pages.</p>
                             </div>
                             </div>
        <div className='card col-lg-4 col-md-3 col-sm-6 col-xs-12 ' style={{width:'18rem',marginLeft:'4%'}}>
                             <div className='card-body'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16" style={{marginLeft:"25%",color:"lightpink"}}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>


                             <p className="card-text mt-5" style={{textAlign:"center"}}>Total number of Authors.</p>
                             </div>
                             </div>
                             <div className='card col-lg-4 col-md-3 col-sm-6 col-xs-12 ' style={{width:'18rem',marginLeft:'4%'}}>
                             <div className='card-body'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16" style={{marginLeft:"25%",color:"lightpink"}}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>
                             <p className="card-text mt-5" style={{textAlign:"center"}}>Total number of Tags.</p>
                             </div>
                             </div>
                             </div>
                             <h3 style={{textAlign:'center',marginTop:"4%"}}>Latest 5 Published Post List</h3>
                             <div className='row' style={{marginLeft:"5%",marginTop:"6%",width:"80%"}}>
                             <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  This is a light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert—check it out!
</div>

                             </div>
                             </div>
                             
                            

    )
}

export default Dashboard