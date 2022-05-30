import React from 'react'

const Form = (props) => {
  const {children,...other} = props
  
    return (
    <div>
        <form noValidate autoComplete='off' {...other}>
            {children}
        </form>
    </div>
  )
}

export default Form
