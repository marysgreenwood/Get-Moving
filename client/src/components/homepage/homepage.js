import React, {useState} from 'react'

function homepage() {
  return (
    <div className='homepage-container'>
      <video src='/images/movingvideo.mp4' autoPlay loop muted />
      <h1>MOVING?</h1>
      <p>We Help You Stay Organized!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('loginclick!')}
        >
          Login 
        </Button>
      </div>
    </div>
  );
}

export default homepage