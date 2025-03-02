import { Component } from 'react'
import { Container, Typography, Button } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { styled } from '@mui/material/styles'

const ErrorContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}))

const ErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  fontSize: '4rem',
  color: theme.palette.error.main,
  marginBottom: theme.spacing(2),
}))

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Hata loglama servisi burada kullanılabilir
    console.error('Error:', error)
    console.error('Error Info:', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer maxWidth="sm">
          <ErrorIcon />
          <Typography variant="h4" component="h1" gutterBottom>
            Bir Şeyler Yanlış Gitti
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Üzgünüz, bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => window.location.reload()}
            sx={{ 
              mt: 2,
              px: 4,
              py: 1,
              borderRadius: 2,
            }}
          >
            Sayfayı Yenile
          </Button>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary