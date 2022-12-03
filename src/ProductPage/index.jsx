import React from 'react'
import NavBar from '../NavBar'
import Collapsible from 'react-collapsible';
import styles from './style.module.scss'
import { PageInfo } from '../Components/PageInfo'

export const ProductPage = () => {
  return (
        <div className={styles.gridContainer}>
            <NavBar />

            <PageInfo />

            <Collapsible trigger="POINT CLOUD" className={styles.collapsible}>
                <p>
                    LiDAR
                </p>
                <p>
                    Drone
                </p>
            </Collapsible>
        </div>
  )
}
