/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import Image from 'next/image'

export default function Arrow() {
  return (

    <Image src="/img/arrow-white.svg" sx={styles.arrow} alt='arrow' />

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
