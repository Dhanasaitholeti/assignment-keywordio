import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { AdsMetrics } from "../configs/adsData";

const TableStats = () => {
  const Adkeys = Object.keys(AdsMetrics[0]);
  return (
    <>
      <TableContainer className="min-w-[300px]">
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Adkeys.map((each) => (
                <TableCell key={each}>
                  <p className="font-bold text-md lg:text-lg"> {each}</p>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {AdsMetrics.map((row) => (
              <TableRow
                key={row.Group}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ width: 100 }}>
                  {row.Group}
                </TableCell>
                <TableCell sx={{ width: 100 }}>{row.Clicks}</TableCell>
                <TableCell sx={{ width: 100 }}>{row.Cost}</TableCell>
                <TableCell sx={{ width: 100 }}>{row.Conversions}</TableCell>
                <TableCell sx={{ width: 100 }}>{row.Revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableStats;
