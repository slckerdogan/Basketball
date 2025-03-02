import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { 
  Typography, 
  Box, 
  Paper,
  TextField,
  Button,
  Snackbar,
  Alert,
  Grid
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import SendIcon from '@mui/icons-material/Send'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form verileri:', formData)
    setOpenSnackbar(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

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
        İletişim
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                mb: 3
              }}
            >
              İletişim Bilgileri
            </Typography>

            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon color="primary" />
              <Box>
                <Typography variant="subtitle2">E-posta</Typography>
                <Typography variant="body2" color="text.secondary">
                  info@basketballapp.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <PhoneIcon color="primary" />
              <Box>
                <Typography variant="subtitle2">Telefon</Typography>
                <Typography variant="body2" color="text.secondary">
                  +90 (212) 555 0000
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocationOnIcon color="primary" />
              <Box>
                <Typography variant="subtitle2">Adres</Typography>
                <Typography variant="body2" color="text.secondary">
                  Basketbol Caddesi No:1
                  <br />
                  34000 İstanbul, Türkiye
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                mb: 3
              }}
            >
              Mesaj Gönder
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Adınız"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="E-posta Adresiniz"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Konu"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mesajınız"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ 
                      float: 'right',
                      mt: 2
                    }}
                  >
                    Gönder
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          variant="filled"
        >
          Mesajınız başarıyla gönderildi!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Contact