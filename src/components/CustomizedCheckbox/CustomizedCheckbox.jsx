import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 20,
  height: 20,
  backgroundColor: "white",
  border: "1px solid #989799",
  ".Mui-focusVisible &": {
    outlineOffset: 2,
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "#D9D9D9",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#009F88",
  "&::before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
});

export default function BpCheckbox(props) {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      sx={{
        padding: 0, // Removes the default padding
      }}
      {...props}
    />
  );
}

// export default function CustomizedCheckbox() {
//   return (
//     <div>
//       <BpCheckbox />
//       <BpCheckbox defaultChecked />
//       <BpCheckbox disabled />
//     </div>
//   );
// }
