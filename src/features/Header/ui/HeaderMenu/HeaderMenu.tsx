import { Select, Flex, Segmented } from 'antd'
import { Typography } from 'antd'
import { getNavItems, headerStore, languageOptions } from 'features/Header'
import { useTranslation } from 'react-i18next'
import s from '../Header.module.scss'

interface Props {
  mobile?: boolean
  onItemClick?: () => void
}

export const HeaderMenu = ({ mobile = false, onItemClick }: Props) => {
  const { t, i18n } = useTranslation()
  const { Link } = Typography

  const navItems = getNavItems(t)

  const handleClose = (val: string) => {
    i18n.changeLanguage(val)
    headerStore.closeMenu()
  }

  return (
    <Flex
      align={mobile ? undefined : 'center'}
      gap={mobile ? 'middle' : 'large'}
      vertical={mobile}
    >
      {navItems.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          onClick={onItemClick}
          className={!mobile ? s.navLink : ''}
        >
          {item.label}
        </Link>
      ))}
      {mobile ? (
        <Segmented
          options={[
            { label: 'RU', value: 'ru' },
            { label: 'KZ', value: 'kz' },
            { label: 'EN', value: 'en' }
          ]}
          value={i18n.language}
          onChange={(val) => i18n.changeLanguage(val as string)}
          size='middle'
          className={s.mobileSelect}
        />
      ) : (
        <Select
          value={i18n.language}
          onChange={(val) => {
            handleClose(val)
          }}
          options={languageOptions}
          size='small'
        />
      )}
    </Flex>
  )
}
