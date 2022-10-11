import { useRouter } from 'next/router'

import { createStyles } from '@mantine/core';

import { NavbarNested } from '../../components/navbar'

const useStyles = createStyles((theme) => ({
}));

export default function WikiPage() {
  const { classes } = useStyles();
  const router = useRouter()
  const { q } = router.query

  return (
    <>
      <NavbarNested />
      <p>{q}</p>
    </>
  );
}
