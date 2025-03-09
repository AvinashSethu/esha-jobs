"use client";
import React from 'react';
import { Dialog, DialogContent, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditJobPopup from './EditJobPopup';
import Logo from "@/public/Icons/Esha-Logo.png"; 
import Image from 'next/image';

export default function PopupCard({ open, onClose, jobData }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen // Makes the dialog take full width and height
      PaperProps={{
        sx: {
          margin: '0 20px', // 20px margin on left and right
          borderRadius: '8px',
          overflowY: 'auto', // Allow scrolling if content exceeds height
          height: '100%', // Ensure it takes full height
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          bgcolor: 'var(--secondary)',
          borderBottom: '1px solid #e0e0e0',
          position: 'sticky',
          top: 0,
          zIndex: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Image 
            src={Logo} 
            alt="Esha Logo" 
            width={32} 
            height={32} 
            style={{ objectFit: 'contain' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Update Job Card
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: '#fff', '&:hover': { color: '#666' } }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ p: 3 }}>
        <EditJobPopup jobData={jobData} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}