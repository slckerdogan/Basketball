import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { 
  TextField, 
  Box, 
  Typography, 
  Button, 
  FormControl, 
  Select, 
  MenuItem,
  Paper,
  IconButton,
  Chip,
  Autocomplete
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '2rem 1rem',
  '@media (min-width: 768px)': {
    padding: '3rem 2rem',
  }
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem',
  alignItems: 'center',
  flexWrap: 'wrap',
  
  '.MuiTextField-root': {
    backgroundColor: '#fff',
    borderRadius: '8px',
    flexGrow: 1,
    maxWidth: '400px',
  },
  
  '.MuiButton-root': {
    height: '56px',
    minWidth: '56px',
  }
}));

const WeekSelector = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  backgroundColor: '#fff',
  borderRadius: '8px',
  marginBottom: '0,5rem',
}));

const StyledTable = styled(Table)({
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
  borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '2rem',
  
  'th, td': {
    padding: '1rem',
    verticalAlign: 'middle',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  
  'th': {
    backgroundColor: '#f8f9fa',
    fontWeight: 600,
    borderBottom: '2px solid #dee2e6',
  },
  
  '.score': {
    fontWeight: 600,
    padding: '0.25rem 0.5rem',
    backgroundColor: '#4898d1',
    borderRadius: '4px',
    margin: '0 0.5rem',
  },

  'tbody tr': {
    '&:hover': {
      backgroundColor: '#f8f9fa',
    }
  }
});

const Fixtures = () => {
  const [selectedMonth, setSelectedMonth] = useState('APR');
  const [searchTeam, setSearchTeam] = useState('');
  const [filteredTeam, setFilteredTeam] = useState(null);

  // NBA Takımları
  const nbaTeams = [
    { name: "Atlanta Hawks", conference: "Doğu" },
    { name: "Boston Celtics", conference: "Doğu" },
    { name: "Brooklyn Nets", conference: "Doğu" },
    { name: "Charlotte Hornets", conference: "Doğu" },
    { name: "Chicago Bulls", conference: "Doğu" },
    { name: "Cleveland Cavaliers", conference: "Doğu" },
    { name: "Detroit Pistons", conference: "Doğu" },
    { name: "Indiana Pacers", conference: "Doğu" },
    { name: "Miami Heat", conference: "Doğu" },
    { name: "Milwaukee Bucks", conference: "Doğu" },
    { name: "New York Knicks", conference: "Doğu" },
    { name: "Orlando Magic", conference: "Doğu" },
    { name: "Philadelphia 76ers", conference: "Doğu" },
    { name: "Toronto Raptors", conference: "Doğu" },
    { name: "Washington Wizards", conference: "Doğu" },
    { name: "Dallas Mavericks", conference: "Batı" },
    { name: "Denver Nuggets", conference: "Batı" },
    { name: "Golden State Warriors", conference: "Batı" },
    { name: "Houston Rockets", conference: "Batı" },
    { name: "LA Clippers", conference: "Batı" },
    { name: "Los Angeles Lakers", conference: "Batı" },
    { name: "Memphis Grizzlies", conference: "Batı" },
    { name: "Minnesota Timberwolves", conference: "Batı" },
    { name: "New Orleans Pelicans", conference: "Batı" },
    { name: "Oklahoma City Thunder", conference: "Batı" },
    { name: "Phoenix Suns", conference: "Batı" },
    { name: "Portland Trail Blazers", conference: "Batı" },
    { name: "Sacramento Kings", conference: "Batı" },
    { name: "San Antonio Spurs", conference: "Batı" },
    { name: "Utah Jazz", conference: "Batı" }
  ];

    // NBA 2023-24 sezonu maç takvimi
    const fixtures = {
      APR: [
        {
          id: 1,
          date: "2024-04-01",
          time: "19:30",
          homeTeam: "Boston Celtics",
          awayTeam: "Oklahoma City Thunder",
          score: "120:118",
          venue: "TD Garden",
          broadcast: "TNT",
          attendance: "19,156",
          status: "Tamamlandı"
        },
        {
          id: 2,
          date: "2024-04-01",
          time: "22:00",
          homeTeam: "Los Angeles Lakers",
          awayTeam: "Milwaukee Bucks",
          score: "115:110",
          venue: "Crypto.com Arena",
          broadcast: "TNT",
          attendance: "18,997",
          status: "Tamamlandı"
        },
        {
          id: 3,
          date: "2024-04-02",
          time: "19:30",
          homeTeam: "Philadelphia 76ers",
          awayTeam: "Denver Nuggets",
          score: "108:116",
          venue: "Wells Fargo Center",
          broadcast: "ESPN",
          attendance: "20,115",
          status: "Tamamlandı"
        },
        {
          id: 4,
          date: "2024-04-02",
          time: "20:00",
          homeTeam: "Brooklyn Nets",
          awayTeam: "Indiana Pacers",
          score: "122:128",
          venue: "Barclays Center",
          broadcast: "NBA TV",
          attendance: "17,732",
          status: "Tamamlandı"
        },
        {
          id: 5,
          date: "2024-04-03",
          time: "19:00",
          homeTeam: "Toronto Raptors",
          awayTeam: "Miami Heat",
          venue: "Scotiabank Arena",
          broadcast: "ESPN",
          status: "Oynanacak"
        },
        {
          id: 6,
          date: "2024-04-03",
          time: "19:30",
          homeTeam: "Atlanta Hawks",
          awayTeam: "Detroit Pistons",
          venue: "State Farm Arena",
          broadcast: "NBA TV",
          status: "Oynanacak"
        },
        {
          id: 7,
          date: "2024-04-03",
          time: "22:00",
          homeTeam: "LA Clippers",
          awayTeam: "Phoenix Suns",
          venue: "Crypto.com Arena",
          broadcast: "ESPN",
          status: "Oynanacak"
        },
        {
          id: 8,
          date: "2024-04-04",
          time: "19:30",
          homeTeam: "New York Knicks",
          awayTeam: "Sacramento Kings",
          venue: "Madison Square Garden",
          broadcast: "TNT",
          status: "Oynanacak"
        }
      ],
      MAY: [
        {
          id: 101,
          date: "2024-05-01",
          time: "20:00",
          homeTeam: "Boston Celtics",
          awayTeam: "Miami Heat",
          venue: "TD Garden",
          broadcast: "TNT",
          type: "Eastern Conference Playoffs - Round 1, Game 1",
          status: "Oynanacak"
        },
        {
          id: 102,
          date: "2024-05-01",
          time: "22:30",
          homeTeam: "Denver Nuggets",
          awayTeam: "Phoenix Suns",
          venue: "Ball Arena",
          broadcast: "TNT",
          type: "Western Conference Playoffs - Round 1, Game 1",
          status: "Oynanacak"
        },
        {
          id: 103,
          date: "2024-05-02",
          time: "19:00",
          homeTeam: "Milwaukee Bucks",
          awayTeam: "Indiana Pacers",
          venue: "Fiserv Forum",
          broadcast: "ESPN",
          type: "Eastern Conference Playoffs - Round 1, Game 1",
          status: "Oynanacak"
        },
        {
          id: 104,
          date: "2024-05-02",
          time: "21:30",
          homeTeam: "LA Clippers",
          awayTeam: "Dallas Mavericks",
          venue: "Crypto.com Arena",
          broadcast: "ESPN",
          type: "Western Conference Playoffs - Round 1, Game 1",
          status: "Oynanacak"
        }
      ]
    };
  
    const handleMonthChange = (event) => {
      setSelectedMonth(event.target.value);
    };
  
    const handleSearch = (event, newValue) => {
      if (newValue) {
        setFilteredTeam(newValue.name);
      }
    };
  
    const handleBack = () => {
      setFilteredTeam(null);
      setSearchTeam('');
    };
  
    const getAllTeamMatches = () => {
      if (!filteredTeam) return [];
      
      const allMatches = [];
      Object.entries(fixtures).forEach(([month, games]) => {
        const teamMatches = games.filter(match =>
          match.homeTeam.toLowerCase().includes(filteredTeam.toLowerCase()) ||
          match.awayTeam.toLowerCase().includes(filteredTeam.toLowerCase())
        );
        
        if (teamMatches.length > 0) {
          allMatches.push({
            month,
            matches: teamMatches
          });
        }
      });
      return allMatches;
    };
  
    const getMonthMatches = () => {
      return fixtures[selectedMonth] || [];
    };
  
    const formatDate = (dateStr) => {
      return new Date(dateStr).toLocaleDateString('tr-TR', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
    };
  
    return (
      <StyledContainer>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ color: '#1a237e', fontWeight: 'bold', marginBottom: '2rem' }}
        >
          NBA Maç Programı
        </Typography>
  
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 3, flexWrap: 'wrap', alignItems: 'center' }}>
          {!filteredTeam ? (
            <>
              <WeekSelector>
                <Select
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  sx={{ backgroundColor: '#fff' }}
                >
                  <MenuItem value="APR">Nisan 2024</MenuItem>
                  <MenuItem value="MAY">Mayıs 2024</MenuItem>
                </Select>
              </WeekSelector>
  
              <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
                <Autocomplete
                  options={nbaTeams}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Takım Ara..."
                      sx={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: '#1a237e',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#1a237e',
                          },
                        },
                      }}
                    />
                  )}
                  onChange={handleSearch}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      <Typography>
                        {option.name}
                        <Typography
                          component="span"
                          sx={{
                            fontSize: '0.8rem',
                            color: 'text.secondary',
                            ml: 1
                          }}
                        >
                          ({option.conference})
                        </Typography>
                      </Typography>
                    </Box>
                  )}
                />
              </Box>
            </>
          ) : (
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              sx={{
                borderColor: '#1a237e',
                color: '#1a237e',
                '&:hover': {
                  borderColor: '#0d1b60',
                  backgroundColor: 'rgba(26, 35, 126, 0.04)',
                },
              }}
            >
              Programa Dön
            </Button>
          )}
        </Box>
  
        {!filteredTeam ? (
          <Paper 
            elevation={0}
            sx={{ 
              marginBottom: 3,
              backgroundColor: 'transparent'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#1a237e',
                fontWeight: 600,
                marginBottom: 2
              }}
            >
              {selectedMonth === 'APR' ? 'Nisan 2024' : 'Mayıs 2024'}
            </Typography>
            <StyledTable>
              <thead>
                <tr>
                  <th>Tarih</th>
                  <th>Ev Sahibi</th>
                  <th>Skor</th>
                  <th>Deplasman</th>
                  <th>Salon</th>
                  <th>Yayın</th>
                  <th>Durum</th>
                </tr>
              </thead>
              <tbody>
                {getMonthMatches().map(match => (
                  <tr key={match.id}>
                    <td>{formatDate(match.date)}</td>
                    <td>{match.homeTeam}</td>
                    <td>
                      {match.score ? (
                        <span className="score">{match.score}</span>
                      ) : (
                        <Chip 
                          label={`${match.time} ET`}
                          size="small"
                          sx={{ 
                            backgroundColor: '#e24d12',
                            fontWeight: 500
                          }}
                        />
                      )}
                    </td>
                    <td>{match.awayTeam}</td>
                    <td>{match.venue}</td>
                    <td>{match.broadcast}</td>
                    <td>
                      <Chip 
                        label={match.status}
                        size="small"
                        sx={{ 
                          backgroundColor: match.status === 'Tamamlandı' ? '#4898d1' : '#e24d12',
                          fontWeight: 500
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </Paper>
        ) : (
          <>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#1a237e', 
                fontWeight: 600, 
                marginBottom: 3 
              }}
            >
              {filteredTeam} - Sezon Programı
            </Typography>
            {getAllTeamMatches().map(({ month, matches }) => (
              <Paper 
                key={month}
                elevation={0}
                sx={{ 
                  marginBottom: 3,
                  backgroundColor: 'transparent'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#1a237e',
                    fontWeight: 600,
                    marginBottom: 2
                  }}
                >
                  {month === 'APR' ? 'Nisan 2024' : 'Mayıs 2024'}
                </Typography>
                <StyledTable>
                  <thead>
                    <tr>
                      <th>Tarih</th>
                      <th>Ev Sahibi</th>
                      <th>Skor/Saat</th>
                      <th>Deplasman</th>
                      <th>Salon</th>
                      <th>Yayın</th>
                      <th>Durum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matches.map(match => (
                      <tr key={match.id}>
                        <td>{formatDate(match.date)}</td>
                        <td>{match.homeTeam}</td>
                        <td>
                          {match.score ? (
                            <span className="score">{match.score}</span>
                          ) : (
                            <Chip 
                              label={`${match.time} ET`}
                              size="small"
                              sx={{ 
                                backgroundColor: '#fff3e0',
                                fontWeight: 500
                              }}
                            />
                          )}
                        </td>
                        <td>{match.awayTeam}</td>
                        <td>{match.venue}</td>
                        <td>{match.broadcast}</td>
                        <td>
                          <Chip 
                            label={match.status}
                            size="small"
                            sx={{ 
                              backgroundColor: match.status === 'Final' ? '#e8f5e9' : '#fff3e0',
                              fontWeight: 500
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
              </Paper>
            ))}
          </>
        )}
      </StyledContainer>
    );
  };
  
  export default Fixtures;