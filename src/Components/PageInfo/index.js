import React from 'react'
import styles from './style.module.scss'

export const PageInfo = () => {

    const info = {
        project: "Naumi Hotel, Wellington MC",
        client: "Jamie & David Herald",
        status: "In Progress",
        survey_date: "06.08.2021",
        issue_date: "21.08.2021"
    }

  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <span>PROJECTS: </span>
            <span className={styles.innerText}>{info.project}</span>
        </div>
        <div className={styles.text}>
            <span>CLIENT: </span>
            <span className={styles.innerText}>{info.client}</span>
        </div>
        <div className={styles.text}>
            <span>STATUS: </span>
            <span className={styles.innerText}>{info.status}</span>
        </div>
        <div className={styles.text}>
            <span>SURVEY DATE: </span>
            <span className={styles.innerText}>{info.survey_date}</span>
        </div>
        <div className={styles.text}>
            <span>ISSUE DATE: </span>
            <span className={styles.innerText}>{info.issue_date}</span>
        </div>
        
    </div>
  )
}
