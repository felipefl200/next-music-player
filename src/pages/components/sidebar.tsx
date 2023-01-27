import NextImage from 'next/image'
import NextLink from 'next/link'
import logoImg from '../../../public/logo.svg'
import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md'

const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/'
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search'
    },
    {
        name: 'Your library',
        icon: MdLibraryMusic,
        route: '/library'
    },
]

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/'
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: '/favorites'
    },
]

const playlists = new Array(30).fill(1).map((_, index) => `Playlist ${index + 1}`)

export function Sidebar() {
    return (
        <Box width='100%' height='calc(100vh - 100px)' bg='black' paddingX='5px' color='gray'>
            <Box paddingY={5} height='100%' overflowY='clip'>
                <Box width='120px' marginBottom='20px' paddingX='20px'>
                    <NextImage src={logoImg} height={60} width={120} alt='Logo Image' />
                </Box>
                <Box marginBottom={5}>
                    <List spacing={2}>
                        {navMenu.map((menu, index) => (
                            <ListItem key={index} paddingX={5} fontSize={16}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref />
                                    <LinkOverlay><ListIcon as={menu.icon} marginRight='20px' />
                                        {menu.name}
                                    </LinkOverlay>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider color='gray.800' />
                <Box marginTop={5}>
                    <List spacing={1}>
                        {musicMenu.map((item, index) => (
                            <ListItem key={index} paddingX={5} fontSize={16}>
                                <LinkBox>
                                    <NextLink href={item.route} passHref />
                                    <LinkOverlay>
                                        <ListIcon as={item.icon} marginRight='20px' />
                                        {item.name}
                                    </LinkOverlay>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box height='xl' overflowY='auto' marginY='20px'>
                    <List spacing={2}>
                        {playlists.map((list, index) => (
                            <ListItem key={index} paddingX={5}>
                                <LinkBox>
                                    <NextLink href='/' passHref>
                                        <LinkOverlay>
                                            {list}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>

                        ))}
                    </List>

                </Box>
            </Box>
        </Box>
    )
}
