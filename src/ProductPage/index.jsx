import React from 'react'
import NavBar from '../NavBar'
import Collapsible from 'react-collapsible';
import styles from './style.module.scss'
import { PageInfo } from '../Components/PageInfo';
import { PointCloudDisplay } from '../Components/PointCloudDisplay';

export const ProductPage = () => {
    return (
        <>
        <NavBar />
        <div className={styles.container}>
            <PageInfo />

            <h4>
            <Collapsible trigger="+ POINT CLOUD" className={styles.collapsible}>
                <h4 className={styles.Collapsible__contentInner}>
                    + LiDAR
                </h4>
                <h4 className={styles.Collapsible__contentInner}>
                    + Drone
                </h4>
            </Collapsible>
            </h4>
            <h4>
            <Collapsible trigger="+ INTERNAL WALKTHROUGH" className={styles.collapsible}>
                <h4 className={styles.Collapsible__contentInner}>
                    + LiDAR
                </h4>
                <h4 className={styles.Collapsible__contentInner}>
                    + Drone
                </h4>
            </Collapsible>
            </h4>
            <h4>
            <Collapsible trigger="+ CAD SURVEY PLAN" className={styles.collapsible}>
                <h4 className={styles.Collapsible__contentInner}>
                    + LiDAR
                </h4>
                <h4 className={styles.Collapsible__contentInner}>
                    + Drone
                </h4>
            </Collapsible>
            </h4>

            <PointCloudDisplay />
        </div>
        </>
    )
}
