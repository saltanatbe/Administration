import React, { useState } from "react";
import { tokens } from "../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  Sidebar as SideBar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import "./sidebar.css";
import { Link } from "react-router-dom";

const items = [
  { menuItems: [{ title: "Dashboard", to: "/", icon: <HomeOutlinedIcon /> }] },
  {
    title: "Data",
    menuItems: [
      { title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon /> },
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        title: "Incoming balance",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    title: "Pages",
    menuItems: [
      { title: "Profile form", to: "/profile", icon: <PersonOutlinedIcon /> },
      {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      { title: "FAQ", to: "/faq", icon: <HelpOutlinedIcon /> },
    ],
  },
  {
    title: "Charts",
    menuItems: [
      { title: "Bar Chart", to: "/bar", icon: <BarChartOutlinedIcon /> },
      { title: "Pie Chart", to: "/pie", icon: <PieChartOutlinedIcon /> },
      { title: "Line Chart", to: "/line", icon: <TimelineOutlinedIcon /> },
      { title: "Map", to: "/map", icon: <MapOutlinedIcon /> },
    ],
  },
];

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      icon={icon}
      style={{ color: colors.grey[100] }}
      onClick={() => {
        setSelected(title);
      }}
      active={selected === title}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  const createList = () => {
    let list = [];
    items.map((item) => {
      if (item.hasOwnProperty("title")) {
        list.push(
          <div>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {item.title}
            </Typography>
          </div>
        );
      }

      item.menuItems.map((menu) => {
        list.push(
          <Item
            title={menu.title}
            to={menu.to}
            icon={menu.icon}
            selected={selected}
            setSelected={setSelected}
          />
        );
      });
    });
    return list;
  };

  return (
    <Box>
      <SideBar transitionDuration={500} backgroundColor={colors.primary[400]}>
        <Menu
          renderMenuItemStyles={({ active }) => ({
            ".menu-icon": {
              backgroundColor: "transparent",
            },
            ".menu-anchor": {
              backgroundColor: active
                ? colors.primary[500]
                : colors.primary[400],
              padding: "5px 35px 5px 20px",
              "&:hover": {
                color: "#868dfb",
                backgroundColor: colors.primary[400],
              },
            },
          })}
        >
          <MenuItem
            onClick={() => {
              if (collapsed) collapseSidebar();
            }}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {!collapsed && (
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={() => {
                    collapseSidebar();
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <MenuItem disabled={true}>
              <Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src={require("../../assets/user.jpg")}
                    width="100px"
                    height="100px"
                    alt="profile"
                    style={{ borderRadius: "50%", cursor: "pointer" }}
                  />
                </Box>
              </Box>
            </MenuItem>
          )}
          {createList()}
        </Menu>
      </SideBar>
    </Box>
  );
};

export default Sidebar;
