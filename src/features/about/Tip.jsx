import { Tooltip } from "react-tooltip";

function Tip({ children, id, content }) {
  return (
    <>
      <span data-tooltip-id={id} data-tooltip-content={content}>
        {children}
      </span>

      <Tooltip
        effect="solid"
        place="top"
        type="dark"
        id={id}
        style={{ fontSize: "15px" }}
      />
    </>
  );
}

export default Tip;
