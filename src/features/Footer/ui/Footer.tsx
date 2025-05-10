import { Avatar, Button, Card, Flex, Typography } from 'antd'
import s from './Footer.module.scss'
import { InstagramSVG, WhatsAppSVG } from 'assets/icon'
import { Navbar } from 'features/Header'
import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons'
import Logo from 'assets/icon/logo.svg'

export const Footer = () => {
  const { Paragraph, Title, Text, Link } = Typography

  const socialLinks = [
    {
      href: 'https://api.whatsapp.com/send/?phone=77474213961&text&type=phone_number&app_absent=0',
      icon: <WhatsAppSVG className={s.icon} />,
      label: 'WhatsApp'
    },
    {
      href: 'https://www.instagram.com/vitiligoclinic.kz/',
      icon: <InstagramSVG className={s.icon} />,
      label: 'Instagram'
    }
  ]

  const workingHours = () => [
    { day: 'Понедельник', time: '08:00–18:00' },
    { day: 'Вторник', time: '12:00–19:00' },
    { day: 'Среда', time: '08:00–18:00' },
    { day: 'Четверг', time: '12:00–19:00' },
    { day: 'Пятница', time: '08:00–18:00' },
    { day: 'Суббота', time: '09:00–13:00' },
    { day: 'Воскресенье', time: 'Выходной' }
  ]

  const contacts = [
    {
      icon: <PhoneOutlined />,
      text: '+7 (708) 978-20-70',
      link: 'tel:+77089782070'
    },
    {
      icon: <PhoneOutlined />,
      text: '+7 (727) 978-20-70',
      link: 'tel:+77279782070'
    },
    {
      icon: <PhoneOutlined />,
      text: '+7 (747) 431-39-61',
      link: 'tel:+77474313961'
    },
    {
      icon: <EnvironmentOutlined />,
      text: 'Айтиева 46, Алматы',
      link: 'https://go.2gis.com/93Rs5'
    }
  ]

  return (
    <Card variant='borderless' className={s.footer}>
      <Card variant='borderless' className={s.footerBody}>
        <Flex wrap gap='large' justify='space-between' className={s.cards}>
          <Flex vertical className={s.card}>
            <Flex className={s.logoBlock} align='center' gap='small'>
              <Avatar size={48} src={Logo} className={s.avatar} />
              <Flex vertical className={s.titleBlock}>
                <Title level={4}>Клиника витилиго</Title>
                <Text>доктора А.А. Касымхановой</Text>
              </Flex>
            </Flex>
            <Paragraph className={s.subtitle}>
              Специализированный медицинский центр по <br /> лечению витилиго
              под руководством доктора <br /> А.А. Касымхановой.
            </Paragraph>
          </Flex>

          <Flex vertical className={s.card}>
            <Title className={s.titleCard} level={3}>
              Навигация
            </Title>
            <Navbar className={s.nav} />
          </Flex>

          <Flex vertical className={s.card}>
            <Title className={s.titleCard} level={3}>
              Контакты
            </Title>
            {contacts.map((item, index) => (
              <Flex gap='large' className={s.hours} key={index}>
                <Text>{item.icon}</Text>
                <Text>
                  <Link
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.text}
                  </Link>
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex vertical className={s.card}>
            <Title className={s.titleCard} level={3}>
              Рабочие часы
            </Title>
            {workingHours().map((item) => (
              <Flex justify='space-between' gap='large' className={s.hours}>
                <Text>{item.day}:</Text> {item.time}
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex justify='start' align='center' gap='small'>
          {socialLinks.map((item) => (
            <Button
              key={item.label}
              className={s.social}
              shape='circle'
              color='default'
              variant='filled'
              href={item.href}
              aria-label={item.label}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.icon}
            </Button>
          ))}
        </Flex>
      </Card>
      <Flex className={s.byDesign} align='center' justify='space-between' wrap>
        <Paragraph>© 2025 Все права защищены.</Paragraph>
        <Paragraph>
          Design & Developed by{' '}
          <Link href='https://www.instagram.com/dreamoferkosha/'>
            dreamoferkosha
          </Link>
        </Paragraph>
      </Flex>
    </Card>
  )
}
