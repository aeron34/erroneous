import React from 'react';
import { Box, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './Home.module.scss';

const sideBarIcons = [
  <FormatListBulletedIcon/>,
  <TimelineIcon/>
];

const Home = () => {
  return (
    <Box sx={{
      paddingLeft: '11rem'
    }}>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            width: '10rem'
          }
        }}
        variant='permanent' 
        anchor='left'
      >
      <Box className={styles.box}>
        <div>
          <AccountCircleIcon
            fontSize='large'
          />
        </div>
        <div>
          <Typography>Example Account</Typography>
        </div>
      </Box>
      <Divider />
        <List>
          {sideBarIcons.map(icon => (
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon> {icon} </ListItemIcon>
                <Link underline="none"> One </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Dash/>
    </Box>
  )
}

const Dash = () => {
  return (
    <Box className={styles.dash}>
      Dashboard
      <Box className={styles['header-buttons-bar']}>
        <div>Grid</div>
        <div>Grid</div>
        <div>space</div>
        <div>Grid</div>
        <div>Grid</div>
      </Box>
      <Box className={styles['header-dash']}>
        <div></div>
        <div></div>
        <div></div>
      </Box>
    </Box>
  );
}

export default Home;