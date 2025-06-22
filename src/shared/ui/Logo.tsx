import { Avatar, Flex, Typography } from 'antd'
import LogoSVG from 'assets/icon/logo.svg?react'
import s from './Logo.module.scss'

export const Logo = () => {
  const { Title, Text } = Typography
  return (
    <Flex align='center'>
      <Avatar icon={<LogoSVG />} size={52} className={s.logo} />
      <Flex vertical>
        <Title level={5}>Клиника витилиго</Title>
        <Text>доктора А.А. Касымхановой</Text>
      </Flex>
    </Flex>
  )
}
