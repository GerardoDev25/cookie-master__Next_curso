import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  const redirectHome = (e: any) => {
    e.preventDefault();
    router.push('/');
  };
  const redirectThemeChange = (e: any) => {
    e.preventDefault();
    router.push('/theme-change');
  };

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlined />
        </IconButton>

        <Link underline='none' href='/' onClick={redirectHome}>
          <Typography color={'white'} variant='h6'>
            CookieMaster
          </Typography>
        </Link>

        <div style={{ flex: 1 }} />
        <Link underline='none' href='/' onClick={redirectThemeChange}>
          <Typography color={'white'} variant='h6'>
            Combiar Tema
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
