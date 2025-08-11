'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import { useTheme } from '@/theme/ThemeProvider';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: PersonIcon },
  { name: 'Portfolio', href: '/portfolio', icon: WorkIcon },
];

const drawerWidth = 256;

export default function Sidebar() {
  const pathname = usePathname();
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: muiTheme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
          borderRight: `1px solid ${muiTheme.palette.divider}`,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: `1px solid ${muiTheme.palette.divider}`,
          }}
        >
          <Typography variant="h6" component="h1" fontWeight="bold">
            Chandler Hardy
          </Typography>
          <IconButton onClick={toggleTheme} size="small">
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>

        {/* Navigation */}
        <List sx={{ flexGrow: 1, p: 1 }}>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <ListItem key={item.name} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  selected={isActive}
                  sx={{
                    borderRadius: 1,
                    '&.Mui-selected': {
                      backgroundColor: muiTheme.palette.primary.main,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: muiTheme.palette.primary.dark,
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                      },
                    },
                    '&:hover': {
                      backgroundColor: muiTheme.palette.action.hover,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? 'white' : muiTheme.palette.text.secondary,
                      minWidth: 40,
                    }}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.875rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* Footer */}
        <Box sx={{ p: 2, borderTop: `1px solid ${muiTheme.palette.divider}` }}>
          <Typography variant="caption" color="text.secondary">
            © 2025 Chandler Hardy
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
