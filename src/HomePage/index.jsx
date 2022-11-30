import React, { useState } from 'react';
import styles from './style.module.scss';
import UserSignInAndSignUp from '../UserSignInAndSignUp';
import NavBar from '../NavBar';
import { Button } from 'antd';

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
            <h1>Welcome to ARCLAB.space</h1>
            <h1>DORRINGTON ATCHESON ARCHITECTS</h1>
            <h3>Company information(eg. Reasons for choosing this company)</h3>
          </div>
          <div className={styles.joinBtnBox}>
            <Button className={styles.joinBtn} onClick={() => { setOpenModal(true) }}>Join us now</Button>
          </div>
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
          Footer
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
