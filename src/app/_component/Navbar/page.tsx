'use client'
import Link from 'next/link';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '@/lib/postsSlice';
import path from 'path';
import HomeIcon from '@mui/icons-material/Home';
import { getLoggedUserData } from '@/lib/userslice';









export default function Navbar() {

  const { userData} = useSelector((state:any) => state.users);

  const pages = [  
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },
    ];

const settings = [  { name: 'Profile', path: '/profile' },
  { name: 'Add post', path: '/addpost' },
  { name: 'Upload photo', path: '/uploadphoto' },
  { name: 'logout', path: '/login' },];

  let router = useRouter()
  let dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(!!localStorage.getItem('userToken'));



  // let {allPosts,isLoading,isError} = useSelector((state:any)=> state.posts)

  // let dispatch = useDispatch<any>();


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    // navigate()

  };
  const handleMenuItemClick = (path: string) => {
    if (path === '/login') {
      localStorage.removeItem('userToken');
      setIsLoggedIn(false);
      router.push('/login');
      router.prefetch
    } else {
      router.push(path);
    }
    handleCloseUserMenu();
   
    
  };

  React.useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      dispatch(getLoggedUserData());
    }
  }, [dispatch]);

  const handleMenuItemClickPages = (path: string) => {
    if (path === '/login') {
      localStorage.removeItem('userToken');
      setIsLoggedIn(false);
      router.push('/');
    } else {
      router.push(path);
    }
    
    handleCloseNavMenu()
   
    
  };

  


  

  return (
    <AppBar sx={{boxShadow:'none'}} position="static">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
         {/* mobile */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FACEBOOK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleMenuItemClickPages(page.path)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FACEBOOk
          </Typography>

 {
  localStorage.getItem('userToken')?
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  {pages.map((page) => (
    <Button
      key={page.name}
      onClick={() => handleMenuItemClickPages(page.path)}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {page.name}
    </Button>
  ))}
</Box>:null
 }
 

         
        
{
 localStorage.getItem('userToken')?
 ( 
 
 
 <Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
      <Avatar alt="Remy Sharp" src={userData?.photo}/>
    </IconButton>
  </Tooltip>
  <Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
  >
    
    {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={() => handleMenuItemClick(setting.path)}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
</Box>):null}
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}




