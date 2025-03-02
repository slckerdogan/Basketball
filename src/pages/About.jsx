import { Container } from 'react-bootstrap'
import { 
  Typography, 
  Box, 
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar
} from '@mui/material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GroupsIcon from '@mui/icons-material/Groups'
import TimelineIcon from '@mui/icons-material/Timeline'
import BarChartIcon from '@mui/icons-material/BarChart'
import NewspaperIcon from '@mui/icons-material/Newspaper'

const About = () => {
  const features = [
    {
      icon: <SportsBasketballIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Maç Analizleri',
      description: 'Detaylı maç analizleri ve istatistiklerle basketbolu daha iyi anlayın',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Başarı Hikayeleri',
      description: 'Amerika basketbolunun (NBA) unutulmaz anları ve başarıları',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Takım Ruhu',
      description: 'Takımların detaylı kadro analizleri ve transfer haberleri',
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'İstatistikler',
      description: 'Kapsamlı istatistikler ve performans analizleri',
    },
    {
      icon: <BarChartIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Puan Durumu',
      description: 'Güncel puan durumu ve detaylı lig tablosu',
    },
    {
      icon: <NewspaperIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Haberler',
      description: 'Basketbol dünyasından en güncel haberler',
    },
  ]

  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Kurucu & CEO',
      description: '10+ yıl spor medyası deneyimi',
    },
    {
      name: 'Ayşe Kaya',
      role: 'İçerik Editörü',
      description: 'Basketbol yazarı ve analist',
    },
    {
      name: 'Mehmet Demir',
      role: 'Veri Analisti',
      description: 'İstatistik ve veri analizi uzmanı',
    },
  ]

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
        Hakkımızda
      </Typography>

      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Basketbol Tutkusu
        </Typography>
        <Typography paragraph>
          2024 yılında kurulan Basketball App, Amerika basketbolunu (NBA) yakından takip eden 
          taraftarlar için kapsamlı bir bilgi kaynağı olmayı hedeflemektedir. Amacımız, 
          basketbol severlere güncel, doğru ve detaylı bilgileri en hızlı şekilde ulaştırmaktır.
        </Typography>
      </Paper>

      <Typography 
        variant="h5" 
        align="center" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          mb: 4
        }}
      >
        Özelliklerimiz
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  align="center" 
                  gutterBottom
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  align="center" 
                  color="text.secondary"
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom color="primary.main">
              Misyonumuz
            </Typography>
            <Typography paragraph>
              Basketbolun gelişimine katkıda bulunmak ve taraftarlara en kaliteli içeriği 
              sunmak için çalışıyoruz. Basketbol kültürünü yaygınlaştırmak ve spor sevgisini 
              artırmak temel hedeflerimiz arasındadır.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom color="primary.main">
              Vizyonumuz
            </Typography>
            <Typography paragraph>
              Türkiye'nin en güvenilir ve kapsamlı basketbol platformu olmak için çalışıyoruz. 
              Teknoloji ve sporu bir araya getirerek, basketbol severlere benzersiz bir deneyim 
              sunmayı amaçlıyoruz.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography 
        variant="h5" 
        align="center" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          mb: 4
        }}
      >
        Ekibimiz
      </Typography>

      <Grid container spacing={4}>
        {team.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    margin: '0 auto',
                    mb: 2,
                    bgcolor: 'primary.main'
                  }}
                >
                  {member.name[0]}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default About