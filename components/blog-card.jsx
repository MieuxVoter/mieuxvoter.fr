/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link, Box, Image, Text } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";

export default function BlogCard({
    altText = 'default alt text',
    title,
    author,
    support,
    lien,
}) {
    return (

        <Box sx={styles.card}>
            <Box sx={styles.wrapper}>
                <Text sx={styles.wrapper.title}>{title}</Text>
                <Text sx={styles.wrapper.author}>{author}</Text>
                <Text sx={styles.wrapper.support}>{support}</Text>
                <Link href={lien} sx={styles.wrapper.lien} ><Text>Lire l&apos;article</Text><BsArrowRight /></Link>
            </Box>
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
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        p: 5,
        flexDirection: 'column',
        '&:hover': {
            backgroundColor: '#F2F0FF',
        },
        title: {
            fontSize: '18px',
            textAlign: 'left',
            color: 'black',
            fontWeight: 700,
            mb: [2, null, 3],
        },
        author: {
            fontSize: '16px',
            color: 'black',
            fontStyle: 'italic',
        },
        support: {
            fontSize: '16px',
            color: 'grey',
        },
        lien: {
            fontSize: '15px',
           color: '#2400FD',
            mt: 5,
            fontWeight: 'bold',
        },
    },
};
