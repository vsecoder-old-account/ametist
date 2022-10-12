import { HeaderTabs } from '../components/header';
import { FooterSocial } from '../components/footer';
import { CardBlock } from '../components/card';
import { FeaturesTitle } from '../components/section';
import { FaqSimple } from '../components/faq';
import { CardsCarousel } from '../components/carousels';

import { createStyles, Button, Container } from '@mantine/core';
import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies';

const useStyles = createStyles((theme) => ({
  banner: {
    width: '100%',
    maxWidth: '1920px',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    height: '790px'
  },
  banner_img: {
    pointerEvents: 'none',
    position: 'absolute',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    background: 'linear-gradient(180deg,#186ef0,#429ae7,#1A1B1E)',
    zIndex: -1
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
    position: 'inherit'
  },
  inner: {
    maxWidth: '640px',
    margin: '128px 0',
  },
  h1: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '42px',
    lineHeight: '56px',
    fontStyle: 'normal',
    marginBottom: '22px',
  },
  p: {
    marginBottom: '45px',
    fontSize: '18px'
  },
  white: {
    color: 'white'
  },
  btn: {
    zIndex: 10,
    margin: '15px'
  },
  conteiner: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 300,
      height: 2,
      margin: '0 auto',
      marginTop: 50
    },
  },
}));

export default function IndexPage() {
  const { classes } = useStyles();
  const [name, setName] = useState('...')
  const jwt = parseCookies().jwt;
  const id = parseCookies().id;
  //const username = parseCookies().username;
  useEffect(() => {
    const n = parseCookies().username;
    if (n) {
      setName(n)
    } else {
      setName('Войти')
    }
  }, [])

  return (
    <>
      <HeaderTabs user={{name: name, image: 'https://minotar.net/helm/'+name}} tabs={[{title: 'Wiki', link: '/wiki/start'}, {title: 'Заявка', link: '/submission'}]} />
      <div className={classes.banner}>
        <div className={classes.content}>
          <div className={classes.inner}>
            <h1 className={classes.h1}>Технологичный <br />ванильный сервер<br /> с политикой и Role Play</h1>
            <p className={classes.p}>
              Выживайте, стройте республику, находите друзей и отыгрывайте RP
              <br />
              Без приватов, привилегий и лишних плагинов
            </p>
            <div className={classes.btn}>
              <Button
                color="gray"
                size="md"
                m={10}
                onClick={() => {alert('Bruh')}}
              >Подать заявку</Button>
              <Button
                variant="subtle"
                m={10}
                onClick={() => {alert('Bruh')}}
                className={classes.white}
              >О сервере</Button>
            </div>
            <p className={classes.p}>Пиратка Java Edition 1.19.2</p>
          </div>
        </div>
        <img src='/banner.webp' className={classes.banner_img} />
      </div>
      <Container my="md" size={1262} mt={100} className={classes.conteiner}>
        <CardBlock 
          title='Присоединяйтесь к государствам' 
          image='/commune.webp' 
          text='Чтобы играть, вам необходимо вступить в 1 из 3х государств, у каждых своя власть, свои планы и своя территория!' />
        <CardBlock 
          title='Наблюдайте за новостями' 
          image='/event.webp' 
          text='Очень часто будут проходить ивенты, которые помогут вам выделиться или разбогатеть!' />
        <CardBlock 
          title='Помогайте государству' 
          image='/rule.webp' 
          text='Чем выше государсто, больше актив и лучше сплочённость - тем богаче его жители!' />
      </Container>
      <Container my="md" size={1262} mt={50} className={classes.conteiner}>
        <FeaturesTitle />
      </Container>
      <Container my="md" size={1262} mt={50} className={classes.conteiner}>
        <FaqSimple />
      </Container>
      <Container my="md" size={1262} mt={50} className={classes.conteiner}>
        <CardsCarousel />
      </Container>
      <FooterSocial />
    </>
  );
}
