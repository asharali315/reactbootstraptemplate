import React, { useState } from 'react'

export function useForm(initailValue) {

    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetFormControls = () => {
        setValues(initialValue);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
    }
}