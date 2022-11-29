import React from 'react';
import styles from './style.module.scss';
import UserRegister from '../UserRegister';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons';

export default function UserLogin({ setOpenModal }) {
  return (
    <div className={styles.shadow}>
      <div className={styles.userLoginDialog}>
        <div className={styles.imageBox}>
          <Button
            className={styles.closeBtn}
            onClick={() => {
              setOpenModal(false)
            }}
          ><CloseOutlined /></Button>
        </div>
        <div className={styles.userLoginBox}>
          <div className={styles.userLogin}>
            <div className={styles.textBox}>
              <h1>Welcome Back</h1>
              <p>Please Login</p>
            </div>
            <div className={styles.userDetails}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input className={styles.usernameInput} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input className={styles.pwdInput}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className={styles.rememberMe}>Remember me</Checkbox>
                  </Form.Item>

                  <a className={styles.forgotPwdLink} href=''>
                    Forgot password
                  </a>
                  <a className={styles.registerLink} href="">Register now!</a>
                </Form.Item>
                <div className={styles.loginBtnBox}>
                  <Form.Item>
                    <Button className={styles.loginBtn} type="primary" htmlType="submit" >
                      Log in
                    </Button>
                  </Form.Item>
                </div>

              </Form>

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
