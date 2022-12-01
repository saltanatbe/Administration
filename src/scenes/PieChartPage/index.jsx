import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PieChart from "../../components/PieChart";
const PieChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="pie chart" subtitle="here are some commin question" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default PieChartPage;
