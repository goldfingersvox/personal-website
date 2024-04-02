import { style } from "@vanilla-extract/css";

export const StyledTabList = style({
  display: 'flex',
})

export const StyledTab = style({
  background: 'transparent',
  borderRight: '0.5px solid #3C3C3C',
  position: 'relative',
  fontSize: '0.25rem',
  margin: '0 0.1rem 0.1rem 0',

  ':hover': {
    backgroundColor: '#004A76',
    borderRight: '0.5px solid transparent',
    borderRadius: '0.1rem',
  },

  selectors:{
    '&:has(+[data-state="active"])':{
      borderRight: '0.5px solid transparent',
    },

    '&:has(+button:hover)':{
      borderRight: '0.5px solid transparent',
    },

    '&[data-state="active"]': {
      background: "#3C3C3C",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: 'none',
      borderRadius: '0.1rem 0.1rem 0 0 ',
    },

    '&[data-state="active"]:after': {
      content: "",
      height: "0.1rem",
      width: "2rem",
      position: "absolute",
      right: "-2rem",
      bottom: "0em",
      borderRadius: "0 0 0 0.5rem",
      boxShadow: "-16px 0 0 0 #3C3C3C",
    },
    '&[data-state="active"]:before': {
      content: "",
      height: "0.1rem",
      width: "2rem",
      position: "absolute",
      left: "-2rem",
      bottom: "0em",
      borderRadius: "0 0 0.5rem 0",
      boxShadow: "16px 0 0 0 #3C3C3C",
    },
  },
});