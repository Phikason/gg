import React from 'react'
import styles from './Portfolio.module.css'

const user={
  img1:'https://scontent.xx.fbcdn.net/v/t1.15752-9/431037272_1733450340511528_2291746480481955818_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFeE4x-o_egmXbo4VnBc0LECbTpaSWr_EYJtOlpJav8RuxUBHxUN3p9MhcrKXDKJGk0pOFFtsVSwUEId9cEbU67&_nc_ohc=z3UCFuxIivIAX-DO1Ak&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRSjiZYw5f3_tm5_0AJHTsi18FMODHt-KMDQkf4xN7ywg&oe=6610263B',
  img2:'https://scontent.xx.fbcdn.net/v/t1.15752-9/430906159_7164471036999204_6681903036145743427_n.jpg?stp=dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEYT5HFLGf2oGADtrYsAcl9uQL_0BG9_V65Av_QEb39Xi5zhU_HHGts66F3phpW8RjoP9ddKmUqv_Uztd_Py7r-&_nc_ohc=hJPCsfXmTNUAX_HPEUW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSf0S3_RBrs2NAEgfTKdU6l5Q9b_6RZlRIu6vcVfsUaBw&oe=66100572',
  img3:'https://scontent.xx.fbcdn.net/v/t1.15752-9/431064626_1422295165041462_4350541804144245755_n.jpg?stp=dst-jpg_s280x280&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrVqjIkcjk5bfKQF3oMeIkwR-ipE-V6YfBH6KkT5Xph6w2QsJVvtPREWH8G4wPONV5nev5ssevEeG9Eb4r3E47&_nc_ohc=jIKWjfZXtBYAX-acZsv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSWRirj7nY6NTcxNo3SBMqogcCN6-EWil1WqJvT32ZEsQ&oe=6610198D,
  img4:'https://scontent.xx.fbcdn.net/v/t1.15752-9/423542016_368064682710896_6048108897471305033_n.jpg?stp=dst-jpg_s240x240&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGGGlHBt9_KuMqJWGqUCSR1VoSYb0iRA2dWhJhvSJEDZ38Qgrnc5Cu8X450orRN_cRPB2gADXkis-USl7LGOp_p&_nc_ohc=o2wKseNtgVMAX-cCiF1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT42CAmf2-G4X6Xp7chh4FJAwApPck5eTu_sYg3lCuN2g&oe=660FF7ED',
  img5:'https://scontent.xx.fbcdn.net/v/t1.15752-9/423472521_817810943514689_7501626910692316448_n.jpg?stp=dst-jpg_s206x206&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEjibxGOR6e66k5teOo4zxkBJhwV5MZueEEmHBXkxm54RKx35PEh0bgyF5xpxMCAKyqw1q41UJcTD6xnqCpbLXO&_nc_ohc=1uaiHkMlrXYAX92z7xA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSy43KT4w34ZsvIZPQiOlTAV-P_Fw2TchsLLH8jVoSP-w&oe=660FFA72',
  img6:'https://scontent.xx.fbcdn.net/v/t1.15752-9/423472232_935555434954622_4354488470821145354_n.jpg?stp=dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHsr2ILk_DFJ8TFCudSFYgjWGjTapWEY2NYaNNqlYRjY1KJb-uMifrIGC2PrZwCzqxwK2ZnKaG2TZsfL23GTApR&_nc_ohc=KWyWuAqeNKUAX9pj2_B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTr8_J_MDMkGuBRG6X2fELfrX1gaZFmyfV7HP5pgR8gjg&oe=6610184B',
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