import React from 'react'

const Step = ({step, handleChange, formData, nextStep, prevStep, handleSubmit}) => {
  return (
    <div className='step'>
      { step === 1 && 
        <>
          <h1>Customer Details</h1>
          <label htmlFor='first_name'>First Name:</label><br/>
          <input 
            type="text" 
            id='first_name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='First Name'
          />
          <label htmlFor='last_name'>Last Name:</label><br/>
          <input 
            type="text" 
            id='last_name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
          />
        </>
      }
      { step === 2 && 
        <>
          <h1>Car Details</h1>
          <label htmlFor='make'>Brand:</label><br/>
          <input 
            type="text" 
            id='make'
            name='make'
            value={formData.make}
            onChange={handleChange}
            placeholder='Brand'
          />
          <label htmlFor='model'>Model:</label><br/>
          <input 
            type="text" 
            id='model'
            name='model'
            value={formData.model}
            onChange={handleChange}
            placeholder='Model'
          />
        </>
      }
      { step === 3 && 
        <>
          <h1>Payment Details</h1>
          <label htmlFor='card_info'>Credit Card Number:</label><br/>
          <input 
            type="text" 
            id='card_info'
            name='cardNumber'
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder='Card-Number'
          />
          <label htmlFor='expiry_date'>Expiration Date:</label><br/>
          <input 
            type="text" 
            id='expiry_date'
            name='expiry'
            value={formData.expiry}
            onChange={handleChange}
            placeholder='Expiry Date'
          />
        </>
      }
      <div className='buttons-container'>
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  )
}

export default Step