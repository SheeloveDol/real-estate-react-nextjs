// for the navigation bar, footer, and some extra contents
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Dream Estates</title>
    </Head>
    <Box maxWidth="1280px" m="auto" >
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </Box>
  </>  
);
  

export default Layout;