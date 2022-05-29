import { Link } from "react-router-dom"
import { BaseNavi } from "./Navigation.style"

export const Navigation = (props) => {
  return (
    <BaseNavi {...props}>
      <ul>
        <li>
          <Link to="/desk">Desk</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/reservation">Resservation</Link>
        </li>
      </ul>
    </BaseNavi>
  )
}
