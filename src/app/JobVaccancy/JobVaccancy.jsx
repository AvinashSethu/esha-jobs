"use client";
import { Box,Typography} from "@mui/material";
import CardList from "./CardList";


export default function JobVacancy({ onApplyNow, jobTitles, loadingJobs }) {
  return (
    <Box
      sx={{
        minHeight: "auto",
        backgroundColor: "#fff",
        padding: { xs: 1, sm: 2, md: 3 },
        mb: { xs: 10, md: 0 },
      }}
    >
      {/* Header Section */}
      <Box sx={{ marginTop: { xs: "30px", md: "5%" }, justifyContent: "center", textAlign: "center" }}>
        <Typography sx={{ color: "var(--primary)", fontWeight: "bold" }}>JOB VACANCY</Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            mt: 3,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Discover the best job
        </Typography>
        <Typography
  sx={{
    mt: 3,
    color: "#999999",
    fontSize: { xs: "14px", sm: "14px", md: "15px" },
    px: { xs: 3, sm: 0 },
    '& br': {
      display: { xs: 'none', sm: 'inline' }
    }
  }}
>
  Start career with the best company in the world, we ensure <br /> you to get the best job possible.
</Typography>
      </Box>

      {/* Job Cards */}
      <Box sx={{height:'auto',marginTop:'30px'}}>
      <CardList onApplyNow={onApplyNow} jobTitles={jobTitles} loadingJobs={loadingJobs}/>

    </Box>
     
    </Box>
  );
}