import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { 
  Box, 
  Typography, 
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '2rem 1rem',
  '@media (min-width: 768px)': {
    padding: '3rem 2rem',
  }
}));

const StyledTable = styled(Table)({
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
  borderRadius: '8px',
  overflow: 'hidden',
  
  'th, td': {
    padding: '1rem',
    fontSize: '0.9rem',
    verticalAlign: 'middle',
  },
  
  'th': {
    backgroundColor: '#f8f9fa',
    fontWeight: 600,
    borderBottom: '2px solid #dee2e6',
  },
  
  'tbody tr': {
    transition: 'background-color 0.2s',
    
    '&:hover': {
      backgroundColor: '#f8f9fa',
    }
  }
});

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index} id={`tabpanel-${index}`}>
    {value === index && children}
  </div>
);

const Standings = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const easternConference = [
    {
      rank: 1,
      team: "Boston Celtics",
      wins: 62,
      losses: 16,
      winPercentage: .795,
      gamesBehind: 0.0,
      pointsFor: 120.8,
      pointsAgainst: 109.2,
      lastTen: "8-2",
      streak: "W3",
      homeRecord: "32-6",
      awayRecord: "30-10"
    },
    {
      rank: 2,
      team: "Milwaukee Bucks",
      wins: 47,
      losses: 31,
      winPercentage: .603,
      gamesBehind: 15.0,
      pointsFor: 119.2,
      pointsAgainst: 116.8,
      lastTen: "4-6",
      streak: "L2",
      homeRecord: "27-12",
      awayRecord: "20-19"
    },
    {
      rank: 3,
      team: "Cleveland Cavaliers",
      wins: 46,
      losses: 32,
      winPercentage: .590,
      gamesBehind: 16.0,
      pointsFor: 113.5,
      pointsAgainst: 107.8,
      lastTen: "4-6",
      streak: "L1",
      homeRecord: "28-11",
      awayRecord: "18-21"
    },
    {
      rank: 4,
      team: "Orlando Magic",
      wins: 46,
      losses: 32,
      winPercentage: .590,
      gamesBehind: 16.0,
      pointsFor: 112.7,
      pointsAgainst: 108.4,
      lastTen: "7-3",
      streak: "W2",
      homeRecord: "26-13",
      awayRecord: "20-19"
    },
    {
      rank: 5,
      team: "New York Knicks",
      wins: 45,
      losses: 32,
      winPercentage: .584,
      gamesBehind: 16.5,
      pointsFor: 113.2,
      pointsAgainst: 109.1,
      lastTen: "6-4",
      streak: "L1",
      homeRecord: "25-14",
      awayRecord: "20-18"
    },
    {
      rank: 6,
      team: "Indiana Pacers",
      wins: 44,
      losses: 34,
      winPercentage: .564,
      gamesBehind: 18.0,
      pointsFor: 123.2,
      pointsAgainst: 121.4,
      lastTen: "6-4",
      streak: "W1",
      homeRecord: "26-13",
      awayRecord: "18-21"
    },
    {
      rank: 7,
      team: "Miami Heat",
      wins: 42,
      losses: 35,
      winPercentage: .545,
      gamesBehind: 19.5,
      pointsFor: 109.8,
      pointsAgainst: 109.2,
      lastTen: "6-4",
      streak: "W1",
      homeRecord: "21-18",
      awayRecord: "21-17"
    },
    {
      rank: 8,
      team: "Philadelphia 76ers",
      wins: 41,
      losses: 37,
      winPercentage: .526,
      gamesBehind: 21.0,
      pointsFor: 114.6,
      pointsAgainst: 112.8,
      lastTen: "3-7",
      streak: "L4",
      homeRecord: "23-16",
      awayRecord: "18-21"
    },
    {
      rank: 9,
      team: "Chicago Bulls",
      wins: 37,
      losses: 41,
      winPercentage: .474,
      gamesBehind: 25.0,
      pointsFor: 110.2,
      pointsAgainst: 112.4,
      lastTen: "6-4",
      streak: "W2",
      homeRecord: "20-19",
      awayRecord: "17-22"
    },
    {
      rank: 10,
      team: "Atlanta Hawks",
      wins: 36,
      losses: 42,
      winPercentage: .462,
      gamesBehind: 26.0,
      pointsFor: 113.8,
      pointsAgainst: 117.2,
      lastTen: "5-5",
      streak: "L2",
      homeRecord: "22-17",
      awayRecord: "14-25"
    },
    {
      rank: 11,
      team: "Brooklyn Nets",
      wins: 31,
      losses: 47,
      winPercentage: .397,
      gamesBehind: 31.0,
      pointsFor: 109.4,
      pointsAgainst: 114.6,
      lastTen: "4-6",
      streak: "W1",
      homeRecord: "17-22",
      awayRecord: "14-25"
    },
    {
      rank: 12,
      team: "Toronto Raptors",
      wins: 25,
      losses: 53,
      winPercentage: .321,
      gamesBehind: 37.0,
      pointsFor: 108.2,
      pointsAgainst: 115.8,
      lastTen: "2-8",
      streak: "L1",
      homeRecord: "15-24",
      awayRecord: "10-29"
    },
    {
      rank: 13,
      team: "Charlotte Hornets",
      wins: 18,
      losses: 60,
      winPercentage: .231,
      gamesBehind: 44.0,
      pointsFor: 106.4,
      pointsAgainst: 117.2,
      lastTen: "2-8",
      streak: "L2",
      homeRecord: "9-30",
      awayRecord: "9-30"
    },
    {
      rank: 14,
      team: "Washington Wizards",
      wins: 15,
      losses: 63,
      winPercentage: .192,
      gamesBehind: 47.0,
      pointsFor: 109.6,
      pointsAgainst: 120.8,
      lastTen: "3-7",
      streak: "W1",
      homeRecord: "7-31",
      awayRecord: "8-32"
    },
    {
      rank: 15,
      team: "Detroit Pistons",
      wins: 13,
      losses: 65,
      winPercentage: .167,
      gamesBehind: 49.0,
      pointsFor: 110.2,
      pointsAgainst: 121.6,
      lastTen: "2-8",
      streak: "L3",
      homeRecord: "8-31",
      awayRecord: "5-34"
    }
  ];

  const westernConference = [
    {
      rank: 1,
      team: "Denver Nuggets",
      wins: 54,
      losses: 24,
      winPercentage: .692,
      gamesBehind: 0.0,
      pointsFor: 114.2,
      pointsAgainst: 109.8,
      lastTen: "6-4",
      streak: "W1",
      homeRecord: "32-8",
      awayRecord: "22-16"
    },
    {
      rank: 2,
      team: "Minnesota Timberwolves",
      wins: 54,
      losses: 24,
      winPercentage: .692,
      gamesBehind: 0.0,
      pointsFor: 113.2,
      pointsAgainst: 107.6,
      lastTen: "7-3",
      streak: "W3",
      homeRecord: "29-10",
      awayRecord: "25-14"
    },
    {
      rank: 3,
      team: "Oklahoma City Thunder",
      wins: 53,
      losses: 25,
      winPercentage: .679,
      gamesBehind: 1.0,
      pointsFor: 120.4,
      pointsAgainst: 113.2,
      lastTen: "6-4",
      streak: "W1",
      homeRecord: "29-10",
      awayRecord: "24-15"
    },
    {
      rank: 4,
      team: "LA Clippers",
      wins: 47,
      losses: 31,
      winPercentage: .603,
      gamesBehind: 7.0,
      pointsFor: 115.8,
      pointsAgainst: 112.4,
      lastTen: "5-5",
      streak: "L2",
      homeRecord: "26-13",
      awayRecord: "21-18"
    },
    {
      rank: 5,
      team: "Dallas Mavericks",
      wins: 45,
      losses: 33,
      winPercentage: .577,
      gamesBehind: 9.0,
      pointsFor: 118.6,
      pointsAgainst: 116.2,
      lastTen: "6-4",
      streak: "L1",
      homeRecord: "25-14",
      awayRecord: "20-19"
    },
    {
      rank: 6,
      team: "Phoenix Suns",
      wins: 45,
      losses: 33,
      winPercentage: .577,
      gamesBehind: 9.0,
      pointsFor: 116.8,
      pointsAgainst: 114.2,
      lastTen: "5-5",
      streak: "L1",
      homeRecord: "26-13",
      awayRecord: "19-20"
    },
    {
      rank: 7,
      team: "Sacramento Kings",
      wins: 44,
      losses: 34,
      winPercentage: .564,
      gamesBehind: 10.0,
      pointsFor: 116.4,
      pointsAgainst: 115.8,
      lastTen: "5-5",
      streak: "L1",
      homeRecord: "22-17",
      awayRecord: "22-17"
    },
    {
      rank: 8,
      team: "Los Angeles Lakers",
      wins: 44,
      losses: 35,
      winPercentage: .557,
      gamesBehind: 10.5,
      pointsFor: 117.2,
      pointsAgainst: 116.8,
      lastTen: "7-3",
      streak: "W1",
      homeRecord: "27-12",
      awayRecord: "17-23"
    },
    {
      rank: 9,
      team: "Golden State Warriors",
      wins: 42,
      losses: 36,
      winPercentage: .538,
      gamesBehind: 12.0,
      pointsFor: 118.8,
      pointsAgainst: 116.4,
      lastTen: "7-3",
      streak: "W2",
      homeRecord: "23-16",
      awayRecord: "19-20"
    },
    {
      rank: 10,
      team: "Houston Rockets",
      wins: 38,
      losses: 40,
      winPercentage: .487,
      gamesBehind: 16.0,
      pointsFor: 114.2,
      pointsAgainst: 112.8,
      lastTen: "6-4",
      streak: "W1",
      homeRecord: "24-15",
      awayRecord: "14-25"
    },
    {
      rank: 11,
      team: "New Orleans Pelicans",
      wins: 37,
      losses: 41,
      winPercentage: .474,
      gamesBehind: 17.0,
      pointsFor: 114.6,
      pointsAgainst: 115.2,
      lastTen: "2-8",
      streak: "L8",
      homeRecord: "19-20",
      awayRecord: "18-21"
    },
    {
      rank: 12,
      team: "Utah Jazz",
      wins: 31,
      losses: 47,
      winPercentage: .397,
      gamesBehind: 23.0,
      pointsFor: 113.4,
      pointsAgainst: 118.6,
      lastTen: "3-7",
      streak: "L1",
      homeRecord: "19-20",
      awayRecord: "12-27"
    },
    {
      rank: 13,
      team: "Memphis Grizzlies",
      wins: 27,
      losses: 51,
      winPercentage: .346,
      gamesBehind: 27.0,
      pointsFor: 106.8,
      pointsAgainst: 116.2,
      lastTen: "4-6",
      streak: "W1",
      homeRecord: "14-25",
      awayRecord: "13-26"
    },
    {
      rank: 14,
      team: "Portland Trail Blazers",
      wins: 21,
      losses: 57,
      winPercentage: .269,
      gamesBehind: 33.0,
      pointsFor: 108.2,
      pointsAgainst: 117.4,
      lastTen: "3-7",
      streak: "L1",
      homeRecord: "13-26",
      awayRecord: "8-31"
    },
    {
      rank: 15,
      team: "San Antonio Spurs",
      wins: 18,
      losses: 60,
      winPercentage: .231,
      gamesBehind: 36.0,
      pointsFor: 112.4,
      pointsAgainst: 120.6,
      lastTen: "3-7",
      streak: "L2",
      homeRecord: "11-28",
      awayRecord: "7-32"
    }
  ];

  // Combine Eastern and Western Conference data for overall standings
  const overallStandings = [...easternConference, ...westernConference]
    .sort((a, b) => b.winPercentage - a.winPercentage)
    .map((team, index) => ({ ...team, rank: index + 1 }));

  const renderTable = (data) => (
    <StyledTable>
      <thead>
        <tr>
          <th>Sıra</th>
          <th>Takım</th>
          <th>G</th>
          <th>M</th>
          <th>%</th>
          <th>GB</th>
          <th>PF</th>
          <th>PA</th>
          <th>Son 10</th>
          <th>Seri</th>
          <th>İç Saha</th>
          <th>Deplasman</th>
        </tr>
      </thead>
      <tbody>
        {data.map((team) => (
          <tr key={team.team}>
            <td>{team.rank}</td>
            <td>{team.team}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
            <td>{team.winPercentage.toFixed(3)}</td>
            <td>{team.gamesBehind.toFixed(1)}</td>
            <td>{team.pointsFor.toFixed(1)}</td>
            <td>{team.pointsAgainst.toFixed(1)}</td>
            <td>{team.lastTen}</td>
            <td>{team.streak}</td>
            <td>{team.homeRecord}</td>
            <td>{team.awayRecord}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );

  return (
    <StyledContainer>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ color: '#1a237e', fontWeight: 'bold', marginBottom: '2rem' }}
      >
        NBA Puan Durumu
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 3 }}>
        <Tabs 
          value={currentTab} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              color: '#1a237e',
              '&.Mui-selected': {
                color: '#1a237e',
                fontWeight: 'bold',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#1a237e',
            },
          }}
        >
          <Tab label="Doğu Konferansı" />
          <Tab label="Batı Konferansı" />
          <Tab label="Genel Sıralama" />
        </Tabs>
      </Box>

      <TabPanel value={currentTab} index={0}>
        {renderTable(easternConference)}
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        {renderTable(westernConference)}
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        {renderTable(overallStandings)}
      </TabPanel>

      <Box sx={{ mt: 4, p: 2, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Sütun Açıklamaları:</Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li><strong>Sıra:</strong> Konferanstaki sıralama</li>
            <li><strong>G:</strong> Galibiyet sayısı</li>
            <li><strong>M:</strong> Mağlubiyet sayısı</li>
            <li><strong>%:</strong> Galibiyet yüzdesi</li>
            <li><strong>GB:</strong> Games Behind - Konferans liderinden kaç maç geride</li>
            <li><strong>PF:</strong> Points For - Maç başına atılan sayı ortalaması</li>
            <li><strong>PA:</strong> Points Against - Maç başına yenilen sayı ortalaması</li>
            <li><strong>Son 10:</strong> Son 10 maçtaki galibiyet-mağlubiyet</li>
            <li><strong>Seri:</strong> Mevcut galibiyet (W) veya mağlubiyet (L) serisi</li>
            <li><strong>İç Saha:</strong> İç saha galibiyet-mağlubiyet</li>
            <li><strong>Deplasman:</strong> Deplasman galibiyet-mağlubiyet</li>
          </ul>
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default Standings;