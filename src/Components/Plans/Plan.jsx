import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plan.css'
const Plan = () => {
  return (
   <div className="plans-container" id="charges">
       <div className="programs-header" style={{gap:"2rem"}}>
           <span className="stroke-text">READY TO START</span>
           <span>YOUR JOURNEY</span>
           <span className="stroke-text">NOW WITHUS</span>
       </div>
       <div className="plans">
           {plansData.map((plan,i)=>(
               <div className="plan" key={i}>
                   {plan.icon}
                   <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                       {plan.features.map((feature,i)=>(
                        <div className="feature">
                          <img src={whiteTick} alt="whiteTick"/>
                           <span key={i}>{feature}</span>
                            </div>
                        ) )}
                    </div>
                    <a href="#join-us" ><button className="btn" >Join now</button></a>
                    
               </div>
           ))}
       </div>
   </div>
  )
}

export default Plan
