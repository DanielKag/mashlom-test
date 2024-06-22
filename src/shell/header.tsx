import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <img src="/logo.png"></img>
      <nav>
        <ul>
          <li>
            <Link to={``}>Home</Link>
          </li>
          <li>
            <Link to={`phototherapy`}>Phototherapy</Link>
          </li>
          <li>
            <Link to={`triage`}>Triage</Link>
          </li>
          <li>
            <Link to={`protocol`}>Protocol</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  )
}
