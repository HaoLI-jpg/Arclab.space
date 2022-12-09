import { React, useState } from 'react'
import NavBar from '../NavBar'
import styles from './gallery.module.css';
import { useLocation, Link } from 'react-router-dom'
import { Col, Tabs, Row } from 'antd';
import thumbnailsPath from './thumbnailsPath.json'

export default function Gallery() {
    let location = useLocation()
    const items = [
        { label: 'PROJECT', key: 'item-1', children: '#PROJECT NAME' },
        { label: 'STATUS', key: 'item-2', children: '#CURRENT STATUS' },
        { label: 'DATE', key: 'item-3', children: '#ISSUE DATE' },
    ];

    const colCreator = () => {
        const colArray = [];
        for (let eachPath in thumbnailsPath) {
            colArray.push(
                <Col key={eachPath} className='gutter-row'>
                    <div className={styles.product_bk}>
                        <div style={{ border: 'thin solid white' }} >
                            <Link to={'/page/' + eachPath}>
                                <img alt="example" className={styles.thumbnails} src={thumbnailsPath[eachPath]} />
                            </Link>
                        </div>
                        <Tabs items={items} style={{ color: 'white' }} />
                    </div>
                </Col>
            );
        }
        return colArray;
    }


    return (
        <div>
            {/* NavBar */}
            <NavBar />
            <div className={styles.gallery_bk}>
                <div style={{ textAlign: 'left', fontSize: '3vw' }} >
                    PROJECTS/ {location.state.username} ARCHITECT
                </div>
                <br />
                <div>
                    <br />
                    <Row gutter={[64, 32]}>
                        {colCreator()}
                    </Row>
                </div>
            </div>
        </div>
    )
}
