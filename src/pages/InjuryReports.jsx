import React from 'react';
import { Container, Table, Accordion } from 'react-bootstrap';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '2rem 1rem',
  '@media (min-width: 768px)': {
    padding: '3rem 2rem',
  }
}));

const StyledAccordion = styled(Accordion)({
  marginBottom: '1rem',
  borderRadius: '8px !important',
  overflow: 'hidden',
  border: 'none',
  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',

  '.accordion-button': {
    backgroundColor: '#f8f9fa',
    color: '#1a237e',
    fontWeight: 600,

    '&:not(.collapsed)': {
      backgroundColor: '#1a237e',
      color: '#fff',
    },

    '&:focus': {
      boxShadow: 'none',
    }
  }
});

const StyledTable = styled(Table)(({ theme }) => ({
  backgroundColor: '#fff',
  marginBottom: 0,

  'th, td': {
    padding: '1rem',
    verticalAlign: 'middle',
    fontSize: '0.9rem', // Default font size for table cells
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
  },

  '@media (max-width: 576px)': {
    'th, td': {
      fontSize: '0.7rem', // Smaller font size for mobile
    },
  },
}));

const InjuryReports = () => {
  const takımSakatlıkları = [
    {
      takımAdı: "Boston Celtics",
      oyuncular: [
        {
          id: 1,
          ad: "Kristaps Porzingis",
          pozisyon: "Merkez/Güçlü Forvet",
          sakatlık: "Hamstring Zorlanması",
          açıklama: "Sağ hamstring gerginliği",
          tahminiDönüş: "Günlük"
        }
      ]
    },
    {
      takımAdı: "Milwaukee Bucks",
      oyuncular: [
        {
          id: 2,
          ad: "Giannis Antetokounmpo",
          pozisyon: "Güçlü Forvet",
          sakatlık: "Hamstring Ağrısı",
          açıklama: "Sol hamstring tendinopatisi",
          tahminiDönüş: "Günlük"
        }
      ]
    },
    {
      takımAdı: "Philadelphia 76ers",
      oyuncular: [
        {
          id: 3,
          ad: "Joel Embiid",
          pozisyon: "Merkez",
          sakatlık: "Diz Ameliyatı",
          açıklama: "Sol diz menisküs prosedürü",
          tahminiDönüş: "Nisan Sonu"
        },
        {
          id: 4,
          ad: "Robert Covington",
          pozisyon: "Forvet",
          sakatlık: "Diz Sakatlığı",
          açıklama: "Sol diz kemik morarması",
          tahminiDönüş: "Belirsiz Süreli"
        }
      ]
    },
    {
      takımAdı: "Cleveland Cavaliers",
      oyuncular: [
        {
          id: 5,
          ad: "Donovan Mitchell",
          pozisyon: "Guard",
          sakatlık: "Diz Ağrısı",
          açıklama: "Sol diz ağrısı",
          tahminiDönüş: "Günlük"
        },
        {
          id: 6,
          ad: "Max Strus",
          pozisyon: "Guard/Forvet",
          sakatlık: "Diz Sakatlığı",
          açıklama: "Sağ diz zorlanması",
          tahminiDönüş: "1-2 Hafta"
        }
      ]
    },
    {
      takımAdı: "Los Angeles Lakers",
      oyuncular: [
        {
          id: 7,
          ad: "Gabe Vincent",
          pozisyon: "Guard",
          sakatlık: "Diz Ameliyatı",
          açıklama: "Sol diz artroskopik ameliyatı",
          tahminiDönüş: "Nisan Sonu"
        },
        {
          id: 8,
          ad: "Jarred Vanderbilt",
          pozisyon: "Forvet",
          sakatlık: "Ayak Sakatlığı",
          açıklama: "Sağ orta ayak burkulması",
          tahminiDönüş: "Belirsiz Süreli"
        }
      ]
    },
    {
      takımAdı: "Golden State Warriors",
      oyuncular: [
        {
          id: 9,
          ad: "Stephen Curry",
          pozisyon: "Guard",
          sakatlık: "Ayak Bileği Burkulması",
          açıklama: "Sağ ayak bileği burkulması",
          tahminiDönüş: "Günlük"
        }
      ]
    },
    {
      takımAdı: "Denver Nuggets",
      oyuncular: [
        {
          id: 10,
          ad: "Vlatko Cancar",
          pozisyon: "Forvet",
          sakatlık: "Diz Ameliyatı",
          açıklama: "Sol diz ameliyatı",
          tahminiDönüş: "Sezon Sonu"
        }
      ]
    },
    {
      takımAdı: "Phoenix Suns",
      oyuncular: [
        {
          id: 11,
          ad: "Damion Lee",
          pozisyon: "Guard",
          sakatlık: "Diz Ameliyatı",
          açıklama: "Sağ menisküs ameliyatı",
          tahminiDönüş: "Sezon Sonu"
        }
      ]
    },
    {
      takımAdı: "New York Knicks",
      oyuncular: [
        {
          id: 12,
          ad: "Julius Randle",
          pozisyon: "Forvet",
          sakatlık: "Omuz Sakatlığı",
          açıklama: "Sağ omuz çıkığı",
          tahminiDönüş: "Belirsiz Süreli"
        },
        {
          id: 13,
          ad: "Mitchell Robinson",
          pozisyon: "Merkez",
          sakatlık: "Ayak Bileği Ameliyatı",
          açıklama: "Sol ayak bileği ameliyatı",
          tahminiDönüş: "Nisan Sonu"
        }
      ]
    },
    {
      takımAdı: "Miami Heat",
      oyuncular: [
        {
          id: 14,
          ad: "Josh Richardson",
          pozisyon: "Guard",
          sakatlık: "Omuz Ameliyatı",
          açıklama: "Sağ omuz ameliyatı",
          tahminiDönüş: "Sezon Sonu"
        }
      ]
    },
    {
      takımAdı: "LA Clippers",
      oyuncular: [
        {
          id: 15,
          ad: "Russell Westbrook",
          pozisyon: "Guard",
          sakatlık: "El Kırığı",
          açıklama: "Sol el kırığı",
          tahminiDönüş: "Nisan Sonu"
        }
      ]
    },
    {
      takımAdı: "Memphis Grizzlies",
      oyuncular: [
        {
          id: 16,
          ad: "Ja Morant",
          pozisyon: "Guard",
          sakatlık: "Omuz Ameliyatı",
          açıklama: "Sağ omuz ameliyatı",
          tahminiDönüş: "Sezon Sonu"
        },
        {
          id: 17,
          ad: "Marcus Smart",
          pozisyon: "Guard",
          sakatlık: "Parmak Sakatlığı",
          açıklama: "Sağ yüzük parmağı merkezi yırtığı",
          tahminiDönüş: "Nisan Sonu"
        }
      ]
    },
    {
      takımAdı: "Brooklyn Nets",
      oyuncular: [
        {
          id: 18,
          ad: "Ben Simmons",
          pozisyon: "Guard/Forvet",
          sakatlık: "Sırt Sakatlığı",
          açıklama: "Alt sırt sinir sıkışması",
          tahminiDönüş: "Belirsiz Süreli"
        }
      ]
    },
    {
      takımAdı: "Portland Trail Blazers",
      oyuncular: [
        {
          id: 19,
          ad: "Malcolm Brogdon",
          pozisyon: "Guard",
          sakatlık: "Dirsek Sakatlığı",
          açıklama: "Sağ dirsek tendiniti",
          tahminiDönüş: "Günlük"
        },
        {
          id: 20,
          ad: "Shaedon Sharpe",
          pozisyon: "Guard",
          sakatlık: "Karın Ameliyatı",
          açıklama: "Karın kası ameliyatı",
          tahminiDönüş: "Sezon Sonu"
        }
      ]
    },
    {
      takımAdı: "Charlotte Hornets",
      oyuncular: [
        {
          id: 21,
          ad: "LaMelo Ball",
          pozisyon: "Guard",
          sakatlık: "Ayak Bileği Ameliyatı",
          açıklama: "Sağ ayak bileği ameliyatı",
          tahminiDönüş: "Sezon Sonu"
        },
        {
          id: 22,
          ad: "Mark Williams",
          pozisyon: "Merkez",
          sakatlık: "Sırt Sakatlığı",
          açıklama: "Alt sırt sakatlığı",
          tahminiDönüş: "Belirsiz Süreli"
        }
      ]
    }
  ];

  return (
    <StyledContainer>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          color: '#1a237e',
          fontWeight: 'bold',
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
        }}
      >
        NBA Sakatlık Raporu
      </Typography>

      {takımSakatlıkları.map((takım, index) => (
        <StyledAccordion key={index}>
          <Accordion.Header>
            {takım.takımAdı} ({takım.oyuncular.length} Sakat Oyuncu)
          </Accordion.Header>
          <Accordion.Body>
            <StyledTable hover responsive>
              <thead>
                <tr>
                  <th>Oyuncu</th>
                  <th>Pozisyon</th>
                  <th>Sakatlık</th>
                  <th>Açıklama</th>
                  <th>Tahmini Dönüş</th>
                </tr>
              </thead>
              <tbody>
                {takım.oyuncular.map(oyuncu => (
                  <tr key={oyuncu.id}>
                    <td>{oyuncu.ad}</td>
                    <td>{oyuncu.pozisyon}</td>
                    <td>{oyuncu.sakatlık}</td>
                    <td>{oyuncu.açıklama}</td>
                    <td>{oyuncu.tahminiDönüş}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </Accordion.Body>
        </StyledAccordion>
      ))}

      <Box sx={{
        mt: 4,
        p: 2,
        backgroundColor: '#f8f9fa',
        borderRadius: 2
      }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem' }
          }}
        >
          Sakatlık Raporu Bilgisi:
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem' }
          }}
        >
          <ul>
            <li><strong>Günlük:</strong> Oyuncu günlük olarak değerlendiriliyor ve yakında dönebilir</li>
            <li><strong>Belirsiz Süreli:</strong> Dönüş için belirli bir zaman çizelgesi yok</li>
            <li><strong>Sezon Sonu:</strong> Oyuncu sezonun geri kalanında dönmeyecek</li>
            <li><strong>Nisan Sonu:</strong> Playoff zamanı civarında dönmesi bekleniyor</li>
            <li><strong>Not:</strong> Tüm dönüş tarihleri tahminidir ve iyileşme sürecine bağlı olarak değişebilir</li>
          </ul>
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default InjuryReports;