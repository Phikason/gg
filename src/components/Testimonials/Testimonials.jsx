import React from "react";
import styles from "./Testimonials.module.css";

const user={
  img1:'https://scontent.xx.fbcdn.net/v/t1.15752-9/423599700_789022719740462_9167719433049016428_n.jpg?stp=dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHAEvXEkH9jc0_i9PG0YMloyccMp-0lOeHJxwyn7SU54WyiVdDR5jNNk7Lnz16iDa2NpUf0qYFe2eGxQwCCZbeW&_nc_ohc=WhdDHILd9NYAX964cwo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSnzwQ5Q9b71ZCzAXvAlh9bj1NttxV9DeUOYs7gt_kNEw&oe=66101C8E',
  img2:'https://scontent.xx.fbcdn.net/v/t1.15752-9/430862840_1344631126932853_3112375142991197116_n.jpg?stp=dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGS1F09nLMNTDyqEr7yL1epEozu5pmQKJ4SjO7mmZAonv5FeD_Adh7TTwv9pM_fitlTNPVo7ts6f0pJpeWXEpvO&_nc_ohc=iKDGqY-Tr5MAX-mlhcC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSRcqiP9tPq4i8rltlo7HWPtMTxwAGxOtTR0jTYAcXN5A&oe=66101C89',
  img3:'https://scontent.xx.fbcdn.net/v/t1.15752-9/423599675_1113314856755423_3519051644682838585_n.jpg?stp=dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFXIKj_jFDoZY1JmDudk43np8K-Ior8Eq6nwr4iivwSrt8At92UyoOjkKkWc3cBBbmhfHg2xtmPGxyNAJaCqLDr&_nc_ohc=AuTsIyrKQaoAX-LqE4c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSWMMqNpYL6e6ngjY3wmhQpRzs7PLkfbg1wwXsgdWj1aQ&oe=661027AC',
}
function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="S__17825811_0.jpg"
            alt=""
          />
          <h4>Mango</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="S__17825814_0.jpg"
            alt=""
          />
          <h4>Orange</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="S__17825813_0.jpg"
            alt=""
          />
          <h4>Watermelon</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;