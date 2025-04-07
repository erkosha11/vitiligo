import { Card, Typography, Image, Flex, Space } from 'antd'
import { IdcardOutlined, TeamOutlined, BulbOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import { CardItem, achievementsStore } from 'shared/store'
import Masonry from 'react-masonry-css'
import styles from './Achievements.module.scss'
import { TabsSwitcher } from 'shared/ui'

const { Title, Text } = Typography

const breakpointColumnsObj = {
  default: 3,
  1200: 3,
  768: 2,
  480: 1
}

export const Achievements = observer(() => {
  const store = achievementsStore

  const renderCards = (data: CardItem[]) => (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {data.map((item) => {
        const year = 'year' in item ? item.year : null
        const image = 'image' in item ? item.image : ''
        const title = 'title' in item ? item.title : ''
        const issuer = 'issuer' in item ? item.issuer : null
        const location = 'location' in item ? item.location : null
        const description = 'description' in item ? item.description : null

        return (
          <Card key={item.id} hoverable className={styles.tileCard}>
            <Image
              preview={false}
              src={image}
              alt={title}
              className={styles.cardImage}
            />
            <Flex vertical align='center' className={styles.cardText}>
              <Space direction='vertical' size='small' align='center'>
                {year && <Text className={styles.year}>{year}</Text>}
                <Title level={4} className={styles.cardTitle}>
                  {title}
                </Title>
                {issuer && <Text type='secondary'>{issuer}</Text>}
                {location && <Text type='secondary'>{location}</Text>}
                {description && <Text type='secondary'>{description}</Text>}
              </Space>
            </Flex>
          </Card>
        )
      })}
    </Masonry>
  )

  const renderContent = () => {
    switch (store.activeTab) {
      case 'certificates':
        return renderCards(store.certificates)
      case 'conferences':
        return renderCards(store.conferences)
      case 'methods':
        return renderCards(store.treatments)
      default:
        return null
    }
  }

  return (
    <div className={styles.achievements}>
      <Flex vertical align='center'>
        <Space direction='vertical' size='middle' className={styles.text}>
          <Title className={styles.title} level={1}>
            Наши достижения и методы лечения
          </Title>
          <Text type='secondary' className={styles.subtitle}>
            Узнайте о нашем опыте, профессиональных достижениях и инновационных
            методах лечения витилиго
          </Text>
        </Space>
      </Flex>

      <TabsSwitcher
        tabs={[
          {
            value: 'certificates',
            label: 'Сертификаты',
            icon: <IdcardOutlined />
          },
          {
            value: 'conferences',
            label: 'Конференции',
            icon: <TeamOutlined />
          },
          {
            value: 'methods',
            label: 'Методы лечения',
            icon: <BulbOutlined />
          }
        ]}
        activeTab={store.activeTab}
        onChange={store.setActiveTab}
      />

      {renderContent()}
    </div>
  )
})
