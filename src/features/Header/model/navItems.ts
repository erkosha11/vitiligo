export const NAV_ITEM_KEYS = ['home', 'advantages', 'about', 'results'] as const

export const getNavItems = (t: (key: string) => string) => [
  { key: 'home', label: t('nav.home'), href: '#home' },
  { key: 'advantages', label: t('nav.advantages'), href: '#advantages' },
  { key: 'about', label: t('nav.about'), href: '#about' },
  { key: 'results', label: t('nav.results'), href: '#results' }
]
