import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { Avatar, Button, Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { headerStore } from 'features/Header'
import Logo from 'assets/icon/logo.svg'
import s from './Header.module.scss'
import { Navbar } from './Navbar'
import { observer } from 'mobx-react-lite'

export const Header = observer(() => {
  const navigate = useNavigate()
  const { Title, Text } = Typography

  const handleLogoClick = () => {
    navigate('/')
    headerStore.closeMenu()
  }

  const handleOpenBurgerMenu = () => {
    headerStore.toggleMenu()
  }

  return (
    <>
      <Flex align='center' justify='space-between' className={s.header}>
        <Flex
          className={s.logoBlock}
          align='center'
          gap='small'
          onClick={handleLogoClick}
        >
          <Avatar size={54} src={Logo} className={s.avatar} />
          <Flex vertical className={s.titleBlock}>
            <Title level={3}>Клиника витилиго</Title>
            <Text>доктора А.А. Касымхановой</Text>
          </Flex>
        </Flex>
        <Flex className={s.navbar}>
          <Navbar />
        </Flex>
        <Button
          color='primary'
          variant='filled'
          className={s.buttonMenu}
          onClick={handleOpenBurgerMenu}
          icon={headerStore.isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        />
      </Flex>
      {headerStore.isMenuOpen && (
        <Flex className={s.mobileMenu}>
          <Navbar onItemClick={() => headerStore.closeMenu()} />
        </Flex>
      )}
    </>
  )
})
