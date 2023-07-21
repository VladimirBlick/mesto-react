import logo from '../../images/header_logo.svg'
export default function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        className="logo"
        alt="Логотип"
      />
    </header>
  )
}