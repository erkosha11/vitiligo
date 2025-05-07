import { Card, Flex, Typography, Image, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import HomeIMG from 'assets/photo/home.png'
import s from './Home.module.scss'

export const Home = () => {
  const { t } = useTranslation()
  const { Text } = Typography

  return (
    <>
      <div id='home' />
      <Card variant='borderless' className={s.home}>
        <Flex
          className={s.wrapper}
          align='center'
          justify='space-between'
          wrap='wrap-reverse'
        >
          <Flex vertical className={s.text}>
            <h1 className={s.text + ' ' + s.title}>{t('home.title')}</h1>
            <Text className={s.description}>{t('home.description')}</Text>
            <Button type='primary' size='large'>
              {t('home.button')}
            </Button>
          </Flex>

          <Image src={HomeIMG} preview={false} className={s.image} />
        </Flex>
      </Card>
    </>
  )
}
