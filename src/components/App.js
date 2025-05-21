
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    make: "",
    model: "",
    cardNumber: "",
    expiry: ""
  })
  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
  }
  function handleNext(){
    if(step < 3){
      setStep(prev => prev + 1)
    }
  }
  function handlePrev(){
    if(step > 1){
      setStep(prev => prev - 1)
    }
  }
  return (
    <div className="App">
        {/* Do not remove the main div */}
      <Step 
        step={step}
        formData={formData}
        handleChange={handleChange}
        nextStep={handleNext}
        prevStep={handlePrev}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
