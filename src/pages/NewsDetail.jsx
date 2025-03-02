import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { 
  Typography, 
  Box, 
  Paper,
  Button,
  Chip,
  Divider,
  Avatar,
  Skeleton
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        // Simüle edilmiş API çağrısı
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            const newsDatabase = {
              1: {
                id: 1,
                title: "LeBron James'ten Tarihi Rekor: 40,000 Sayı Barajını Aştı!",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200",
                description: "Lakers süperstarı LeBron James, NBA tarihinde 40,000 sayı barajını aşan ilk oyuncu oldu.",
                content: `
                  Los Angeles Lakers'ın efsanevi oyuncusu LeBron James, Denver Nuggets karşısında 
                  attığı 26 sayıyla NBA tarihinde 40,000 sayı barajını aşan ilk oyuncu olmayı başardı.

                  Karşılaşmanın ikinci çeyreğinde orta mesafeden attığı basketle bu tarihi başarıya 
                  ulaşan James, maç sonunda yaptığı açıklamada "Bu rekor benim için çok özel. 21 yıllık 
                  kariyerimde her gün sıkı çalışarak bu noktaya geldim. Genç oyunculara ilham olmak 
                  benim için en büyük mutluluk" dedi.

                  Lakers başantrenörü Darvin Ham, "LeBron sadece bir basketbolcu değil, o bir efsane. 
                  Onunla çalışmak büyük bir ayrıcalık. Her gün kendini geliştirmeye devam ediyor ve 
                  takım arkadaşlarına örnek oluyor" şeklinde konuştu.

                  James ayrıca bu sezon 25.6 sayı, 7.2 ribaund ve 8.1 asist ortalamasıyla oynuyor ve 
                  39 yaşında olmasına rağmen hala ligin en etkili oyuncularından biri olmaya devam ediyor.
                `,
                author: {
                  name: "John Smith",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                  role: "NBA Baş Yazarı"
                },
                date: "2024-03-03",
                readTime: "6 dk",
                category: "NBA Rekorları",
                tags: ["LeBron James", "Lakers", "NBA Rekorları", "40K Kulübü"]
              },
              2: {
                id: 2,
                title: "Warriors Dynasty'sinin Sonu mu? Playoff Yarışında Kritik Kayıp",
                image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200",
                description: "Golden State Warriors, üst üste gelen mağlubiyetlerle playoff yarışında geriye düştü.",
                content: `
                  Golden State Warriors, son maçında Los Angeles Clippers'a 134-126 mağlup olarak 
                  playoff yarışında kritik bir kayıp daha yaşadı. Curry'nin 41 sayılık performansı 
                  mağlubiyeti engelleyemedi.

                  Son 10 maçta sadece 3 galibiyet alabilen Warriors, Batı Konferansı'nda 11. sıraya 
                  kadar geriledi. Steve Kerr'ün öğrencileri, play-in turnuvası için bile mücadele 
                  etmek zorunda kalabilir.

                  Stephen Curry, maç sonrası yaptığı açıklamada "Zor bir dönemden geçiyoruz ama 
                  pes etmeyeceğiz. Her maç bizim için bir final niteliğinde. Takım olarak bu durumdan 
                  çıkacak güce sahibiz" ifadelerini kullandı.
                `,
                author: {
                  name: "Mike Johnson",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                  role: "NBA Analisti"
                },
                date: "2024-03-02",
                readTime: "5 dk",
                category: "Playoff Yarışı",
                tags: ["Warriors", "Stephen Curry", "Playoff", "NBA"]
              },
              3: {
                id: 3,
                title: "Wembanyama'dan İnanılmaz Triple-Double!",
                image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200",
                description: "Spurs'ün çaylak yıldızı, 27 sayı, 14 ribaund ve 10 blokla NBA tarihine geçti.",
                content: `
                  San Antonio Spurs'ün 1 numara draft seçimi Victor Wembanyama, Toronto Raptors 
                  karşısında 27 sayı, 14 ribaund ve 10 blok ile oynayarak NBA tarihinde bir çaylak 
                  olarak blok kategorisini de içeren ilk triple-double'a imza attı.

                  19 yaşındaki Fransız yıldız, aynı zamanda bu sezon 5. triple-double'ını yaparak 
                  2.13 ve üzeri oyuncular arasında bir sezonda en fazla triple-double yapan oyuncu 
                  rekorunu da kırdı.

                  Spurs başantrenörü Gregg Popovich, "Victor özel bir yetenek. Her maç gelişmeye 
                  devam ediyor ve bizi şaşırtıyor. Onun potansiyeli sınırsız" değerlendirmesinde 
                  bulundu.
                `,
                author: {
                  name: "Sarah Davis",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
                  role: "NBA Muhabiri"
                },
                date: "2024-03-01",
                readTime: "4 dk",
                category: "Performans",
                tags: ["Victor Wembanyama", "Spurs", "Triple-Double", "NBA Rekorları"]
              },
              4: {
                id: 4,
                title: "Celtics'ten Büyük Hamle: All-Star Guard Takımda!",
                image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200",
                description: "Boston Celtics, şampiyonluk yarışında kadrosunu önemli bir takviye ile güçlendirdi.",
                content: `
                  Boston Celtics, All-Star guard'ı kadrosuna katarak şampiyonluk yarışında önemli bir 
                  adım attı. Bu transfer, Celtics'in playoff hedeflerini daha da güçlendirdi.

                  Takımın başantrenörü, "Bu oyuncu ile birlikte daha da güçlü olacağız. Onun tecrübesi 
                  ve yetenekleri, takımımıza büyük katkı sağlayacak" dedi.

                  Taraftarlar, bu transferin ardından Celtics'in şampiyonluk yolunda daha iddialı 
                  olacağını düşünüyor.
                `,
                author: {
                  name: "Emily Clark",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                  role: "Spor Yazarı"
                },
                date: "2024-02-29",
                readTime: "5 dk",
                category: "Transfer",
                tags: ["Celtics", "Transfer", "NBA"]
              },
              5: {
                id: 5,
                title: "Nuggets-Timberwolves Maçında Büyük Gerginlik",
                image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200",
                description: "Batı Konferansı'nın zirvesindeki mücadelede Jokic ve Gobert arasında gerginlik yaşandı.",
                content: `
                  Denver Nuggets ve Minnesota Timberwolves arasında oynanan maçta, Nikola Jokic ve 
                  Rudy Gobert arasında gerginlik yaşandı. Maçın sonlarına doğru iki oyuncu arasında 
                  yaşanan tartışma, seyirciler arasında büyük bir heyecan yarattı.

                  Maç sonunda Nuggets, Timberwolves'u 112-108 mağlup etti. Jokic, maçta 30 sayı ve 
                  12 ribaund ile oynadı.
                `,
                author: {
                  name: "David Brown",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                  role: "Spor Analisti"
                },
                date: "2024-02-28",
                readTime: "4 dk",
                category: "Maç Raporu",
                tags: ["Nuggets", "Timberwolves", "Maç Raporu"]
              },
              6: {
                id: 6,
                title: "Luka Doncic'ten 73 Sayılık Gösteri!",
                image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200",
                description: "Mavericks süperstarı, Hawks karşısında kariyer rekoru kırarak takımını galibiyete taşıdı.",
                content: `
                  Luka Doncic, Atlanta Hawks karşısında 73 sayı atarak kariyer rekorunu kırdı. 
                  Maç sonunda takımının galibiyetine büyük katkı sağladı.

                  Doncic, "Bu tür maçlar her zaman özel. Takım arkadaşlarıma teşekkür ediyorum, 
                  birlikte harika bir performans sergiledik" dedi.
                `,
                author: {
                  name: "Chris Evans",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                  role: "Spor Yazarı"
                },
                date: "2024-02-27",
                readTime: "6 dk",
                category: "Performans",
                tags: ["Luka Doncic", "Mavericks", "Kariyer Rekoru"]
              },
              7: {
                id: 7,
                title: "Giannis ve Lillard'dan Kombine 82 Sayı",
                image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200",
                description: "Bucks'ın süper ikilisi, Sixers karşısında müthiş bir performans sergiledi.",
                content: `
                  Milwaukee Bucks'ın süperstarları Giannis Antetokounmpo ve Damian Lillard, 
                  Philadelphia 76ers karşısında toplamda 82 sayı atarak takımını galibiyete taşıdı.

                  Maç sonunda Lillard, "Giannis ile birlikte oynamak her zaman keyifli. 
                  Birbirimizi tamamlıyoruz" dedi.
                `,
                author: {
                  name: "Laura White",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                  role: "Spor Muhabiri"
                },
                date: "2024-02-26",
                readTime: "5 dk",
                category: "Maç Analizi",
                tags: ["Bucks", "Giannis", "Lillard"]
              },
              8: {
                id: 8,
                title: "Shai Gilgeous-Alexander MVP Yarışında Öne Geçti",
                image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200",
                description: "Thunder'ın yıldızı, göz kamaştırıcı performansıyla MVP favorisi haline geldi.",
                content: `
                  Oklahoma City Thunder'ın yıldızı Shai Gilgeous-Alexander, son maçlarda gösterdiği 
                  performansla MVP yarışında öne geçti. 

                  Gilgeous-Alexander, "Bu sezon takımım için elimden gelenin en iyisini yapmaya çalışıyorum. 
                  MVP olmak harika bir hedef ama önceliğim takımımın başarısı" dedi.
                `,
                author: {
                  name: "Mark Taylor",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                  role: "Spor Analisti"
                },
                date: "2024-02-25",
                readTime: "5 dk",
                category: "MVP Yarışı",
                tags: ["Shai Gilgeous-Alexander", "Thunder", "MVP"]
              },
              9: {
                id: 9,
                title: "Lakers'ta Davis'ten 40-20 Performansı",
                image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200",
                description: "Anthony Davis, Pistons karşısında 42 sayı ve 24 ribaundla oynadı.",
                content: `
                  Anthony Davis, Detroit Pistons karşısında 42 sayı ve 24 ribaundla oynayarak 
                  muazzam bir performans sergiledi. 

                  Davis, "Takımım için elimden gelenin en iyisini yapmaya çalışıyorum. 
                  Bu tür performanslar galibiyet için önemli" dedi.
                `,
                author: {
                  name: "James Wilson",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
                  role: "Spor Yazarı"
                },
                date: "2024-02-24",
                readTime: "3 dk",
                category: "Performans",
                tags: ["Anthony Davis", "Lakers", "Performans"]
              }
            }

            resolve(newsDatabase[id])
          }, 1000)
        })

        if (response) {
          setNews(response)
        }
        setLoading(false)
      } catch (error) {
        console.error('Haber detayı yükleme hatası:', error)
        setLoading(false)
      }
    }

    fetchNewsDetail()
  }, [id])

  if (loading) {
    return (
      <Container className="py-4">
        <Skeleton variant="rectangular" height={400} sx={{ mb: 4, borderRadius: 2 }} />
        <Skeleton variant="text" height={60} sx={{ mb: 2 }} />
        <Skeleton variant="text" height={30} sx={{ mb: 4 }} />
        <Skeleton variant="text" height={20} count={10} sx={{ mb: 1 }} />
      </Container>
    )
  }

  if (!news) {
    return (
      <Container className="py-4">
        <Typography variant="h5" align="center">
          Haber bulunamadı.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
          >
            Ana Sayfaya Dön
          </Button>
        </Box>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Geri Dön
      </Button>

      <Paper sx={{ overflow: 'hidden', borderRadius: 2 }}>
        <Box
          sx={{
            height: { xs: '300px', md: '500px' },
            position: 'relative'
          }}
        >
          <img
            src={news.image}
            alt={news.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Chip 
            label={news.category}
            color="primary"
            sx={{ mb: 2 }}
          />

          <Typography 
            variant="h3" 
            component="h1"
            gutterBottom
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            {news.title}
          </Typography>

          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              mb: 3,
              flexWrap: 'wrap'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarTodayIcon color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {news.date}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {news.readTime} okuma süresi
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Avatar
              src={news.author.image}
              alt={news.author.name}
              sx={{ width: 48, height: 48 }}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight={500}>
                {news.author.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {news.author.role}
              </Typography>
            </Box>
          </Box>

          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4,
              lineHeight: 1.8,
              whiteSpace: 'pre-line'
            }}
          >
            {news.content}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {news.tags.map((tag) => (
              <Chip 
                key={tag} 
                label={tag} 
                variant="outlined" 
                size="small"
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default NewsDetail