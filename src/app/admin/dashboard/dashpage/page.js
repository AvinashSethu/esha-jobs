import React from "react";
import { Box,} from "@mui/material";
import NavbarDash from "../navbar/navbar";
import Navbarbottom from "../navbarbotttom/navbarbotttom";

export default function DashboardPage(){
    return(
        <Box sx={{backgroundColor:'#E6F3FF',height:'100vh'}}>
            <Box>
                <NavbarDash />


                
               
                <Navbarbottom />
            </Box>
        </Box>
    );
}