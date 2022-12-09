import React, { useState } from 'react'
import styles from './style.module.scss'
import { Row, Col, Button } from 'antd';
import UserSignInAndSignUp from '../UserSignInAndSignUp';
import {
  UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  return (
    <div className={styles.navBarBox}>
      <Row>
        <Col span={1}>
          <div className={styles.circleLogo}>
            <Button className={styles.goHomeBtn} onClick={()=>{
              navigate('/')
            }}>
              <img src="https://media-exp1.licdn.com/dms/image/C560BAQE5iwUWPs6fFQ/company-logo_200_200/0/1556248126796?e=1677715200&v=beta&t=PTwDzm1Q7IvVjJyTnXcOOFULThRN4l6rR8X3-jxVjMw" alt="Arclab Logo" width={'70px'}/>
            </Button>
          </div>
        </Col>
        <Col span={20}></Col>
        <Col span={2}>
          <div className={styles.aboutBtnBox}>
            <a className={styles.aboutBtn} href="https://arcdigital.nz/">About</a>
          </div>
        </Col>
        <Col span={1}>
          <div className={styles.userIconBox}>
            <Button
              className={styles.userIconBtn}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <UserOutlined />
            </Button>
          </div>
        </Col>
      </Row>

      {
        openModal && (
          <UserSignInAndSignUp
            setOpenModal={setOpenModal}
          />
        )
      }

    </div>
  )
}
