'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const {Table, Column, Cell}=require ('fixed-data-table');



var ExampleApplication = React.createClass({
  render: function() {
     return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
        />
      </Table>
    );
  }
});

var start = new Date().getTime();

setInterval(function() {
  ReactDOM.render(
    <ExampleApplication  />,
    document.getElementById('container')
  );
}, 50);
/*const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

// Render your table
ReactDOM.render(
  <Table
    rowHeight={50}
    rowsCount={rows.length}
    width={5000}
    height={5000}
    headerHeight={50}>
    <Column
      header={<Cell>Col 1</Cell>}
      cell={<Cell>Column 1 static content</Cell>}
      width={2000}
    />
    <Column
      header={<Cell>Col 2</Cell>}
      cell={<MyCustomCell mySpecialProp="column2" />}
      width={1000}
    />
    <Column
      header={<Cell>Col 3</Cell>}
      cell={<Cell>Column 3 static content</Cell>}
      width={2000}
    />
  </Table>,
  document.getElementById('example')
);*/
