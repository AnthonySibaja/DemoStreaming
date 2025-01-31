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
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Card>
          <CardMedia component="img" height="140" image={imageUrl} alt={title} />
          <Typography variant="h5" align="center">
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="body2">Año: {releaseYear}</Typography>
        </Card>
      </Box>
    </Modal>
  );
};

export default Popup;