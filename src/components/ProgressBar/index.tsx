import { ProgressBarContainer } from './styles'

type Props = {
  progress: number
  color: 'green' | 'darkBlue'
}

const ProgressBar = ({ color, progress }: Props) => (
  <ProgressBarContainer color={color} progress={progress}>
    <div />
    <p>{progress}%</p>
  </ProgressBarContainer>
)

export default ProgressBar
