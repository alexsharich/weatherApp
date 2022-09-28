import React, { ChangeEvent, useState } from 'react'

type FormPropsType = {
  getCurrentWeather: (e: any) => void
  setCityName: (cityName: string) => void
}

export const Form: React.FC<FormPropsType> = ({ getCurrentWeather, setCityName }) => {

  const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value)
  }

  return (
    <form onSubmit={getCurrentWeather} >
      <input type="text" onChange={onChangeCity} placeholder='City' />
      <button>Get Current Weather</button>
    </form>
  )
}