import s from './Header.module.scss'
import Logo from 'assets/icon/Logo.svg'
import { useTranslation } from 'react-i18next'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { Card, Flex, Avatar, Typography, Button } from 'antd'
import { HeaderMenu } from './HeaderMenu'
import { observer } from 'mobx-react-lite'
import { headerStore } from 'features/Header'

export const Header = observer(() => {
  const { t } = useTranslation()
  const { Title, Text } = Typography

  return (
    <Card variant='borderless' className={s.header} bodyStyle={{ padding: 0 }}>
      <Flex className={s.headerContent}>
        <Flex className={s.logoBlock} align='center' gap='small'>
          <Avatar size={64} src={Logo} className={s.avatar} />
          <Flex vertical className={s.titleBlock}>
            <Title level={3}>{t('header.clinic_name')}</Title>
            <Text>{t('header.doctor_name')}</Text>
          </Flex>
        </Flex>

        <div className={s.desktopMenu}>
          <HeaderMenu />
        </div>

        <Button
          icon={headerStore.isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={() => headerStore.toggleMenu()}
          size='large'
          type='text'
          className={s.burgerButton}
        />
      </Flex>

      {headerStore.isMenuOpen && (
        <Card className={s.mobileMenu}>
          <HeaderMenu mobile onItemClick={() => headerStore.closeMenu()} />
        </Card>
      )}
    </Card>
  )
})
