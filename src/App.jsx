/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-19 15:27:14
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-29 21:17:40
 * @FilePath: /review/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState,useEffect} from "react";
import reviews from "./data";
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'
const App = () => {
  const [index,setIndex]=useState(0)
  const {name,job,image,text}=reviews[index]
  const pre=()=>{
    setIndex((pre_value)=>{
      const new_value=pre_value-1
      if (new_value<0){
        return reviews.length-1
      }
      return new_value
    })}
    
  const next=()=>{
    setIndex((pre_value)=>{
      const new_value=pre_value+1
      if (new_value>reviews.length-1){
        return 0
      }
      return new_value
    })}

    const randomNumber=()=>{
      let number=Math.floor(Math.random()*reviews.length)
      setIndex(number)
    }
  return (
    <main>
      <article className="review">
        <div className='img-container'>
          <img src={image} alt={name} className="person-img"/>
          <span className="quote-icon"><FaQuoteRight/></span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={pre}><FaChevronLeft/></button>
          <button className="next-btn" onClick={next}><FaChevronRight/></button>
        </div>
        <button className="btn btn-hipster" onClick={randomNumber}>Suprise me</button>
      </article>
      
    </main>
  )
};
export default App;
