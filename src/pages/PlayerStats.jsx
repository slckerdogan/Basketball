import React, { useState, useCallback } from 'react';
import { Container, Table } from 'react-bootstrap';
import { 
  TableSortLabel, 
  TextField, 
  Box,
  IconButton,
  Typography 
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '2rem 1rem',
  '@media (min-width: 768px)': {
    padding: '3rem 2rem',
  }
}));

const SearchBox = styled(Box)({
  marginBottom: '2rem',
  maxWidth: '400px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const StyledTable = styled(Table)({
  backgroundColor: '#fff',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  
  'th, td': {
    padding: '0.75rem',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    
    '&:first-of-type': {
      position: 'sticky',
      left: 0,
      backgroundColor: 'inherit',
      fontWeight: 500,
      minWidth: '180px',
      zIndex: 1,
    },
    '&:nth-of-type(2)': {
      position: 'sticky',
      left: '180px',
      backgroundColor: 'inherit',
      zIndex: 1,
    }
  },
  
  'th': {
    backgroundColor: '#f8f9fa',
    fontWeight: 600,
    borderBottom: '2px solid #dee2e6',
    
    '&:hover': {
      backgroundColor: '#e9ecef',
    }
  },
  
  'tbody tr': {
    transition: 'background-color 0.2s',
    
    '&:hover': {
      backgroundColor: '#f8f9fa',
    }
  }
});

const INITIAL_SORT_CONFIG = {
  key: 'ppg',
  direction: 'desc'
};

const PlayerStats = () => {
  const [sortConfig, setSortConfig] = useState(INITIAL_SORT_CONFIG);
  const [searchTerm, setSearchTerm] = useState('');

  const players = [
    {
      id: 1,
      name: "Joel Embiid",
      team: "Philadelphia 76ers",
      gp: 39, // Games Played
      mpg: 34.2, // Minutes Per Game
      ppg: 35.3, // Points Per Game
      rpg: 11.5, // Rebounds Per Game
      apg: 5.7, // Assists Per Game
      spg: 1.2, // Steals Per Game
      bpg: 1.8, // Blocks Per Game
      topg: 3.6, // Turnovers Per Game
      fgPercent: 53.8, // Field Goal Percentage
      threePtPercent: 36.2, // Three Point Percentage
      ftPercent: 88.5, // Free Throw Percentage
      plusMinus: 7.8
    },
    {
      id: 2,
      name: "Shai Gilgeous-Alexander",
      team: "Oklahoma City Thunder",
      gp: 68,
      mpg: 33.8,
      ppg: 30.4,
      rpg: 5.5,
      apg: 6.2,
      spg: 2.0,
      bpg: 0.8,
      topg: 2.4,
      fgPercent: 54.2,
      threePtPercent: 34.8,
      ftPercent: 88.2,
      plusMinus: 8.2
    },
    {
      id: 3,
      name: "Giannis Antetokounmpo",
      team: "Milwaukee Bucks",
      gp: 66,
      mpg: 34.5,
      ppg: 30.2,
      rpg: 11.2,
      apg: 6.4,
      spg: 1.2,
      bpg: 1.2,
      topg: 3.2,
      fgPercent: 61.1,
      threePtPercent: 27.4,
      ftPercent: 65.7,
      plusMinus: 6.4
    },
    {
      id: 4,
      name: "Luka Doncic",
      team: "Dallas Mavericks",
      gp: 65,
      mpg: 36.2,
      ppg: 33.8,
      rpg: 9.2,
      apg: 9.8,
      spg: 1.4,
      bpg: 0.5,
      topg: 3.8,
      fgPercent: 48.8,
      threePtPercent: 38.2,
      ftPercent: 78.4,
      plusMinus: 4.2
    },
    {
      id: 5,
      name: "Jayson Tatum",
      team: "Boston Celtics",
      gp: 72,
      mpg: 35.6,
      ppg: 27.4,
      rpg: 8.5,
      apg: 4.9,
      spg: 1.0,
      bpg: 0.7,
      topg: 2.8,
      fgPercent: 47.8,
      threePtPercent: 37.6,
      ftPercent: 83.5,
      plusMinus: 9.6
    },
    // Daha fazla oyuncu eklenebilir...
  ];

  const resetFilters = useCallback(() => {
    setSearchTerm('');
    setSortConfig(INITIAL_SORT_CONFIG);
  }, []);

  const requestSort = useCallback((key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  const getSortedPlayers = useCallback(() => {
    const filteredPlayers = players.filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return [...filteredPlayers].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [players, searchTerm, sortConfig]);

  const SortableHeader = ({ label, field }) => (
    <th>
      <TableSortLabel
        active={sortConfig.key === field}
        direction={sortConfig.key === field ? sortConfig.direction : 'asc'}
        onClick={() => requestSort(field)}
        sx={{
          '&.MuiTableSortLabel-root': {
            color: '#1a237e',
          },
          '&.MuiTableSortLabel-root:hover': {
            color: '#1a237e',
          },
          '&.Mui-active': {
            color: '#1a237e',
          },
          '& .MuiTableSortLabel-icon': {
            color: '#1a237e !important',
          },
        }}
      >
        {label}
      </TableSortLabel>
    </th>
  );

  return (
    <StyledContainer>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ color: '#1a237e', fontWeight: 'bold', marginBottom: '2rem' }}
      >
        NBA Oyuncu İstatistikleri
      </Typography>

      <SearchBox>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Oyuncu Ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#1a237e',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1a237e',
              },
            },
          }}
          InputProps={{
            endAdornment: searchTerm && (
              <IconButton 
                onClick={resetFilters}
                size="small"
                sx={{ 
                  color: '#1a237e',
                  '&:hover': {
                    backgroundColor: 'rgba(26, 35, 126, 0.04)',
                  }
                }}
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
        />
      </SearchBox>

      <div style={{ overflowX: 'auto' }}>
        <StyledTable>
          <thead>
            <tr>
              <SortableHeader label="Oyuncu" field="name" />
              <SortableHeader label="Takım" field="team" />
              <SortableHeader label="Maç" field="gp" />
              <SortableHeader label="Dk" field="mpg" />
              <SortableHeader label="Sayı" field="ppg" />
              <SortableHeader label="Ribaund" field="rpg" />
              <SortableHeader label="Asist" field="apg" />
              <SortableHeader label="Top Çalma" field="spg" />
              <SortableHeader label="Blok" field="bpg" />
              <SortableHeader label="Top Kayıp" field="topg" />
              <SortableHeader label="Şut %" field="fgPercent" />
              <SortableHeader label="3'lük %" field="threePtPercent" />
              <SortableHeader label="Serbest %" field="ftPercent" />
              <SortableHeader label="+/-" field="plusMinus" />
            </tr>
          </thead>
          <tbody>
            {getSortedPlayers().map(player => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.gp}</td>
                <td>{player.mpg.toFixed(1)}</td>
                <td>{player.ppg.toFixed(1)}</td>
                <td>{player.rpg.toFixed(1)}</td>
                <td>{player.apg.toFixed(1)}</td>
                <td>{player.spg.toFixed(1)}</td>
                <td>{player.bpg.toFixed(1)}</td>
                <td>{player.topg.toFixed(1)}</td>
                <td>{player.fgPercent.toFixed(1)}</td>
                <td>{player.threePtPercent.toFixed(1)}</td>
                <td>{player.ftPercent.toFixed(1)}</td>
                <td>{player.plusMinus.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>

      <Box sx={{ mt: 4, p: 2, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>İstatistik Açıklamaları:</Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li><strong>Maç:</strong> Oynadığı maç sayısı</li>
            <li><strong>Dk:</strong> Maç başına ortalama dakika</li>
            <li><strong>Sayı:</strong> Maç başına sayı ortalaması</li>
            <li><strong>Ribaund:</strong> Maç başına ribaund ortalaması</li>
            <li><strong>Asist:</strong> Maç başına asist ortalaması</li>
            <li><strong>Top Çalma:</strong> Maç başına top çalma ortalaması</li>
            <li><strong>Blok:</strong> Maç başına blok ortalaması</li>
            <li><strong>Top Kayıp:</strong> Maç başına top kaybı ortalaması</li>
            <li><strong>Şut %:</strong> Genel şut yüzdesi</li>
            <li><strong>3'lük %:</strong> 3 sayılık şut yüzdesi</li>
            <li><strong>Serbest %:</strong> Serbest atış yüzdesi</li>
            <li><strong>+/-:</strong> Oyuncunun sahada olduğu süredeki sayı farkı ortalaması</li>
          </ul>
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default PlayerStats;