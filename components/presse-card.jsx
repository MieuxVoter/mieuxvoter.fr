/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Text, Link } from 'theme-ui';


export default function PresseCard({
    altText = 'default alt text',
    thumb,
    title,
    author,
    date,
    lien,
    source,
}) {

    return (

        <Box sx={styles.card}>
            <Link href={lien} target="blank">
            <Box sx={styles.wrapper}>                
                <Image src={thumb} alt="" />
                <Text sx={styles.wrapper.source}>{source}</Text>
                <Text sx={styles.wrapper.title}>{title}</Text>
                <Text sx={styles.wrapper.author}>{author}</Text>
                <Text sx={styles.wrapper.date}>{date}</Text>              
            </Box>
            </Link>
        </Box>
    );
}

const styles = {
    card: {
        display: 'flex',
        alignItems: ['center', 'flex-start'],
        flexDirection: 'column',
        mb: -1,
        textAlign: 'left',
        px: [4, null, 0],
        a: {
            textDecoration: 'none',
            color: 'black',
        }
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        p: 5,
        flexDirection: 'column',
        '&:hover': {
            backgroundColor: '#F2F0FF',
        },
        source: {
            my: 2,
            fontWeight: 'bold',
            fontSize: '13px',
        },
        title: {
            fontSize: 3,
            textAlign: 'left',
            color: 'black',
            fontWeight: 700,
            mb: [2, null, 3],
            fontSize: '18px',
        },
        author: {
            fontSize: 2,
            color: 'grey',
            fontStyle: 'italic',
            fontSize: '13px',
        },
        date: {
            fontSize: 2,
            color: 'grey',
            fontSize: '13px',
        },
        lien: {
            fontSize: 1,
           color: '#2400FD',
            mt: 5,
            fontWeight: 'bold',
        },
        img: {
            width: '300px',
            height: '180px',
            objectFit: 'cover',
        }
    },
};
