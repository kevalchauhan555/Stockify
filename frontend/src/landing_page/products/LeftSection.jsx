import React from 'react'

function LeftSection({imageURL,productName,productDesription,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className='container mb-5'>
      <div className="row">
        <div className="col-5">
          <img src={imageURL} alt="Image"/>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
          <a href={tryDemo} style={{textDecoration:'none',color:'rgba(26, 68, 235, 0.95)'}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={learnMore} style={{marginLeft:"50px",textDecoration:'none',color:'rgba(26, 68, 235, 0.95)'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
         <div className='mt-3'>
         <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="image"/></a>
         <a href={appStore} style={{marginLeft:"40px"}}><img src="media/images/appstoreBadge.svg" alt="image"/></a>
         </div>
          
        </div>
      </div>

    </div>
  )
}

export default LeftSection