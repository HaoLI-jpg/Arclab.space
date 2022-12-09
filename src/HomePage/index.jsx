import React, { useState } from 'react';
import styles from './style.module.scss';
import UserSignInAndSignUp from '../UserSignInAndSignUp';
import NavBar from '../NavBar';
import { Button } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import video from './aa.mp4';

function HomePage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.homeBackground}>
      {/* NavBar */}
      <NavBar />

      {/* Body */}
      {/* Company Info */}
      <div className={styles.companyInfoOuter}>
        <div className={styles.companyInfoBox}>
          <div className={styles.companyInfo}>
            <div className={styles.welcomeTitleText}><p>WELCOME TO <span className={styles.platformName}>ARCLAB.space</span> </p></div>

            <div className={styles.welcomeBodyText}>
              <p>We are a team of 3D surveying + documentation practice specialising in large-scale 3D scanning within land surveying, architecture and research. ARCLAB.space connects with other webGL platforms for 3D visualization of site data, as well as other more standardized visual content (JPG photos, pdf). </p>
              <p>It is our mission to provide external customers with easy and reliable access to ARCLAB's existing online deliverables.</p>
            </div>

          </div>

        </div>
        {/* Footer */}
        <div className={styles.footerBox}>
          <div className={styles.clientInfo}>
            <p><MailOutlined /> Email address: contact@arclab.works</p>
            <p><PhoneOutlined /> Phone: +64 21 251 3205</p>
            <p><InstagramOutlined /> Instagram: arclab.works</p>
            <p><LinkedinOutlined /> LinkedIn: ARCLAB NZ</p>
          </div>

          <div className={styles.joinBtnBox}>
            <Button className={styles.joinBtn} onClick={() => { setOpenModal(true) }}>Join us now</Button>
          </div>
        </div>
      </div>


      {/* An example video of deliverables */}

      <div className={styles.videoHoverBox}>
        <div className={styles.title}>An example video</div>
        <video controls muted className={styles.exampleVideoBox} autoPlay>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>

      {
        openModal && (
          <UserSignInAndSignUp
            setOpenModal={setOpenModal}
            pageType={'register'}
          />
        )
      }
    </div>

  )
}

export default HomePage;
