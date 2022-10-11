import { Container, TextInput, Button } from '@mantine/core';
import { createStyles } from '@mantine/core';

import { HeaderTabs } from '../components/header';
import { FooterSocial } from '../components/footer';

const useStyles = createStyles((theme) => ({
  margin: {
    marginBottom: '10px'
  }
}));

export default function IndexPage() {
  const { classes } = useStyles();

  return (
    <>
      <HeaderTabs user={{name: 'Pain_4986', image: ''}} tabs={[{title: 'Wiki', link: '/wiki/start'}, {title: 'Заявка', link: '/submission'}]} />
      <Container my="md">
        <TextInput
          label="Имя(настоящее):"
          placeholder="Вася"
           className={classes.margin}
        />
        <TextInput
          label="Ник(майнкрафт):"
          placeholder="Steve"
           className={classes.margin}
        />
        <TextInput
          label="РП ФИО персонажа:"
          placeholder="Стив - -"
           className={classes.margin}
        />
        <TextInput
          label="РП биография:"
          placeholder="Я, ..."
           className={classes.margin}
        />
        <TextInput
          label="Сколько времени готовы уделять серверу:"
          placeholder="2 часа в день"
           className={classes.margin}
        />
        <TextInput
          label="Откуда узнали о сервере:"
          placeholder="Узнал через рекламу"
           className={classes.margin}
        />
        <TextInput
          label="Почта:"
          placeholder="lopushok@gg.wp"
           className={classes.margin}
        />
        <TextInput
          label="Ваш возвраст(настоящий):"
          placeholder="16"
           className={classes.margin}
        />
        <TextInput
          label="Соц.сети:"
          placeholder="ВК: @vsecoder, ТГ: @vsecoder"
           className={classes.margin}
        />
        <br />
        <Button
          variant="light"
          radius="xl"
          size="md"
          styles={{
            root: { height: 48 }
          }}
          onClick={() => {alert('Bruh')}}
        >Подать заявку</Button>
      </Container>
      <FooterSocial />
    </>
  );
}
