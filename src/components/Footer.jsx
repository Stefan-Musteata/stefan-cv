import { shared } from '../data/cv'

export function Footer({ t }) {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {shared.name}
      </p>
      <a href="#top">{t.footer.backToTop}</a>
    </footer>
  )
}
