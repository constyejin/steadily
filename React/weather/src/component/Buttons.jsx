import React from 'react'
import { Button } from 'react-bootstrap';

export const Buttons = ({cities, setCity}) => {
  return (
    <div className='btn-list'>
      {
        cities.map((item, i) => {
          return <Button key={i} onClick={() => setCity(item)} variant="primary">{item}</Button>
        })
      }
      {/* <Button onClick={props.currentLocation} variant="primary">Current Location</Button>{' '}
      <Button onClick={(e) => props.cityWeather(e.target.innerHTML)} variant="secondary">Paris</Button>{' '}
      <Button onClick={(e) => props.cityWeather(e.target.innerHTML)} variant="success">Bangkok</Button>{' '} */}
    </div>
  )
}

export default Buttons;
