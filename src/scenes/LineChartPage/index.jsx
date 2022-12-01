import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import LineGraph from "../../components/LineGraph";

const LineChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Line chart" subtitle="here are some commin qfdsuestion" />
      <Box height="75vh">
        <LineGraph />
      </Box>
    </Box>
  );
};

export default LineChartPage;
