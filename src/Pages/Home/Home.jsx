import React from 'react';
import { Box, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TimelineIcon from '@mui/icons-material/Timeline';

const sideBarIcons = [
  <FormatListBulletedIcon/>,
  <TimelineIcon/>
];

const Home = () => {
  return (
    <Box>

      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            width: '10rem'
           // paddingRight: '2rem'
          }
        }}
        variant='permanent' 
        anchor='left'
      >
      <Box sx={{
        height: '10rem',
      }}></Box>
      <Divider />
        <List>
          {sideBarIcons.map(x => (
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon> {x} </ListItemIcon>
                <Link underline="none"> One </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
export default Home;