import React from 'react';
import {FC, useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

interface RadioProps {
  id: string,
  label: string,
  options: string[],
  updateValue: (inputValue: string) => void,
  value: string,
}

/**
 * Component for a radio input
 * 
 * @param id The id for the underlying html input
 * @param label The component label
 * @param options An array of strings representing the options for the underlying radio input
 * @param updateValue A function called whenever the user changes the 
 * input value. The function has the new input value as the sole argument. 
 * @param value The current value of the input
 */
const Radio: FC<RadioProps> = ({id, label, options, updateValue, value}) => {
  const handleOptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    updateValue(event.currentTarget.value)
  }
  return (
    <>
      <Card style={{pageBreakBefore: 'always', marginBottom: '1rem'}}>
        <Card.Body>
          {label}
          <Form.Group className="mb-3" controlId={label}>
          {options.map(option => (
            <Form.Check 
              type="radio"
              label={option}
              name={label}
              value={option}
              checked={option === value}
              onChange={handleOptionChange}
            />
          ))}
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  );
};

export default Radio
