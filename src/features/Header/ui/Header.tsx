import s from './Header.module.scss'
import Logo from 'assets/logo/Logo.svg'
import { useTranslation } from 'react-i18next'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { Card, Flex, Avatar, Typography, Button } from 'antd'
import { HeaderMenu } from './HeaderMenu'
import { observer } from 'mobx-react-lite'
import { headerStore } from '../model/headerStore'

export const Header = observer(() => {
  const { t } = useTranslation()
  const { Title, Text } = Typography

  return (
    <>
      <Card variant='borderless' className={s.header} id='home'>
        <Flex justify='space-between' align='center'>
          <Flex gap='small' align='center'>
            <Avatar size={64} src={Logo} />
            <Flex vertical>
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
      </Card>

      {headerStore.isMenuOpen && (
        <HeaderMenu mobile onItemClick={() => headerStore.closeMenu()} />
      )}
    </>
  )
})
