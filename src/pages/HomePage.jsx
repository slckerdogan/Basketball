import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  Box,
  Chip,
  Skeleton 
} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  const [sliderNews, setSliderNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Simüle edilmiş API çağrısı
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              slider: [
                {
                  id: 1,
                  title: "LeBron James'ten Tarihi Rekor: 40,000 Sayı Barajını Aştı!",
                  image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200",
                  description: "Lakers süperstarı LeBron James, NBA tarihinde 40,000 sayı barajını aşan ilk oyuncu oldu.",
                  date: "2024-03-03"
                },
                {
                  id: 2,
                  title: "Warriors Dynasty'sinin Sonu mu? Playoff Yarışında Kritik Kayıp",
                  image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200",
                  description: "Golden State Warriors, üst üste gelen mağlubiyetlerle playoff yarışında geriye düştü.",
                  date: "2024-03-02"
                },
                {
                  id: 3,
                  title: "Wembanyama'dan İnanılmaz Triple-Double!",
                  image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200",
                  description: "Spurs'ün çaylak yıldızı, 27 sayı, 14 ribaund ve 10 blokla NBA tarihine geçti.",
                  date: "2024-03-01"
                }
              ],
              grid: [
                {
                  id: 4,
                  title: "Celtics'ten Büyük Hamle: All-Star Guard Takımda!",
                  image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800",
                  description: "Boston Celtics, şampiyonluk yarışında kadrosunu önemli bir takviye ile güçlendirdi.",
                  category: "Transfer",
                  readTime: "5 dk",
                  date: "2024-02-29"
                },
                {
                  id: 5,
                  title: "Nuggets-Timberwolves Maçında Büyük Gerginlik",
                  image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800",
                  description: "Batı Konferansı'nın zirvesindeki mücadelede Jokic ve Gobert arasında gerginlik yaşandı.",
                  category: "Maç Raporu",
                  readTime: "4 dk",
                  date: "2024-02-28"
                },
                {
                  id: 6,
                  title: "Luka Doncic'ten 73 Sayılık Gösteri!",
                  image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800",
                  description: "Mavericks süperstarı, Hawks karşısında kariyer rekoru kırarak takımını galibiyete taşıdı.",
                  category: "Performans",
                  readTime: "6 dk",
                  date: "2024-02-27"
                },
                {
                  id: 7,
                  title: "Giannis ve Lillard'dan Kombine 82 Sayı",
                  image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800",
                  description: "Bucks'ın süper ikilisi, Sixers karşısında müthiş bir performans sergiledi.",
                  category: "Maç Analizi",
                  readTime: "4 dk",
                  date: "2024-02-26"
                },
                {
                  id: 8,
                  title: "Shai Gilgeous-Alexander MVP Yarışında Öne Geçti",
                  image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800",
                  description: "Thunder'ın yıldızı, göz kamaştırıcı performansıyla MVP favorisi haline geldi.",
                  category: "MVP Yarışı",
                  readTime: "5 dk",
                  date: "2024-02-25"
                },
                {
                  id: 9,
                  title: "Lakers'ta Davis'ten 40-20 Performansı",
                  image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800",
                  description: "Anthony Davis, Pistons karşısında 42 sayı ve 24 ribaundla oynadı.",
                  category: "Performans",
                  readTime: "3 dk",
                  date: "2024-02-24"
                }
              ]
            })
          }, 1500)
        })

        setSliderNews(response.slider)
        setNews(response.grid)
        setLoading(false)
      } catch (error) {
        console.error('Haber yükleme hatası:', error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const renderNewsCard = (news) => (
    <Col key={news.id} xs={12} sm={6} md={4} className="mb-4">
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={news.image}
          alt={news.title}
          sx={{ 
            objectFit: 'cover',
            height: { xs: '150px', sm: '200px' }
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mb: 2 }}>
            <Chip 
              label={news.category}
              size="small"
              color="primary"
              sx={{ mb: 1 }}
            />
          </Box>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="h2"
            sx={{ 
              fontWeight: 600,
              minHeight: { xs: 'auto', sm: '60px' },
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            {news.title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              mb: 2,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            {news.description}
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="caption" color="text.secondary">
                {news.readTime}
              </Typography>
            </Box>
            <Button 
              component={Link}
              to={`/haber/${news.id}`}
              size="small"
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
              Devamını Oku
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Col>
  )

  return (
    <Container className="py-4">
      {/* Slider Bölümü */}
      <Box sx={{ mb: 6 }}>
        <Carousel fade interval={5000}>
          {sliderNews.map((item) => (
            <Carousel.Item key={item.id}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '350px', sm: '400px', md: '500px' },
                  backgroundColor: 'grey.300',
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <Box
                  className="pb-5 mb-4"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: { xs: '1rem', sm: '2rem', md: '3rem' },
                    color: 'white',
                    textAlign: 'center'
                  }}
                >
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom
                    className="mb-3"
                    sx={{ 
                      fontWeight: 600,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="subtitle1"
                    className="mb-4"
                    sx={{ 
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      mx: { xs: 1, sm: 2, md: 8 },
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box 
                    className="mb-5"
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'center' 
                    }}
                  >
                    <Button 
                      variant="contained" 
                      component={Link}
                      to={`/haber/${item.id}`}
                      sx={{ 
                        backgroundColor: 'white',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'grey.100'
                        },
                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                      }}
                    >
                      Devamını Oku
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>

      {/* Haberler Grid'i */}
      <Typography 
        variant="h4" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ 
          mb: 4,
          fontWeight: 600,
          color: 'primary.main',
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
        }}
      >
        NBA'den Son Haberler
      </Typography>

      <Row>
        {news.map(renderNewsCard)}
      </Row>
    </Container>
  )
}

export default HomePage