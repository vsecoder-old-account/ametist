import { HeaderTabs } from '../components/header';
import { FooterSocial } from '../components/footer';
//import { FeaturesCard } from './components/card';

import { createStyles, Button, Container } from '@mantine/core';

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
  }
}));

export default function IndexPage() {
  const { classes } = useStyles();

  return (
    <>
      <HeaderTabs user={{name: 'Pain_4986', image: ''}} tabs={[{title: 'Wiki', link: '/wiki/start'}, {title: 'Заявка', link: '/submission'}]} />
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
        <img src='https://rp.plo.su/assets/newlanding/banner.webp' className={classes.banner_img} />
      </div>
      <Container my="md">
        1
      </Container>
      <FooterSocial />
    </>
  );
}
