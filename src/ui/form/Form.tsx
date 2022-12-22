import React, { ChangeEvent } from 'react'

type FormPropsType = {
  getCurrentWeather: (e: any) => void
  setCityName: (cityName: string) => void
}

export const Form: React.FC<FormPropsType> = ({
  getCurrentWeather,
  setCityName,
}) => {
  const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value)
  }

  return (
    <div className="search">
      <form onSubmit={getCurrentWeather}>
        <input type="text" onChange={onChangeCity} placeholder="search city" />
      </form>
    </div>
  )
}
