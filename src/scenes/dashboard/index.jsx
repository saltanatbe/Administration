import { Box, useTheme, Button, Typography, IconButton } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import StateBox from "../../components/StateBox";
import LineGraph from "../../components/LineGraph";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import Map from "../../components/Map";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const iconStyle = { color: colors.greenAccent[600], fontSize: "26px" };
  const boxes = [
    {
      title: "12.361",
      subtitle: "emails sent",
      progress: "0.75",
      increase: "+14%",
      icon: <EmailIcon sx={{ iconStyle }} />,
    },
    {
      title: "431.361",
      subtitle: "Sales obtained",
      progress: "0.5",
      increase: "+21%",
      icon: <PersonAddIcon sx={{ iconStyle }} />,
    },
    {
      title: "431.361",
      subtitle: "Sales obtained",
      progress: "0.5",
      increase: "+21%",
      icon: <TrafficIcon sx={{ iconStyle }} />,
    },
    {
      title: "431.361",
      subtitle: "Sales obtained",
      progress: "0.5",
      increase: "+21%",
      icon: <PointOfSaleIcon sx={{ iconStyle }} />,
    },
  ];

  const graphs = [
    {
      title: "Campaign",
      component: (
        <Box
          display="flex"
          alignItems="center"
          mt="25px"
          flexDirection="column"
        >
          <ProgressCircle size="125" />
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
          >
            $48.352 revenue generated
          </Typography>
          <Typography>Includes extra misc expenditures and costs</Typography>
        </Box>
      ),
    },
    {
      title: "Sales Quantity",
      component: (
        <Box height="250px" mt="-25px">
          <BarChart isDashboard={true} />
        </Box>
      ),
    },
    {
      title: "Geography based traffic",
      component: (
        <Box height="250px" mt="-25px">
          <Map isDashboard={true} />
        </Box>
      ),
    },
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {boxes.map((box) => {
          return (
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StateBox
                title={box.title}
                subtitle={box.subtitle}
                progress={box.progress}
                increase={box.increase}
                icon={box.icon}
              />
            </Box>
          );
        })}
        {/* Row2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[100]}
              >
                Revenue Generated
              </Typography>

              <Typography
                variant="h3"
                fontWeight="500"
                color={colors.greenAccent[500]}
              >
                $59.000.000
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" ml="-20px">
            <LineGraph isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}> {transaction.data}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {graphs.map((graph) => (
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Typography variant="h5" fontWeight="600" p="30px">
              {graph.title}
            </Typography>
            {graph.component}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
