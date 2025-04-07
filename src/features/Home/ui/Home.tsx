import {
  Button,
  Card,
  Space,
  Typography,
  Row,
  Col,
  Image,
  Flex,
  Rate
} from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import styles from './Home.module.scss'
import doctorImage from 'assets/home.jpg'

const { Title, Text } = Typography

export const Home = () => {
  return (
    <Card className={styles.home} bordered={false}>
      <Row gutter={[32, 32]} align='middle' justify='space-between'>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
          <Flex vertical align='flex-start' gap='large' className={styles.left}>
            <Title className={styles.titleLeft}>
              Эффективное <br /> лечение <span>витилиго</span>
            </Title>
            <Text type='secondary' className={styles.description}>
              Мы помогаем пациентам вернуть естественный цвет кожи и уверенность
              в себе, используя инновационные методики и индивидуальный подход.
            </Text>
            <Button size='large' type='primary' className={styles.primaryBtn}>
              Записаться на консультацию
            </Button>
            <Flex vertical className={styles.workingHours}>
              <Flex gap='small' align='center'>
                <Title className={styles.title} level={4}>
                  4.9/5
                </Title>
                <Rate allowHalf defaultValue={4.5} />
              </Flex>
              <Text>От более 500 довольных пациент</Text>
            </Flex>
          </Flex>
        </Col>
        <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} className={styles.photo}>
          <Image
            preview={false}
            src={doctorImage}
            alt='doctor'
            className={styles.image}
          />
          <Space className={styles.statCard}>
            <div className={styles.iconCircle}>
              <CheckCircleFilled className={styles.checkIcon} />
            </div>
            <div>
              <Title className={styles.title} level={5}>
                20+ лет опыта
              </Title>
              <Text>Специализированной практики</Text>
            </div>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}
