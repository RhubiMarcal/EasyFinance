import { useState } from 'react'
import { ToggleButtonContainer } from './styles'

type Props<T extends string> = {
  onChange: (value: T) => void
  buttonLeft: T
  buttonRight: T
  value: T
}

export const ToggleButton = <T extends string>({
  buttonLeft,
  buttonRight,
  onChange,
  value
}: Props<T>) => {
  const [position, setPosition] = useState<'esquerda' | 'direita'>(
    value === buttonLeft ? 'esquerda' : 'direita'
  )

  const handleClickLeft = () => {
    setPosition('esquerda')
    onChange(buttonLeft)
  }

  const handleClickRight = () => {
    setPosition('direita')
    onChange(buttonRight)
  }

  return (
    <ToggleButtonContainer>
      <button type="button" onClick={handleClickLeft}>
        {buttonLeft}
      </button>
      <button type="button" onClick={handleClickRight}>
        {buttonRight}
      </button>
      <div className={position} />
    </ToggleButtonContainer>
  )
}
