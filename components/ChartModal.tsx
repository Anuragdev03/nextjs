import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Typography } from "@mui/material";
import DoughnutChart from "./DoughnutChart";
import { Box } from "@mui/system";
import userData from "../pages/data";

type Datatype = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: string[];
      backgroundColor?: string[];
    }
  ];
};

interface Proptype {
  isOpen: boolean;
  handleClose: () => void;
  chartData: Datatype;
}

const ChartModal = (props: Proptype) => {
  const { isOpen, handleClose, chartData } = props;

  function title() {
    return (
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "600px",
        }}
      >
        <div>
          <Typography variant="h6" fontWeight={"600"}>Subject Category</Typography>
        </div>
        <div>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
    );
  }
  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        {title()}
        <Divider />
        <DialogContent
          sx={{
            minHeight: 350,
            display: "flex",
            gap: "2.9rem",
            marginTop: "1.5rem",
          }}
        >
          <div style={{ width: "50%" }}>
            <DoughnutChart data={chartData} />
          </div>
          <div>
            {userData.map((data) => (
              <Box sx={{ display: "flex", gap: "2rem", alignItems: "center"}}>
                <Box
                  width={25}
                  height={15}
                  sx={{ backgroundColor: data.bgColor }}
                />
                <Typography gutterBottom>{data.year}</Typography>
                <Typography>{data.userGain}</Typography>
              </Box>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChartModal;
