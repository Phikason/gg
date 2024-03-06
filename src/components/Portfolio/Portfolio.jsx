import React from 'react'
import styles from './Portfolio.module.css'

const user={
  img1:'https://i.pinimg.com/564x/97/ef/24/97ef241b207714a81b26d15d7371dd10.jpg',
  img2:'https://i.pinimg.com/564x/14/d5/ca/14d5ca674ec4edbe085b4076998a74b8.jpg',
  img3:'https://i.pinimg.com/564x/81/35/68/813568309fe66142dfa80e8abeb1b98d.jpg',
  img4:'https://i.pinimg.com/564x/12/9e/95/129e95ea0d81790b1a154bc6fbe6ca7e.jpg',
  img5:'https://i.pinimg.com/564x/7a/31/f6/7a31f6ac35cc24363f2f8983154689b9.jpg',
  img6:'https://i.pinimg.com/564x/9e/ef/e0/9eefe0e34f8f3e5a781ecb9d5ee0db56.jpg',
}
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={user.img1} alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img2} alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img3} alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img4} alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img5} alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img6} alt="" />
            <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio