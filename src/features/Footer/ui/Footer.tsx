import {
  Card,
  Flex,
  Typography,
  Divider,
  Avatar,
  Button,
  Segmented
} from 'antd'
import {
  EnvironmentOutlined,
  HeartOutlined,
  PhoneOutlined
} from '@ant-design/icons'
import { useTranslation, Trans } from 'react-i18next'
import Logo from 'assets/icon/Logo.svg'
import s from './Footer.module.scss'
import { InstagramSVG, WhatsAppSVG } from 'assets/icon'
import { getNavItems, getWorkingHours } from 'shared/lib'
import i18n from 'i18n'

export const Footer = () => {
  const { Title, Text, Link } = Typography
  const { t } = useTranslation()
  const navItems = getNavItems(t)
  const workingHours = getWorkingHours(t)

  return (
    <Card className={s.footer} bodyStyle={{ padding: 0 }}>
      <Flex className={s.top} justify='space-between' wrap>
        <Flex className={s.card} vertical gap='small'>
          <Flex align='center' gap='small'>
            <Avatar size={48} src={Logo} />
            <Flex vertical>
              <Title level={4} className={s.title}>
                {t('header.clinic_name')}
              </Title>
              <Text className={s.subtitle}>{t('header.doctor_name')}</Text>
            </Flex>
          </Flex>
          <Text className={s.cardText}>{t('footer.card_text')}</Text>
          <Flex gap='small'>
            <Button
              href='https://www.instagram.com/vitiligoclinic.kz/'
              type='primary'
              icon={<InstagramSVG className={s.icons} />}
            />
            <Button
              href='https://api.whatsapp.com/send/?phone=77474213961&text&type=phone_number&app_absent=0'
              type='primary'
              icon={<WhatsAppSVG className={s.icons} />}
            />
          </Flex>
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
        </Flex>

        <Flex className={s.card} vertical gap='small'>
          <Title level={4} className={s.title}>
            {t('footer.navigation')}
          </Title>
          {navItems.map((item) => (
            <Link key={item.key} href={item.href} className={s.navLink}>
              {item.label}
            </Link>
          ))}
        </Flex>

        <Flex className={s.card} vertical gap='small'>
          <Title level={4} className={s.title}>
            {t('footer.contacts')}
          </Title>
          <Text className={s.contacts}>
            <PhoneOutlined /> +7 (708)978-20-70
          </Text>
          <Text className={s.contacts}>
            <PhoneOutlined /> +7 (727)978-20-70
          </Text>
          <Text className={s.contacts}>
            <PhoneOutlined /> +7 (747)431-39-61
          </Text>
          <Text className={s.contacts}>
            <EnvironmentOutlined />
            Айтиева 46, Алматы, Казахстан
          </Text>
        </Flex>

        <Flex className={s.card} vertical gap='small'>
          <Title level={4} className={s.title}>
            {t('footer.working_hours')}
          </Title>
          {workingHours.map((item, index) => (
            <Text key={index} className={s.hours}>
              <Text>{item.day}:</Text> {item.time}
            </Text>
          ))}
        </Flex>
      </Flex>

      <Divider />

      <Flex align='center' justify='space-between' className={s.bottom} wrap>
        <Text className={s.rights}>{t('footer.rights')}</Text>
        <Flex vertical align='end' className={s.footerFooter}>
          <Text className={s.loveText}>
            <Trans
              i18nKey='footer.made_with_love'
              components={{ icon: <HeartOutlined className={s.icon} /> }}
            />
          </Text>
          <Text className={s.created}>
            <Trans
              i18nKey='footer.created_by'
              components={{
                1: (
                  <Link
                    href='https://www.instagram.com/dreamoferkosha/'
                    className={s.link}
                  />
                )
              }}
            />
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}
