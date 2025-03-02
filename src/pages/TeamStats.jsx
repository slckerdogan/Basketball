import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { 
  Typography, 
  Box, 
  Paper,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from '@mui/material'

const TeamStats = () => {
  const [season, setSeason] = useState('2023-2024')
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState([])

  const seasonData = {
    '2023-2024': [
      {
        id: 1,
        team: 'Los Angeles Lakers',
        firstHalfPtsFor: 55.5,
        firstHalfPtsAgainst: 52.3,
        secondHalfPtsFor: 58.2,
        secondHalfPtsAgainst: 56.1,
        pointsPerGame: 113.7,
        pointsAgainstPerGame: 108.4,
        defReboundsPerGame: 34.2,
        offReboundsPerGame: 10.5,
        stealsPerGame: 8.1,
        blocksPerGame: 5.3,
        assistsPerGame: 25.6,
        turnoversPerGame: 14.2,
        threePtPercentage: 36.7,
        twoPtPercentage: 53.4,
        freeThrowPercentage: 78.9,
        fieldGoalPercentage: 47.8
      },
      {
        id: 2,
        team: 'Golden State Warriors',
        firstHalfPtsFor: 57.8,
        firstHalfPtsAgainst: 54.1,
        secondHalfPtsFor: 60.3,
        secondHalfPtsAgainst: 57.2,
        pointsPerGame: 118.1,
        pointsAgainstPerGame: 110.3,
        defReboundsPerGame: 35.1,
        offReboundsPerGame: 11.2,
        stealsPerGame: 8.5,
        blocksPerGame: 5.6,
        assistsPerGame: 28.3,
        turnoversPerGame: 13.9,
        threePtPercentage: 38.2,
        twoPtPercentage: 54.1,
        freeThrowPercentage: 79.5,
        fieldGoalPercentage: 48.5
      },
      {
        id: 3,
        team: 'Boston Celtics',
        firstHalfPtsFor: 56.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 59.0,
        secondHalfPtsAgainst: 55.0,
        pointsPerGame: 115.0,
        pointsAgainstPerGame: 109.0,
        defReboundsPerGame: 34.0,
        offReboundsPerGame: 9.0,
        stealsPerGame: 7.0,
        blocksPerGame: 4.0,
        assistsPerGame: 26.0,
        turnoversPerGame: 12.0,
        threePtPercentage: 37.0,
        twoPtPercentage: 52.0,
        freeThrowPercentage: 80.0,
        fieldGoalPercentage: 46.0
      },
      {
        id: 4,
        team: 'Miami Heat',
        firstHalfPtsFor: 54.0,
        firstHalfPtsAgainst: 51.0,
        secondHalfPtsFor: 57.0,
        secondHalfPtsAgainst: 54.0,
        pointsPerGame: 111.0,
        pointsAgainstPerGame: 107.0,
        defReboundsPerGame: 33.0,
        offReboundsPerGame: 8.0,
        stealsPerGame: 6.0,
        blocksPerGame: 3.0,
        assistsPerGame: 24.0,
        turnoversPerGame: 15.0,
        threePtPercentage: 35.0,
        twoPtPercentage: 51.0,
        freeThrowPercentage: 79.0,
        fieldGoalPercentage: 45.0
      },
      {
        id: 5,
        team: 'Milwaukee Bucks',
        firstHalfPtsFor: 58.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 61.0,
        secondHalfPtsAgainst: 56.0,
        pointsPerGame: 119.0,
        pointsAgainstPerGame: 111.0,
        defReboundsPerGame: 36.0,
        offReboundsPerGame: 10.0,
        stealsPerGame: 9.0,
        blocksPerGame: 6.0,
        assistsPerGame: 27.0,
        turnoversPerGame: 13.0,
        threePtPercentage: 39.0,
        twoPtPercentage: 55.0,
        freeThrowPercentage: 81.0,
        fieldGoalPercentage: 49.0
      },
      // Diğer takımların verileri buraya eklenebilir
    ],
    '2022-2023': [
      {
        id: 1,
        team: 'Los Angeles Lakers',
        firstHalfPtsFor: 55.5,
        firstHalfPtsAgainst: 52.3,
        secondHalfPtsFor: 58.2,
        secondHalfPtsAgainst: 56.1,
        pointsPerGame: 113.7,
        pointsAgainstPerGame: 108.4,
        defReboundsPerGame: 34.2,
        offReboundsPerGame: 10.5,
        stealsPerGame: 8.1,
        blocksPerGame: 5.3,
        assistsPerGame: 25.6,
        turnoversPerGame: 14.2,
        threePtPercentage: 36.7,
        twoPtPercentage: 53.4,
        freeThrowPercentage: 78.9,
        fieldGoalPercentage: 47.8
      },
      {
        id: 2,
        team: 'Golden State Warriors',
        firstHalfPtsFor: 57.8,
        firstHalfPtsAgainst: 54.1,
        secondHalfPtsFor: 60.3,
        secondHalfPtsAgainst: 57.2,
        pointsPerGame: 118.1,
        pointsAgainstPerGame: 110.3,
        defReboundsPerGame: 35.1,
        offReboundsPerGame: 11.2,
        stealsPerGame: 8.5,
        blocksPerGame: 5.6,
        assistsPerGame: 28.3,
        turnoversPerGame: 13.9,
        threePtPercentage: 38.2,
        twoPtPercentage: 54.1,
        freeThrowPercentage: 79.5,
        fieldGoalPercentage: 48.5
      },
      {
        id: 3,
        team: 'Boston Celtics',
        firstHalfPtsFor: 56.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 59.0,
        secondHalfPtsAgainst: 55.0,
        pointsPerGame: 115.0,
        pointsAgainstPerGame: 109.0,
        defReboundsPerGame: 34.0,
        offReboundsPerGame: 9.0,
        stealsPerGame: 7.0,
        blocksPerGame: 4.0,
        assistsPerGame: 26.0,
        turnoversPerGame: 12.0,
        threePtPercentage: 37.0,
        twoPtPercentage: 52.0,
        freeThrowPercentage: 80.0,
        fieldGoalPercentage: 46.0
      },
      {
        id: 4,
        team: 'Miami Heat',
        firstHalfPtsFor: 54.0,
        firstHalfPtsAgainst: 51.0,
        secondHalfPtsFor: 57.0,
        secondHalfPtsAgainst: 54.0,
        pointsPerGame: 111.0,
        pointsAgainstPerGame: 107.0,
        defReboundsPerGame: 33.0,
        offReboundsPerGame: 8.0,
        stealsPerGame: 6.0,
        blocksPerGame: 3.0,
        assistsPerGame: 24.0,
        turnoversPerGame: 15.0,
        threePtPercentage: 35.0,
        twoPtPercentage: 51.0,
        freeThrowPercentage: 79.0,
        fieldGoalPercentage: 45.0
      },
      {
        id: 5,
        team: 'Milwaukee Bucks',
        firstHalfPtsFor: 58.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 61.0,
        secondHalfPtsAgainst: 56.0,
        pointsPerGame: 119.0,
        pointsAgainstPerGame: 111.0,
        defReboundsPerGame: 36.0,
        offReboundsPerGame: 10.0,
        stealsPerGame: 9.0,
        blocksPerGame: 6.0,
        assistsPerGame: 27.0,
        turnoversPerGame: 13.0,
        threePtPercentage: 39.0,
        twoPtPercentage: 55.0,
        freeThrowPercentage: 81.0,
        fieldGoalPercentage: 49.0
      },
      // Diğer takımların verileri buraya eklenebilir
    ],
    '2021-2022': [
      {
        id: 1,
        team: 'Los Angeles Lakers',
        firstHalfPtsFor: 55.5,
        firstHalfPtsAgainst: 52.3,
        secondHalfPtsFor: 58.2,
        secondHalfPtsAgainst: 56.1,
        pointsPerGame: 113.7,
        pointsAgainstPerGame: 108.4,
        defReboundsPerGame: 34.2,
        offReboundsPerGame: 10.5,
        stealsPerGame: 8.1,
        blocksPerGame: 5.3,
        assistsPerGame: 25.6,
        turnoversPerGame: 14.2,
        threePtPercentage: 36.7,
        twoPtPercentage: 53.4,
        freeThrowPercentage: 78.9,
        fieldGoalPercentage: 47.8
      },
      {
        id: 2,
        team: 'Golden State Warriors',
        firstHalfPtsFor: 57.8,
        firstHalfPtsAgainst: 54.1,
        secondHalfPtsFor: 60.3,
        secondHalfPtsAgainst: 57.2,
        pointsPerGame: 118.1,
        pointsAgainstPerGame: 110.3,
        defReboundsPerGame: 35.1,
        offReboundsPerGame: 11.2,
        stealsPerGame: 8.5,
        blocksPerGame: 5.6,
        assistsPerGame: 28.3,
        turnoversPerGame: 13.9,
        threePtPercentage: 38.2,
        twoPtPercentage: 54.1,
        freeThrowPercentage: 79.5,
        fieldGoalPercentage: 48.5
      },
      {
        id: 3,
        team: 'Boston Celtics',
        firstHalfPtsFor: 56.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 59.0,
        secondHalfPtsAgainst: 55.0,
        pointsPerGame: 115.0,
        pointsAgainstPerGame: 109.0,
        defReboundsPerGame: 34.0,
        offReboundsPerGame: 9.0,
        stealsPerGame: 7.0,
        blocksPerGame: 4.0,
        assistsPerGame: 26.0,
        turnoversPerGame: 12.0,
        threePtPercentage: 37.0,
        twoPtPercentage: 52.0,
        freeThrowPercentage: 80.0,
        fieldGoalPercentage: 46.0
      },
      {
        id: 4,
        team: 'Miami Heat',
        firstHalfPtsFor: 54.0,
        firstHalfPtsAgainst: 51.0,
        secondHalfPtsFor: 57.0,
        secondHalfPtsAgainst: 54.0,
        pointsPerGame: 111.0,
        pointsAgainstPerGame: 107.0,
        defReboundsPerGame: 33.0,
        offReboundsPerGame: 8.0,
        stealsPerGame: 6.0,
        blocksPerGame: 3.0,
        assistsPerGame: 24.0,
        turnoversPerGame: 15.0,
        threePtPercentage: 35.0,
        twoPtPercentage: 51.0,
        freeThrowPercentage: 79.0,
        fieldGoalPercentage: 45.0
      },
      {
        id: 5,
        team: 'Milwaukee Bucks',
        firstHalfPtsFor: 58.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 61.0,
        secondHalfPtsAgainst: 56.0,
        pointsPerGame: 119.0,
        pointsAgainstPerGame: 111.0,
        defReboundsPerGame: 36.0,
        offReboundsPerGame: 10.0,
        stealsPerGame: 9.0,
        blocksPerGame: 6.0,
        assistsPerGame: 27.0,
        turnoversPerGame: 13.0,
        threePtPercentage: 39.0,
        twoPtPercentage: 55.0,
        freeThrowPercentage: 81.0,
        fieldGoalPercentage: 49.0
      },
      // Diğer takımların verileri buraya eklenebilir
    ],
    '2020-2021': [
      {
        id: 1,
        team: 'Los Angeles Lakers',
        firstHalfPtsFor: 55.5,
        firstHalfPtsAgainst: 52.3,
        secondHalfPtsFor: 58.2,
        secondHalfPtsAgainst: 56.1,
        pointsPerGame: 113.7,
        pointsAgainstPerGame: 108.4,
        defReboundsPerGame: 34.2,
        offReboundsPerGame: 10.5,
        stealsPerGame: 8.1,
        blocksPerGame: 5.3,
        assistsPerGame: 25.6,
        turnoversPerGame: 14.2,
        threePtPercentage: 36.7,
        twoPtPercentage: 53.4,
        freeThrowPercentage: 78.9,
        fieldGoalPercentage: 47.8
      },
      {
        id: 2,
        team: 'Golden State Warriors',
        firstHalfPtsFor: 57.8,
        firstHalfPtsAgainst: 54.1,
        secondHalfPtsFor: 60.3,
        secondHalfPtsAgainst: 57.2,
        pointsPerGame: 118.1,
        pointsAgainstPerGame: 110.3,
        defReboundsPerGame: 35.1,
        offReboundsPerGame: 11.2,
        stealsPerGame: 8.5,
        blocksPerGame: 5.6,
        assistsPerGame: 28.3,
        turnoversPerGame: 13.9,
        threePtPercentage: 38.2,
        twoPtPercentage: 54.1,
        freeThrowPercentage: 79.5,
        fieldGoalPercentage: 48.5
      },
      {
        id: 3,
        team: 'Boston Celtics',
        firstHalfPtsFor: 56.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 59.0,
        secondHalfPtsAgainst: 55.0,
        pointsPerGame: 115.0,
        pointsAgainstPerGame: 109.0,
        defReboundsPerGame: 34.0,
        offReboundsPerGame: 9.0,
        stealsPerGame: 7.0,
        blocksPerGame: 4.0,
        assistsPerGame: 26.0,
        turnoversPerGame: 12.0,
        threePtPercentage: 37.0,
        twoPtPercentage: 52.0,
        freeThrowPercentage: 80.0,
        fieldGoalPercentage: 46.0
      },
      {
        id: 4,
        team: 'Miami Heat',
        firstHalfPtsFor: 54.0,
        firstHalfPtsAgainst: 51.0,
        secondHalfPtsFor: 57.0,
        secondHalfPtsAgainst: 54.0,
        pointsPerGame: 111.0,
        pointsAgainstPerGame: 107.0,
        defReboundsPerGame: 33.0,
        offReboundsPerGame: 8.0,
        stealsPerGame: 6.0,
        blocksPerGame: 3.0,
        assistsPerGame: 24.0,
        turnoversPerGame: 15.0,
        threePtPercentage: 35.0,
        twoPtPercentage: 51.0,
        freeThrowPercentage: 79.0,
        fieldGoalPercentage: 45.0
      },
      {
        id: 5,
        team: 'Milwaukee Bucks',
        firstHalfPtsFor: 58.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 61.0,
        secondHalfPtsAgainst: 56.0,
        pointsPerGame: 119.0,
        pointsAgainstPerGame: 111.0,
        defReboundsPerGame: 36.0,
        offReboundsPerGame: 10.0,
        stealsPerGame: 9.0,
        blocksPerGame: 6.0,
        assistsPerGame: 27.0,
        turnoversPerGame: 13.0,
        threePtPercentage: 39.0,
        twoPtPercentage: 55.0,
        freeThrowPercentage: 81.0,
        fieldGoalPercentage: 49.0
      },
      // Diğer takımların verileri buraya eklenebilir
    ],
    '2019-2020': [
      {
        id: 1,
        team: 'Los Angeles Lakers',
        firstHalfPtsFor: 55.5,
        firstHalfPtsAgainst: 52.3,
        secondHalfPtsFor: 58.2,
        secondHalfPtsAgainst: 56.1,
        pointsPerGame: 113.7,
        pointsAgainstPerGame: 108.4,
        defReboundsPerGame: 34.2,
        offReboundsPerGame: 10.5,
        stealsPerGame: 8.1,
        blocksPerGame: 5.3,
        assistsPerGame: 25.6,
        turnoversPerGame: 14.2,
        threePtPercentage: 36.7,
        twoPtPercentage: 53.4,
        freeThrowPercentage: 78.9,
        fieldGoalPercentage: 47.8
      },
      {
        id: 2,
        team: 'Golden State Warriors',
        firstHalfPtsFor: 57.8,
        firstHalfPtsAgainst: 54.1,
        secondHalfPtsFor: 60.3,
        secondHalfPtsAgainst: 57.2,
        pointsPerGame: 118.1,
        pointsAgainstPerGame: 110.3,
        defReboundsPerGame: 35.1,
        offReboundsPerGame: 11.2,
        stealsPerGame: 8.5,
        blocksPerGame: 5.6,
        assistsPerGame: 28.3,
        turnoversPerGame: 13.9,
        threePtPercentage: 38.2,
        twoPtPercentage: 54.1,
        freeThrowPercentage: 79.5,
        fieldGoalPercentage: 48.5
      },
      {
        id: 3,
        team: 'Boston Celtics',
        firstHalfPtsFor: 56.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 59.0,
        secondHalfPtsAgainst: 55.0,
        pointsPerGame: 115.0,
        pointsAgainstPerGame: 109.0,
        defReboundsPerGame: 34.0,
        offReboundsPerGame: 9.0,
        stealsPerGame: 7.0,
        blocksPerGame: 4.0,
        assistsPerGame: 26.0,
        turnoversPerGame: 12.0,
        threePtPercentage: 37.0,
        twoPtPercentage: 52.0,
        freeThrowPercentage: 80.0,
        fieldGoalPercentage: 46.0
      },
      {
        id: 4,
        team: 'Miami Heat',
        firstHalfPtsFor: 54.0,
        firstHalfPtsAgainst: 51.0,
        secondHalfPtsFor: 57.0,
        secondHalfPtsAgainst: 54.0,
        pointsPerGame: 111.0,
        pointsAgainstPerGame: 107.0,
        defReboundsPerGame: 33.0,
        offReboundsPerGame: 8.0,
        stealsPerGame: 6.0,
        blocksPerGame: 3.0,
        assistsPerGame: 24.0,
        turnoversPerGame: 15.0,
        threePtPercentage: 35.0,
        twoPtPercentage: 51.0,
        freeThrowPercentage: 79.0,
        fieldGoalPercentage: 45.0
      },
      {
        id: 5,
        team: 'Milwaukee Bucks',
        firstHalfPtsFor: 58.0,
        firstHalfPtsAgainst: 53.0,
        secondHalfPtsFor: 61.0,
        secondHalfPtsAgainst: 56.0,
        pointsPerGame: 119.0,
        pointsAgainstPerGame: 111.0,
        defReboundsPerGame: 36.0,
        offReboundsPerGame: 10.0,
        stealsPerGame: 9.0,
        blocksPerGame: 6.0,
        assistsPerGame: 27.0,
        turnoversPerGame: 13.0,
        threePtPercentage: 39.0,
        twoPtPercentage: 55.0,
        freeThrowPercentage: 81.0,
        fieldGoalPercentage: 49.0
      },
      // Diğer takımların verileri buraya eklenebilir
    ]
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setStats(seasonData[season])
        setLoading(false)
      } catch (error) {
        console.error('Veri yükleme hatası:', error)
        setLoading(false)
      }
    }

    loadData()
  }, [season])

  return (
    <Container className="py-4">
      <Typography 
        variant="h4" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          color: 'primary.main',
          mb: 4
        }}
      >
        NBA Takım İstatistikleri
      </Typography>

      <Box sx={{ mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Sezon</InputLabel>
          <Select
            value={season}
            label="Sezon"
            onChange={(e) => setSeason(e.target.value)}
          >
            <MenuItem value="2023-2024">2023-2024</MenuItem>
            <MenuItem value="2022-2023">2022-2023</MenuItem>
            <MenuItem value="2021-2022">2021-2022</MenuItem>
            <MenuItem value="2020-2021">2020-2021</MenuItem>
            <MenuItem value="2019-2020">2019-2020</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="team stats table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Takım</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="İlk Yarı Atılan Sayı Ortalaması">
                  <Box>1H PTS</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="İlk Yarı Yenilen Sayı Ortalaması">
                  <Box>1H OPP PTS</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="İkinci Yarı Atılan Sayı Ortalaması">
                  <Box>2H PTS</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="İkinci Yarı Yenilen Sayı Ortalaması">
                  <Box>2H OPP PTS</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Maç Başına Atılan Sayı">
                  <Box>PTS</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Maç Başına Yenilen Sayı">
                  <Box>OPP PTS</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Maç Başı Savunma Ribaund">
                  <Box>DREB</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Maç Başı Hücum Ribaund">
                  <Box>OREB</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Maç Başı Top Çalma">
                  <Box>STL</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Maç Başı Blok">
                  <Box>BLK</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Maç Başı Asist">
                  <Box>AST</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Top Kaybı Ortalaması">
                  <Box>TOV</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="3 Sayı Yüzdesi">
                  <Box>3P%</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="2 Sayı Yüzdesi">
                  <Box>2P%</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Serbest Atış Yüzdesi">
                  <Box>FT%</Box>
                </Tooltip>
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                <Tooltip title="Genel Saha Atış Yüzdesi">
                  <Box>FG%</Box>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}
              >
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                  {row.team}
                </TableCell>
                <TableCell align="center">{row.firstHalfPtsFor}</TableCell>
                <TableCell align="center">{row.firstHalfPtsAgainst}</TableCell>
                <TableCell align="center">{row.secondHalfPtsFor}</TableCell>
                <TableCell align="center">{row.secondHalfPtsAgainst}</TableCell>
                <TableCell align="center">{row.pointsPerGame}</TableCell>
                <TableCell align="center">{row.pointsAgainstPerGame}</TableCell>
                <TableCell align="center">{row.defReboundsPerGame}</TableCell>
                <TableCell align="center">{row.offReboundsPerGame}</TableCell>
                <TableCell align="center">{row.stealsPerGame}</TableCell>
                <TableCell align="center">{row.blocksPerGame}</TableCell>
                <TableCell align="center">{row.assistsPerGame}</TableCell>
                <TableCell align="center">{row.turnoversPerGame}</TableCell>
                <TableCell align="center">{row.threePtPercentage}%</TableCell>
                <TableCell align="center">{row.twoPtPercentage}%</TableCell>
                <TableCell align="center">{row.freeThrowPercentage}%</TableCell>
                <TableCell align="center">{row.fieldGoalPercentage}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3, mt: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Tablo Açıklamaları
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">• 1H PTS: İlk Yarı Atılan Sayı</Typography>
          <Typography variant="body2" color="text.secondary">• 1H OPP PTS: İlk Yarı Yenilen Sayı</Typography>
          <Typography variant="body2" color="text.secondary">• 2H PTS: İkinci Yarı Atılan Sayı</Typography>
          <Typography variant="body2" color="text.secondary">• 2H OPP PTS: İkinci Yarı Yenilen Sayı</Typography>
          <Typography variant="body2" color="text.secondary">• PTS: Atılan Sayı</Typography>
          <Typography variant="body2" color="text.secondary">• OPP PTS: Yenilen Sayı</Typography>
          <Typography variant="body2" color="text.secondary">• DREB: Savunma Ribaund</Typography>
          <Typography variant="body2" color="text.secondary">• OREB: Hücum Ribaund</Typography>
          <Typography variant="body2" color="text.secondary">• STL: Top Çalma</Typography>
          <Typography variant="body2" color="text.secondary">• BLK: Blok</Typography>
          <Typography variant="body2" color="text.secondary">• AST: Asist</Typography>
          <Typography variant="body2" color="text.secondary">• TOV: Top Kaybı</Typography>
          <Typography variant="body2" color="text.secondary">• 3P%: Üç Sayı Yüzdesi</Typography>
          <Typography variant="body2" color="text.secondary">• 2P%: İki Sayı Yüzdesi</Typography>
          <Typography variant="body2" color="text.secondary">• FT%: Serbest Atış Yüzdesi</Typography>
          <Typography variant="body2" color="text.secondary">• FG%: Saha Atış Yüzdesi</Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default TeamStats