const LINKS = [
  { id: 'sobre', num: '01', label: 'Sobre' },
  { id: 'formacao', num: '02', label: 'Formação' },
  { id: 'projetos', num: '03', label: 'Projetos' },
  { id: 'contato', num: '04', label: 'Contato' },
]

function Nav({ onNavigate }) {
  const handleClick = (id) => (event) => {
    event.preventDefault()
    onNavigate(id)
  }

  return (
    <header className="nav">
      <a href="#top" className="nav-logo" onClick={handleClick('top')}>
        GI.
      </a>
      <nav className="nav-links">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={handleClick(link.id)}
          >
            <span className="nav-num">{link.num}</span>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Nav
