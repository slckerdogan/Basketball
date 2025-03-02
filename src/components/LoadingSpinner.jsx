import { Box, CircularProgress, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
  gap: theme.spacing(2),
}))

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const LoadingSpinner = ({ message = 'Yükleniyor...' }) => {
  return (
    <LoaderContainer>
      <StyledCircularProgress 
        size={60} 
        thickness={4}
      />
      <Typography 
        variant="h6" 
        color="text.secondary"
        sx={{ 
          fontWeight: 500,
          animation: 'pulse 1.5s infinite',
          '@keyframes pulse': {
            '0%': {
              opacity: 0.6,
            },
            '50%': {
              opacity: 1,
            },
            '100%': {
              opacity: 0.6,
            },
          },
        }}
      >
        {message}
      </Typography>
    </LoaderContainer>
  )
}

export default LoadingSpinner