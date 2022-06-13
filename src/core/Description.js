import React from 'react'

function Description() {
  return (
    <div className="container py-5 shadow-lg">
        <div className="header text-center py-5">
            <h1>Application Letter</h1>
        </div>
        <div className="">
            <div className="d-flex" > 
            <span>Name:</span>
            <span className="fw-bold"> John Michael Micosa Buan </span>
            </div>
            <div className="d-flex" > 
            <span>Address:</span>
            <span className="fw-bold"> #143 purok3 barangay Majada Out Calamba Laguna </span>
            </div>
            <div className="d-flex" > 
            <span>Date:</span>
            <span className="fw-bold"> May 7 2022 </span>
            </div>
            <div className="d-flex pt-3" > 
            <span className="fw-bold"> Definitely Not Your Developer IT services </span>
            </div>

            <div className="d-flex pt-4" > 
            <span > Dear Maam/Sir </span>
            </div>   
            <div className="d-flex" > 
            <span className="pt-3" > Good day! </span>
            </div>

                    <div className="py-4">
                        <span> I am <span className="fw-bold">John Michael Micosa Buan </span>, a G-12 student from Camp Vicente Lim Integrated School, I am experienced developer asking
                         for your permision to hire me as your non-salary 80hours worker for work immersion.  </span>
                         <div>
                         <span>
                             I am aware about the task to be done for it is also what I am doing. We are tasked to do some workloads that are related to our strand but in my case I am working in IT industry so I am hoping to get a chance to 
                             gain experience from this company. I am looking forward to work in this company. Thank you and God bless.
                         </span>
                         </div>
                        <div className="py-4" >
                        <span>
                            Respectfully yours, <br/>
                            <span className="py-2 fw-bold"> John Michael Micosa Buan </span>
                        </span>
                        </div>

                    </div>

        </div>
    </div>
  )
}

export default Description