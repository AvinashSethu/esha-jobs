import React from "react";
import { Box,Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "../navbarbotttom/navbarbotttom.css";

export default function Navbarbottom() {
    return (
        <Box>
            <Box className="navbar-bottom">
                <Button className="nav-button home-button">
                    <HomeIcon 
                    sx={{ 
                        color: '#fff',
                        height: '30px',
                        width: '30px',

                    }}
                    /> Jobs
                </Button>
                <Button className="nav-button">
                    <PersonIcon 
                    sx={{ 
                        borderRadius: '50%',
                        color: '#fff',
                        border: '1px solid #fff',
                        height: '30px',
                        width: '30px'
                    }}
                    />
                </Button>
                <Button className="nav-button">
                    <AddIcon 
                    sx={{ 
                        borderRadius: '50%',
                        color: '#fff',
                        border: '1px solid #fff',
                        height: '30px',
                        width: '30px'
                    }}
                    />
                </Button>
                <Button className="nav-button">
                    <ExitToAppIcon 
                    sx={{ 
                        color: '#fff',
                        height: '30px',
                        width: '30px'
                    }}
                    />
                </Button>
            </Box>
        </Box>
    );
}