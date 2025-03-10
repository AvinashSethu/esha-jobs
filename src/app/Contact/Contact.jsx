"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../Contact/Contact.css";
import ContactForm from "./ContactForm";

export default function Contact({ prefilledJobTitle = "", jobTitles = [] }) {
  const handlePhoneCall = () => {
    window.location.href = 'tel: 9788903129'; // Initiates the call
  };
  return (
    <Box
      sx={{
        minHeight: "auto",
        backgroundColor: "#F2F2F2",
        marginTop: { xs: "0%", sm: "6%" },
        padding: { xs: "0px", sm: "0" },
        overflow: "visible",
        position:'relative'
      }}
      className="Cont-con"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 2, md: 0 },
          width: "100%",
          margin: 0,
          padding: 0,
          position:'relative',
          overflow:'visible',
          zIndex:0,
        }}
      >
        {/* Left Box (Contact Form) */}
        <ContactForm prefilledJobTitle={prefilledJobTitle} jobTitles={jobTitles}/>

        {/* Right Box (Contact Details) */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" }, margin: 0 }}>
          <Box
            sx={{
              backgroundColor: "#F2F2F2",
              padding: { xs: "20px", sm: "30px", md: "60px" },
              borderRadius: "1px",
              height: { xs: "auto", md: "auto" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "left",
              textAlign: "left",
              width: "100%",
              marginLeft:{xs:0 ,md:"50px"}
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#007BFF", textTransform: "uppercase", fontWeight: "bold",textAlign:'left' }}
            >
              Contact Us/
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem",marginTop:'20px' },
                fontWeight: "bold",
              }}
            >
              Contact us to request a quote today.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" },
                padding: { xs: "0 10px", sm: "0" },
                color: "#555",
                
                
              }}
            >
              Have questions? Need guidance? Contact us today for seamless job placement assistance!
            </Typography>
            <span style={{
                          display: "block",
                          width: "100%",
                          height: "0.1px",
                          backgroundColor: "#999999",
                          marginTop: "40px",
    }}
  ></span>

            <Box sx={{ marginTop: "50px", width: "100%", textAlign: "left" }}>
              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <EmailIcon sx={{ fontSize: 35, color: "#fff",backgroundColor:"var(--primary)",borderRadius:'50%',padding:'9px',height:'50px',width:'50px' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold",color:'#999999',fontSize:{xs:"18px",sm:"24px",} }}>
                    Send me an email
                  </Typography>
                  <Typography variant="body2" sx={{color:'#000',fontWeight:'bold',fontSize:{xs:'16px',sm:'20px'}}}>eshaarabconsultancy@gmail.com</Typography>
                </Box>
              </Box>

              {/* Phone */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2,marginTop:'40px' }}>
                <PhoneIcon sx={{ fontSize: 35, color: "#fff",backgroundColor:"var(--primary)",borderRadius:'50%',padding:'9px',height:'50px',width:'50px',cursor:'pointer' }} onClick={handlePhoneCall}/>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold",color:'#999999',cursor:'pointer',fontSize:{xs:"18px",sm:"24px",} }} onClick={handlePhoneCall}>
                    Give me a call
                  </Typography>
                  <Typography variant="body2" sx={{color:'#000',fontWeight:'bold',cursor:'pointer',fontSize:{xs:'16px',sm:'20px'}}} onClick={handlePhoneCall}>+91 9788903129</Typography>
                </Box>
              </Box>

              {/* Address */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2,marginTop:'40px' }}>
                <LocationOnIcon sx={{ fontSize: 35, color: "#fff",backgroundColor:"var(--primary)",borderRadius:'50%',padding:'9px',height:'50px',width:'50px' }} />
                <Box>
                  <Typography variant="body1" sx={{ color:'#999999',fontSize:{xs:"18px",sm:"24px",} }}>
                    Address
                  </Typography>
                  <Typography variant="body2" sx={{color:'#000',fontSize:{xs:'16px',sm:'20px'},fontWeight:'bold'}}>
                    Thengapattinam, Kanyakumari District,<br /> Tamil Nadu, India
                  </Typography>
                  <Typography variant="body2" sx={{color:'#000',fontSize:{xs:'16px',sm:'20px',fontFamily:"var(--font-onest)"},fontWeight:'bold'}}>Pin: 629173</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
