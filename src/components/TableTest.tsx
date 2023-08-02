import { TableContainer, TableFooter, TablePagination } from "@mui/material";
import Table from "@mui/material/Table/Table";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody/TableBody";
import Paper from "@mui/material/Paper/Paper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageCount } from "../library/redux/Slices/Pagination";

const TableTest = (props: { results: []; count: number }) => {
  const dispatch = useDispatch();
  const page = useSelector(
    (state: { pagination: { page: number } }) => state.pagination.page
  );
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log(newPage);
    dispatch(setPageCount(newPage));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Location Name</TableCell>
            <TableCell align="center">species</TableCell>
            <TableCell align="center">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.results ? (
            props.results.map(
              (row: {
                name: string;
                id: string;
                gender: string;
                location: { name: string };
                species: string;
                status: string;
              }) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  <TableCell align="center">{row.location.name}</TableCell>
                  <TableCell align="center">{row.species}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              )
            )
          ) : (
            <TableRow>
              <TableCell align="center" colSpan={6}>
                Loading Please wait
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {props.results ? (
          <TableFooter>
            <TableRow>
              <TablePagination
                align="right"
                count={props.count}
                rowsPerPageOptions={[]}
                rowsPerPage={20}
                page={page}
                onPageChange={handleChangePage}
              />
            </TableRow>
          </TableFooter>
        ) : null}
      </Table>
    </TableContainer>
  );
};

export default TableTest;
