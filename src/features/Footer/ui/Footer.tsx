import { Card, Divider, Flex, Typography, Space, Button } from 'antd'
import {
  HeartFilled,
  InstagramOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'
import styles from './Footer.module.scss'
import { contacts, navLinks, workingHours } from 'shared/config'
import { ClinicInfo } from 'shared/ui'

const { Title, Text, Link } = Typography

export const Footer = () => {
  return (
    <Card className={styles.footer} variant='borderless'>
      <Flex wrap='wrap' justify='space-between' gap={32}>
        <Space direction='vertical' size={8} className={styles.space}>
          <ClinicInfo />
          <Text>
            Специализированный медицинский центр по лечению витилиго под
            руководством доктора А.А. Касымхановой.
          </Text>
          <Space>
            <Link href='https://www.instagram.com/vitiligoclinic.kz/'>
              <Button
                type='primary'
                icon={<InstagramOutlined />}
                size='large'
              />
            </Link>
            <Link href='https://api.whatsapp.com/send/?phone=77474213961&text&type=phone_number&app_absent=0'>
              <Button type='primary' icon={<WhatsAppOutlined />} size='large' />
            </Link>
          </Space>
        </Space>

        <Space direction='vertical' size={8} className={styles.space}>
          <Title level={4} className={styles.title}>
            Навигация
          </Title>
          {navLinks.map((link) => (
            <a href={link.href} className={styles.textLink}>
              <Text>{link.label}</Text>
            </a>
          ))}
        </Space>

        <Space direction='vertical' size={8} className={styles.space}>
          <Title level={4} className={styles.title}>
            Контакты
          </Title>
          {contacts.map((item, idx) => (
            <Text key={idx}>
              {item.icon} {item.text}
            </Text>
          ))}
        </Space>

        <Space direction='vertical' size={8} className={styles.space}>
          <Title level={4} className={styles.title}>
            Рабочие часы
          </Title>
          {workingHours.map(({ day, time, isDayOff }) => (
            <Text key={day}>
              {day}: {isDayOff ? <Text type='danger'>{time}</Text> : time}
            </Text>
          ))}
        </Space>
      </Flex>

      <Divider className={styles.bottomDivider} />

      <Flex className={styles.bottomBlock}>
        <Text type='secondary'>
          © {new Date().getFullYear()} Клиника витилиго. Все права защищены.
        </Text>
        <Space direction='vertical' className={styles.bottomRight}>
          <Text>
            Сделано с <HeartFilled className={styles.heart} /> для заботы о
            вашей коже
          </Text>
          <Text>
            Created by{' '}
            <Link href='https://github.com/erkosha11' target='_blank'>
              dreamoferkosha
            </Link>
          </Text>
        </Space>
      </Flex>
    </Card>
  )
}
