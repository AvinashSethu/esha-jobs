import React from "react";
import { Box, Typography } from "@mui/material";
import {
    Flight as FlightIcon,
    Build as BuildIcon,
    WorkspacePremium as WorkspacePremiumIcon,
    TravelExplore as TravelExploreIcon,
    Assignment as AssignmentIcon,
    MedicalServices as MedicalServicesIcon,
    ArrowForward,
} from "@mui/icons-material";
import "../ServicesPage/ServiceMain.css";
import Link from "next/link";

const services = [
    { icon: <WorkspacePremiumIcon />, title: "Apostille & Certificate Verification", description: "Get your credentials authenticated easily." },
    { icon: <BuildIcon />, title: "Emigration & Attestation Services", description: "Secure and legal documentation processing." },
    { icon: <FlightIcon />, title: "Ticketing & Visa Stamping", description: "Quick & hassle-free travel arrangements." },
    { icon: <TravelExploreIcon />, title: "License Assistance", description: "Fast-track your licensing process for a seamless job start." },
    { icon: <AssignmentIcon />, title: "Dataflow & Exam Booking", description: "Ensure your eligibility for top global opportunities." },
    { icon: <MedicalServicesIcon />, title: "Travel Insurance & Medical Appointments", description: "Stay protected and medically cleared." },
];

export default function ServiceMain() {
    return (
        <Box className="services-container">
            {services.map((service, index) => (
                <Link key={service.title} href="#jobs" passHref> {/* Move key to Link */}
                    <Box className={`service-card stagger-${index}`}>
                        <Box className="service-icon">{service.icon}</Box>
                        <Typography variant="h6" className="service-title">{service.title}</Typography>
                        <Typography variant="body2" className="service-desc">{service.description}</Typography>
                        <ArrowForward className="arrow-icon" />
                    </Box>
                </Link>
            ))}
        </Box>
    );
}