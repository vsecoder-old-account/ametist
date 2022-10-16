import { createStyles, Button, Container, Input, NumberInput } from '@mantine/core';
import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies';
import { useForm } from '@mantine/form';
import {
    IconArrowBigRight,
    IconDiamond,
    IconAddressBook
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    block: {
        width: '321px',
        height: '204px',
        display: 'inline-block',
        margin: '15px',
        [`@media (max-width: 400px)`]: {
          marginLeft: '-27px'
        },
    },
    img: {
        position: 'absolute',
        zIndex: 1,
        borderRadius: '3%'
    },
    text: {
        fontWeight: 700,
        color: 'white',
        padding: '10px',
        zIndex: 2,
        position: 'relative',
    },
    text1: {
        fontWeight: 700,
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        zIndex: 2,
        position: 'relative',
    },
    icon: {
    }
}));

export function Bank() {
  const { classes } = useStyles();
  const [name, setName] = useState('...');
  const [card, setCard] = useState('------');
  const [num, setNum] = useState('---- ---- ---- ----');
  const [img, setImg] = useState('card_wool');
  const jwt = parseCookies().jwt;
  const id = parseCookies().id;
  useEffect(() => {
    const n = parseCookies().username;
    if (n) {
      setName(n)
    } else {
      setName('Войти')
    }
  }, [])

  const form = useForm({
    initialValues: {
      nick: '',
      sum: 0,
    },
    validate: {
      nick: (value) => (value.length < 3 ? 'Ник не может быть меньше 3х символов' : null)
    },
  });

  return (
    <>
      <Container my="md" size={760} mt={100}>
          <div className={classes.block}>
              <img src='/card_nether.png' className={classes.img} />
              <h3 className={classes.text}><IconDiamond color='white' className={classes.icon} /> Pain_4986 </h3>
              <h2 className={classes.text1}>0000 0000 0000 0000</h2>
          </div>
          <IconArrowBigRight />
          <div className={classes.block}>
              <img src={'/'+img+'.png'} className={classes.img} />
              <h3 className={classes.text}><IconDiamond color='white' className={classes.icon} /> {card} </h3>
              <h2 className={classes.text1}>{num}</h2>
          </div>
          <Container my="md" size={300} mt={100}>
            <Input
              icon={<IconAddressBook />}
              variant="filled"
              placeholder="Ник получателя"
              mt={15}
              onInput={(event: any) => setCard(event.currentTarget.value)}
              {...form.getInputProps('nick')}
            />
            <NumberInput
              icon={<IconDiamond />}
              variant="filled"
              placeholder="Сумма"
              mt={5}
              min={1}
              max={1000000}
              {...form.getInputProps('sum')}
            />
            <Button type="submit"
              onClick={() => {console.log(form.values)}}
              mt={20}
              >Отправить</Button>
          </Container>
      </Container>
    </>
  );
}