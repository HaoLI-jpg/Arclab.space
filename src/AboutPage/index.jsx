import React, { useState } from 'react';
import styles from './style.module.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import {
  CloseOutlined,
  MailOutlined
} from '@ant-design/icons';
import TypeWriterEffect from 'react-typewriter-effect';

export default function AboutPage(props) {
  return (
    <div className={styles.shadow}>
      <Button className={styles.closeBtn} onClick={() => props.setopenAbout(false)}>
        <CloseOutlined />
      </Button>
      <TypeWriterEffect
    textStyle={{ fontFamily: 'Red Hat Display',textAlign:'center' }}
    startDelay={100}
    cursorColor="black"
    text="ARCLAB"
    typeSpeed={100}
    eraseSpeed={100}
/>
<TypeWriterEffect
    textStyle={{ fontFamily: 'Red Hat Display',textAlign:'center',marginBottom: 100}}
    startDelay={100}
    cursorColor="black"
    text="We are a team of architectural technicians and professional surveyors specialising in advanced 3D surveying & as-built documentation. We work directly with architects, interior designers & engineers."
    typeSpeed={70}
/>

    <ul>
      <li>
      <TypeWriterEffect
    textStyle={{ fontFamily: 'Red Hat Display',textAlign:'center' }}
    startDelay={11000}
    cursorColor="black"
    text="+ LASER SCANNING"
    typeSpeed={70}
/>
      </li>

      <li>
      <TypeWriterEffect
    textStyle={{ fontFamily: 'Red Hat Display',textAlign:'center' }}
    startDelay={11000}
    cursorColor="black"
    text="+ LAND SURVEYING"
    typeSpeed={70}
/>
      </li>

      <li>
      <TypeWriterEffect
    textStyle={{ fontFamily: 'Red Hat Display',textAlign:'center' }}
    startDelay={11000}
    cursorColor="black"
    text="+ BIM AS-BUILTS (ARCHICAD / REVIT)"
    typeSpeed={70}
/>
      </li>

      <li>
      <TypeWriterEffect
    textStyle={{ fontFamily: 'Red Hat Display',textAlign:'center' }}
    startDelay={11000}
    cursorColor="black"
    text="+ DRONE SURVEYS"
    typeSpeed={70}
/>
      </li>

      
    </ul>


    <footer className={styles.contact}>
      <p>📧 contact@arclab.works
      </p>
      
      <p>📞 +64 21 251 3205
      </p>
      <p>📩 478 K Road
Auckland NZ
      </p>
    </footer>
    </div>
  )
}