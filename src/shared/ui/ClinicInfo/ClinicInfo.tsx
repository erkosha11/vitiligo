import { Avatar, Flex, Typography } from 'antd'
import logo from 'assets/logo.svg'
import styles from './ClinicInfo.module.scss'

const { Title, Text } = Typography

export const ClinicInfo = () => {
  return (
    <Flex align='center' gap={12}>
      <Avatar src={logo} size={64} />
      <div>
        <Title level={4} className={styles.title}>
          Клиника витилиго
        </Title>
        <Text type='secondary'>доктора А.А. Касымхановой</Text>
      </div>
    </Flex>
  )
}
