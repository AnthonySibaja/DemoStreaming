import React from 'react';
import { Box, Typography, Modal, Card, CardMedia } from '@mui/material';

interface PopupProps {
  title: string;
  description: string;
  releaseYear: number;
  imageUrl: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, description, releaseYear, imageUrl, onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 3,
          borderRadius: 2, 
        }}
      >
        <Card
          sx={{
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', 
            borderRadius: 2, 
          }}
        >
          <CardMedia
            component="img"
            height="200" 
            image={imageUrl}
            alt={title}
            sx={{
              objectFit: 'cover', 
              width: '100%', 
            }}
          />
          <Box sx={{ p: 2 }}> 
            <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
              {description}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              Año: {releaseYear}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
};

export default Popup;