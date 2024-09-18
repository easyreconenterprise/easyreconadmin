import React from "react";
export function TablePanel(props) {
  return (
    <div className="col-sm-12 tablePanel">
      <div className="card dashboardRow">
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "600" }}>
            {props.title}
          </h5>
          {props.children}
        </div>
      </div>
    </div>
  );
}
