import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Button, Divider, IconButton, Radio, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Proptype {
  isOpen: boolean;
  handleClose: () => void;
}

const DownloadCitation = (props: Proptype) => {
  const { isOpen, handleClose } = props;

  function title() {
    return (
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "390px",
        }}
      >
        <div>
          <Typography variant="h6" fontWeight={"600"}>
            Subject Category
          </Typography>
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

        <DialogContent sx={{ minHeight: "300px" }}>
          <Typography>Select File Format</Typography>
          <Typography variant="body1">
            <Radio /> Bib Tex
          </Typography>
          <Typography variant="body1">
            <Radio /> EndNote(RIS)
          </Typography>
          <Typography variant="body1">
            <Radio /> Mendelay
          </Typography>
          <Typography variant="body1">
            <Radio /> ProCite
          </Typography>
          <Typography variant="body1">
            <Radio /> PDF
          </Typography>

          <div style={{ display: "flex", gap: "1.4rem", marginTop :"1rem"}}>
            <Button variant="contained" color="secondary">Download</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DownloadCitation;
