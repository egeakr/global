import React from 'react'
import './giff.css';
import gif from '../home/gif/Modanın Yeni Tanımı.gif'
function giff() {
  return (
    <div>
      <img className='gif' src={gif} alt="" />
    </div>
  )
}

export default giff;