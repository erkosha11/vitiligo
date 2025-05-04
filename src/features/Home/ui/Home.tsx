import { Card, Flex, Typography, Image, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import HomeIMG from 'assets/photo/home.png'
import s from './Home.module.scss'

export const Home = () => {
  const { t } = useTranslation()
  const { Text } = Typography

  return (
    <Card variant='borderless' className={s.home} id='home'>
      <Flex
        className={s.wrapper}
        align='center'
        justify='space-between'
        gap={32}
        wrap='wrap-reverse'
      >
        <Flex vertical className={s.text}>
          <h1 className={s.title}>{t('home.title')}</h1>
          <Text className={s.description}>{t('home.description')}</Text>
          <Button type='primary' size='large'>
            {t('home.button')}
          </Button>
        </Flex>

        <Image src={HomeIMG} preview={false} className={s.image} />
      </Flex>
    </Card>
  )
}
