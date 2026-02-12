import { Nav } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

type SidebarProps = {
  activeTab: string;
  onChange: (value: string) => void;
  lineIds: string[];
};

const Sidebar = ({ activeTab, onChange, lineIds }: SidebarProps) => {
  return (
    <Nav className="flex-column ps-3">
      <Nav.Link
        onClick={() => onChange("line")}
        className={[
          "px-3",
          "py-2",
          "rounded-0",
          activeTab === "line"
            ? "border-start border-3 border-primary fw-semibold text-primary"
            : "text-secondary",
        ].join(" ")}
      >
        <FormattedMessage
          id="allLines"
          defaultMessage="All Lines (Global Views)"
        />
      </Nav.Link>

      {lineIds.map((lineId) => {
        const active = activeTab === lineId;

        return (
          <Nav.Link
            key={lineId}
            onClick={() => onChange(lineId)}
            className={[
              "px-3",
              "py-2",
              "rounded-0",
              active
                ? "border-start border-3 border-primary fw-semibold text-primary"
                : "text-secondary",
            ].join(" ")}
          >
            <FormattedMessage
              id="line"
              defaultMessage="Line ({lineId})"
              values={{ lineId }}
            />
          </Nav.Link>
        );
      })}
    </Nav>
  );
};

export default Sidebar;
