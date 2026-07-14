import { useEffect } from 'react'

export function useReveal(lang) {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    nodes.forEach((node) => node.classList.remove('is-visible'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [lang])
}
