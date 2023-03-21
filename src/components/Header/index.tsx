import { HaederContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'

import LogoTimer from '../../assets/logo-timer.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HaederContainer>
      <img src={LogoTimer} alt="Timer" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HaederContainer>
  )
}
