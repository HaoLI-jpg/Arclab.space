import React, { useState } from 'react';
import styles from './style.module.scss';
import { Row, Col, Button } from 'antd';
import UserLogin from '../UserLogin';
import {
  UserOutlined
} from '@ant-design/icons';

function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.homeBackground}>
      {/* Navbar */}
      <div className={styles.navBarBox}>
        <Row>
          <Col span={4}>
            <div className={styles.circleLogo}>
              <img src="https://media-exp1.licdn.com/dms/image/C560BAQE5iwUWPs6fFQ/company-logo_200_200/0/1556248126796?e=1677715200&v=beta&t=PTwDzm1Q7IvVjJyTnXcOOFULThRN4l6rR8X3-jxVjMw" alt="Arclab Logo" className={styles.logo} />
            </div>
          </Col>
          <Col span={17}></Col>
          <Col span={2}>
            <div className={styles.aboutIconBox}>
              <Button className={styles.aboutIconButton}>About</Button>
            </div>
          </Col>
          <Col span={1}>
            <div className={styles.userIconBox}>
              <Button
                className={styles.userIconButton}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <UserOutlined />
              </Button>
            </div>
          </Col>
        </Row>

      </div>

      {/* Body */}
      {/* Company Info */}
      <div className={styles.companyInfoBox}>
        <div className={styles.companyInfo}>
          Company information(eg. Reasons for choosing this company)
        </div>
        <div className={styles.joinBtnBox}>
          <Button className={styles.joinBtn}>Join us now</Button>
        </div>
      </div>

      {/* An example video of deliverables */}
      <div className={styles.exampleVideoBox}>
        <div className={styles.exampleVideo}>
          An example video of deliverables
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footerBox}>
        <div>
          Footer
        </div>
      </div>

      {
        openModal && (
          <UserLogin 
            setOpenModal={setOpenModal}
          />
        )
      }

    </div>

  )
}

export default HomePage;
