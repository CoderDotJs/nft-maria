/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

const index = ({ accordion, expanded, handleChange }) => {
  return (
    <Accordion
      expanded={expanded.title === accordion.title}
      onChange={handleChange(accordion)}
      sx={{
        boxShadow: "none",
        "&:not(:last-child)": {
          borderBottom: 0,
        },
        "&:before": {
          display: "none",
        },
        fontFamily: "Barlow",
      }}
      className="border-t-2 border-gray-200"
    >
      <AccordionSummary
        expandIcon={
          expanded.title === accordion.title ? (
            <RemoveCircleOutline />
          ) : (
            <AddCircleOutline />
          )
        }
        aria-controls={`${accordion.title}bh-content`}
        id={`${accordion.title}bh-header`}
      >
        <p
          className={`${
            expanded.title === accordion.title ? "font-bold" : "font-normal"
          } text-xl uppercase`}
        >
          {accordion.title}
        </p>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-slate-500">{accordion.desc}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default index;
