import { Flex, Button } from 'antd'
import s from '../Header.module.scss'

interface Props {
  onItemClick?: () => void
  className?: string
}

export const Navbar = ({ onItemClick, className }: Props) => {
  const navItems = [
    { label: 'О нас', href: '#about' },
    { label: 'Результаты лечения', href: '#methods' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' }
  ]

  return (
    <Flex gap='small' wrap className={className}>
      {navItems.map((item) => (
        <Button
          key={item.href}
          href={item.href}
          color='primary'
          variant='filled'
          className={s.button}
          onClick={onItemClick}
        >
          {item.label}
        </Button>
      ))}
    </Flex>
  )
}
