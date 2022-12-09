import React from 'react'
import NavBar from '../NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './gallery.module.css';



export default function Welcome() {
  let location = useLocation()
  const navigate = useNavigate()
  let username = location.state.username

  const goGallery = () => {
    navigate('/gallery', {
      state: {
        username: username
      }
    }
    )
  }

  return (
    <div>
      {/* NavBar */}
      <NavBar />
      <div className={styles.welcome_bk}>
        <div style={{ fontSize: '40px' }}>Welcome.</div>
        <h1>{username} ARCHITECT</h1>
        <button style={{ backgroundColor: 'black', border: 'none' }} onClick={goGallery}><img src='assets/downArrow.png' alt="downArrow" /></button>
      </div>
    </div>
  )
}
