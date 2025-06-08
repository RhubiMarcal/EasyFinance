import styled from 'styled-components'
import { BreakPoint } from '../../styles'

export const ListItenDashboard = styled.ul<{
  page: 'Histórico' | 'Limites' | 'Metas'
}>`
  padding-block: 30px;
  display: ${({ page }) => (page == 'Limites' ? 'grid' : 'flex')};
  ${({ page }) =>
    page == 'Limites' &&
    `
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  `}
  flex-direction: column;
  gap: 12px;

  @media (max-width: ${BreakPoint.tablet}) {
    display: flex;
  }
`
