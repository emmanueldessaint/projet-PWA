import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { style } from '@mui/system';
import Link from 'next/link'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import localFont from '@next/font/local';

const titleFont = localFont({ src: '../public/fonts/enchanted_land-webfont.woff' })

export default function Home() {
  return (
    <div>
      <Head>
        <title>RPGaming Fest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Grid container>
        <div className={styles.menuMobile}>
          <img src="logoAsso2.png" width='80px' style={{ marginLeft: '2vw' }} />
          <div className={titleFont.className} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginLeft: '2vw', marginRight: '2vw', fontWeight: 500, color: '#D73C36', fontSize: '3.5vw', fontSize: '24px' }}>
            <span><Link href="/">Accueil</Link></span>
            <span><Link href="/programme">Programme</Link></span>
            <span><Link href="/plan-du-site">Plan du site</Link></span>
            <span><Link href="/contact">Contact</Link></span>
          </div>
        </div>
        <Grid className={styles.menuPC} item md={4} xs={0}>
          <div className={styles.leftPart} style={{ position: 'fixed', backgroundColor: '#D73C36', width: '100%', height: '100vh' }}>
            <div className={titleFont.className} style={{ display: 'flex', flexDirection: 'column', color: 'white', marginRight: 50 }}>
              <span style={{ marginBottom: -35, fontWeight: 500, fontSize: 25, textAlign: 'end', marginRight: -40 }}><img src="/logoBlanc.png" style={{ width: '150px' }} /></span>
              <span style={{ fontWeight: 700, marginBottom: 20, fontSize: 38, textAlign: 'end' }}>Première édition</span>
              <span style={{ marginBottom: 15, fontWeight: 500, fontSize: 32, textAlign: 'end' }}><Link href="/">Accueil</Link></span>
              <span style={{ marginBottom: 15, fontWeight: 500, fontSize: 32, textAlign: 'end' }}><Link href="/programme">Programme</Link></span>
              <span style={{ marginBottom: 15, fontWeight: 500, fontSize: 32, textAlign: 'end' }}><Link href="/plan-du-site">Plan du site</Link></span>
              <span style={{ marginBottom: 15, fontWeight: 500, fontSize: 32, textAlign: 'end' }}><Link href="/contact">Contact</Link></span>
            </div>
          </div>
        </Grid>
        <Grid item md={8} xs={12} style={{ width: '100%', height: '100px' }}>
          <Box style={{ margin: '4vw' }}>
            <Grid container spacing={6}>
              <Grid item xs={12} lg={6}>
                <img src="/affiche1.jpg" style={{ width: '100%' }} />
                <Link href="https://www.eventbrite.fr/">
                  <div className={styles.buttonEventbride} style={{ border: '2px solid #D73C36', display: 'flex', justifyContent: 'space-between', borderRadius: 15, alignItems: 'center', width: '100%', marginTop: 20 }}>
                    <span style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontWeight: 600, fontSize: 17, color: 'rgba(0,0,0,0.75)', padding: 5 }}>Reserver mon billet sur Eventbrite </span>
                    <img src="/eventbrite.png" width="60px" height="60px" style={{ marginBottom: -1, marginRight: -2, marginTop: -1, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} />
                  </div>
                </Link>
              </Grid>
              <Grid item xs={12} lg={6} style={{ textAlign: 'justify' }}>
                <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.8)' }}>{"L’univers des jeux de rôle accessibles le temps d’un week-end !"}</p>
                <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.8)' }}>{"Fruit de notre travail, nous sommes heureux de vous convier à la première édition du RPGaming Fest. Lieu de rencontre pour tous les grands fans du genre RPG, de nombreuses activités sont prévues pour vous divertir sans limite."} </p>
                {/* <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.8)' }}>{"Vous êtes du genre stratège et aimez l’Univers heroic fantasy, découvrez nos séances de grands classiques tels que donjon & dragon et bien d’autres. Venez découvrir des jeux insolites tels que Zombicide Saboteur et bien d’autres "}</p> */}
                <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.8)' }}>{"Des stands et exposants, des espaces de détente ainsi que des conférences seront notamment présents pour vous assurer une expérience complète."}</p>
                <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.8)' }}>{"On vous attend nombreux le week-end du 21 et 22 janvier 2023 au Parc des Expositions de Rouen. "}</p>
                <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.8)', marginBottom: 50 }}>La RPGaming Fest se déroulera les samedi 21 et dimanche 22 janvier au parc des expositions de Rouen.</p>
              </Grid>
            </Grid>
            <Grid container style={{ backgroundColor: '#D73C36', padding: '15px 30px 15px 30px', marginTop: 20, borderRadius: 10 }} >
              <Grid item xs={12} md={7}>
                <div>
                  <div style={{ display: 'flex' }}>
                    <img src="/parcExpo.jpg" width="60px" height="60px" style={{ borderRadius: 10 }} />
                    <h2 className={titleFont.className} style={{ color: 'white', marginLeft: 20, fontSize: 28, letterSpacing: 2 }}>Première édition</h2>
                  </div>
                  <p style={{ color: 'white', lineHeight: '160%' }}>RPGaming est présent cette année au parc des expositions à Rouen. Cette année retrouvez nous les samedi 21 et dimanche 22 janvier. </p>
                </div>
              </Grid>
              <Grid itemxs={12} md={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="contained" style={{ backgroundColor: 'white', color: '#D73C36', fontWeight: 600, marginTop: 0, padding: 10 }}><Link href="/programme">Découvrir le programme</Link></Button>
              </Grid>
            </Grid>
            <Grid container className={styles.boxShadow1} style={{ display: 'flex', borderRadius: 10, marginTop: 30 }}>
              <Grid item xs={12} lg={6}>
                <img src="/Aurmidh.png" width='100%' />
              </Grid>
              <Grid item xs={12} lg={6}>
                <div style={{ background: '' }}>
                  <div>
                    <h2 className={titleFont.className} style={{ display: 'flex', justifyContent: 'center', color: '#D73C36', fontSize: 32, padding: 10 }}>8 tables de jeux plus une ludothèque</h2>
                  </div>
                  <p style={{ fontWeight: 500, marginTop: 40, textAlign: 'justify', fontSize: 21, lineHeight: 1.7, color: 'rgba(0,0,0,0.8)', padding: 10 }}>Une ludothèque et des espaces thématiques seront à votre disposition pour permettre de jouer une ou plusieurs parties de vos jeux favoris ou de pépites encore inconnues (Zombicide, Saboteur, Dungeons & Dragons, Civis, et pleins d’autres…)</p>
                </div>
              </Grid>
            </Grid>
            <Grid container className={styles.boxShadow1} style={{ display: 'flex', borderRadius: 10, marginTop: 30 }}>
              <Grid item xs={12} lg={6}>
                <div style={{ background: '' }}>
                  <div>
                    <h2 className={titleFont.className} style={{ display: 'flex', justifyContent: 'center', color: '#D73C36', fontSize: 32, padding: 10 }}>De nombreux exposants présents sur place</h2>
                  </div>
                  <p style={{ fontWeight: 500, marginTop: 40, textAlign: 'justify', fontSize: 21, lineHeight: 1.7, color: 'rgba(0,0,0,0.8)', padding: 10 }}>De nombreux exposants seront présents pour présenter leurs produits et services (dans la limite des stocks disponibles). Différentes conférences auront lieu durant toute la durée de l’événement et des ateliers inviteront petits et grands à créer leur premier jeu de rôle.</p>
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <img src="/image1.png" width='100%' />
              </Grid>
            </Grid>
            <div className={styles.boxShadow1} style={{ width: '100%', paddingLeft: 30, paddingRight: 30, paddingTop: 10, paddingBottom: 30, marginTop: 30, borderRadius: 10 }}>
              <p style={{ fontSize: 20, fontWeight: 500, color: 'rgba(0,0,0,0.72)' }}>Renseignez votre email pour recevoir les news de RPGaming Fest</p>
              <div style={{ display: 'flex' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      label="Newsletter"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" style={{ fontWeight: 600, backgroundColor: '#D73C36' }} >
                      {"S'inscrire"}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 10 }}>Suivez nous sur Twitter, Facebook ou Linkedin pour connaître rapidement toutes les news.</div>
            <div style={{ marginTop: 100, paddingBottom: 20 }}>
              <p style={{ fontWeight: 600, fontSize: 20 }}>Nos illustrateurs</p>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} className={styles.cardImg}>
                  <span style={{ backgroundColor: '', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 10, }}>
                    <img src="/Aurmidh.png" width={'100%'} />
                  </span>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={styles.cardImg}>
                  <span style={{ backgroundColor: '', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 10, }}>
                    <img src="/img2.png" width={'100%'} />
                  </span>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={styles.cardImg}>
                  <span style={{ backgroundColor: '', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 10, }}>
                    <img src="/img3.png" width={'100%'} />
                  </span>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={styles.cardImg}>
                  <span style={{ backgroundColor: '', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 10, }}>
                    <img src="/img4.png" width={'100%'} />
                  </span>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={styles.cardImg}>
                  <span style={{ backgroundColor: '', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 10, }}>
                    <img src="/img5.png" width={'100%'} />
                  </span>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={styles.cardImg}>
                  <span style={{ backgroundColor: '', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 10, }}>
                    <img src="/img6.png" width={'100%'} />
                  </span>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Grid>
      </Grid>
      {/* <footer className={styles.footer}>
        <p>Conçu par Dyme agency</p>
      </footer> */}
    </div>
  )
}
