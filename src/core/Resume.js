import React from 'react'
import "../App.css";


function Resume() {
  return (
    <div className="container my-5 shadow-lg background">
        <div className="">
          <div className="text-center py-4">
            <h1>RESUME</h1>
          </div>
        <div className="d-flex p-5">
            <img  className="rounded-circle border border-3 border-dark" src="./pogisimaykelsobra.jpg" alt="" />
        </div>
        <div className="d-flex flex-row-reverse pb-5">
                <h1>John Michael Micosa Buan</h1>
            </div>
        <div className="py-5  d-flex">
            <div className="fw-bold w-50">
                Phone: <br /> <span className="fw-normal">09154184580</span> <br/> <br/>
                Email: <br /> <span className="fw-normal">johnmichaelbuan21@gmail.com</span> <br/> <br /> 
                Address: <br /> <span className="fw-normal"> #143 purok 3 barangay Majada Out Calamba Laguna, 4027 </span> <br/> <br/>
                Skills: <br /> <span className="fw-normal">
                    HTML <br/>
                    CSS <br/> 
                    JavaScript <br/> 
                    React <br/> 
                    Angular <br/> 
                    Express Js <br/> 

                 </span>
            </div>
            <div className="fw-bold ">
                <h5>Education:</h5> <span className="fw-normal"> Palo Alto Integrated School, <span className="fw-bold">SY(2019,2020)</span>
                  <br /> Majada Out Elementary School <span className="fw-bold">SY(2015,2016)</span> </span> <br/> <br/>
                  <h3> Experience </h3> 
                  <span className="fw-bold">Freelance, Assist Developer and Frontend Developer</span> <br/> 
                  <span className="fw-normal"> (November 2021 - May 2022) </span> <br/> <br/> <br/> <br/>
                  <span className="fw-bold"> I hereby certify that the following information above is true and correct to the best of my knowledge. </span>
                    <div className="text-center py-5">
                        <span className="underline pb-2">John Michael Micosa Buan</span> <br/>
                        <span className="fw-normal">Applicant</span>
                    </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Resume






