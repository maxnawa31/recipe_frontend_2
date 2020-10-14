import React from "react";
import { ToolbarContainer } from "./styles";

// export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
//   <Menu {...props} ref={ref} />
// ));

export const Toolbar = (props) => (
  <ToolbarContainer>{props.children}</ToolbarContainer>
);

export default Toolbar;
