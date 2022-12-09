import React, { useState } from 'react';
import styles from './style.module.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import {
  CloseOutlined,
  MailOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function UserSignInAndSignUp({ setOpenModal, pageType = 'login' }) {
  const [page, setPage] = useState(pageType);
  const navigate = useNavigate()

  const onFinish = (values) => {
    navigate('/welcome', {
      state: values
    })
  }
  return (
    <div className={styles.shadow}>
      <div className={styles.userLoginDialog}>
        <Button
          className={styles.closeBtn}
          onClick={() => {
            setOpenModal(false)
          }}
        ><CloseOutlined /></Button>
        <div className={styles.imageBox}>
        </div>
        <div className={styles.userLoginBox}>

          <div className={styles.userLogin}>
            {
              page === 'login' && (
                <div>
                  <div className={styles.textBox}>
                    <h1>Welcome Back</h1>
                    <p>Please Log in</p>
                  </div>
                  <div className={styles.userDetails}>
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
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

                        <a className={styles.forgotPwdLink} onClick={() => {
                          setPage('forgotPwd')
                        }}>
                          Forgot password
                        </a>
                      </Form.Item>
                      <Form.Item>
                        <a className={styles.registerLink} onClick={() => {
                          setPage('register')
                        }}>Register now</a>
                      </Form.Item>
                      <div className={styles.loginBtnBox}>
                        <Form.Item>
                          <Button className={styles.loginBtn} type="primary" htmlType="submit" >
                            Sign in
                          </Button>
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
                </div>
              )
            }
            {
              page === 'register' && (
                <div>
                  <div className={styles.textBox}>
                    <h1>Welcome</h1>
                    <p>Please Sign up</p>
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
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your email address!',
                          },
                        ]}
                      >
                        <Input className={styles.registerEmailInput} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
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
                        <a className={styles.loginLink} onClick={() => { setPage('login') }}>Login Here</a>
                      </Form.Item>
                      <div className={styles.signUpBtnBox}>
                        <Form.Item>
                          <Button className={styles.signUpBtn} type="primary" htmlType="submit" onClick={()=>{
                            setPage('login')
                          }}>
                            Sign up
                          </Button>
                        </Form.Item>
                      </div>

                    </Form>
                  </div>
                </div>
              )
            }
            {
              page === 'forgotPwd' && (
                <div>
                  <div className={styles.textBox}>
                    <h1>Forgot your password?</h1>
                    <p>Reset your new password via email address</p>
                  </div>
                  <div className={styles.userDetails}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email address!',
                        },
                      ]}
                    >
                      <Input className={styles.forgotPwdEmailInput} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
                    </Form.Item>

                    <Form.Item
                      name="newPassword"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your new password!',
                        },
                      ]}
                    >
                      <Input className={styles.forgotpwdInput}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="New password"
                      />
                    </Form.Item>

                    <div className={styles.signUpBtnBox}>
                      <Form.Item>
                        <Button onClick={()=>{
                          setPage('login')
                        }} className={styles.sentBtn} type="primary" htmlType="submit" >
                          Sent
                        </Button>
                      </Form.Item>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>

      </div>
    </div>

  )
}
