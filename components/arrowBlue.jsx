/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import Image from 'next/image'

export default function ArrowBlue() {
  return (

    <Image src="/img/arrow-blue.svg" sx={styles.arrow} alt='arrow' />

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
