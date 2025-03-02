import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Box } from '@mui/material';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      bg="primary" 
      variant="dark" 
      expand="lg" 
      expanded={expanded}
      sticky="top"
      sx={{ padding: { xs: '0.5rem', sm: '1rem' } }} // Responsive padding
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <SportsBasketballIcon sx={{ fontSize: 28 }} />
          <Box component="span" sx={{ ml: 1, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>Basketball App</Box>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['/', '/takim-istatistikleri', '/oyuncu-istatistikleri', '/sakatlik-raporlari', '/fikstur', '/puan-durumu', '/iletisim', '/hakkimizda'].map((path, index) => (
              <Nav.Link 
                key={index}
                as={Link} 
                to={path} 
                onClick={handleNavClick}
                className={location.pathname === path ? 'active' : ''}
                sx={{ 
                  fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
                  padding: { xs: '0.5rem 1rem', sm: '0.75rem 1.5rem' }, // Responsive padding
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Hover effect
                  }
                }}
              >
                {path === '/' ? 'Ana Sayfa' : path.replace('/', '').replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;