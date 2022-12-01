import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";

const BarChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="here are some commin question" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarChartPage;
