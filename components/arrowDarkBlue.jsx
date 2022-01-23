/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import Image from 'next/image'

export default function ArrowDarkBlue() {
  return (

    <Image src="/img/arrow-dark-blue.svg" sx={styles.arrow} alt='arrow dark blue' />

  )
}
const styles = {
  arrow: {
    verticalAlign: 'middle',
    width: '24px',
    height: '24px',
    ml: '16px',
  },
}
