import React from 'react'
import {Skilllist} from  "../../Utils/Skilllist"
import './Skill.css'
import { motion} from "framer-motion"
const Skill = () => {
  return (
   <>
     <div className="container skill " id='skills'>
   
        <h1 className="col-12 mt-3 mb-1 ">Skills/Technologies</h1>
       
       
        <p className="pb-3" >
          Including programming Languages, frameworks, databses, front-end
          and back-end tools, and APIs
        </p>
        
        <div className="row">
          {Skilllist.map((skill) => (
            <div key={skill._id} className="col-md-3">
              <motion.div whileHover={{ scale: 1.1 }}  className="card m-2 ">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <skill.icon className="skill-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{skill.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
   </>
  )
}

export default Skill
