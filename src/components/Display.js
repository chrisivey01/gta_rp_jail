import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const Display = props => {
  const tableData = props.result;

  return (
    <div>
      <BootstrapTable
        data={tableData}
        rowClasses="rows"
        search
        filter
        pagination
        hover
      >
        <TableHeaderColumn width="40px" isKey dataField="player_name">
          Citizen's Name
        </TableHeaderColumn>
        <TableHeaderColumn width="40px" dataField="arresting_officer">
          Arresting Officer
        </TableHeaderColumn>
        <TableHeaderColumn width="250px" dataField="reason">
          Reason
        </TableHeaderColumn>
        <TableHeaderColumn width="40px" dataField="time_stamp">
          Date
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

export default Display;
