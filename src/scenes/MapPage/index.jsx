import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Map from "../../components/Map";

const MapPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Map" subtitle="here are some commin question" />
      <Box height="75vh">
        <Map />
      </Box>
    </Box>
  );
};

export default MapPage;
