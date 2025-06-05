import { FormEvent } from 'react'
import { TitleSecondary } from '../../styles'
import { FormsContainer, Overlay } from './styles'

type Props = {
  children: JSX.Element
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  onClose?: () => void
  title: string
  isModal: boolean
  active: boolean
}

const FormModel = ({
  children,
  onSubmit,
  title,
  isModal,
  active,
  onClose
}: Props) => {
  if (isModal) {
    return (
      <Overlay active={active} onMouseDown={onClose}>
        <FormsContainer
          modal
          action=""
          onSubmit={onSubmit}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <TitleSecondary>{title}</TitleSecondary>
          {children}
          <div onClick={onClose} className="Close">
            X
          </div>
        </FormsContainer>
      </Overlay>
    )
  } else {
    return (
      <FormsContainer modal action="" onSubmit={onSubmit}>
        <TitleSecondary>{title}</TitleSecondary>
        {children}
      </FormsContainer>
    )
  }
}

export default FormModel
