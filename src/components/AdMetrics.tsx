import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { AdsMetrics } from "../configs/adsData";

const AdMetrics = () => {
  const Adkeys = Object.keys(AdsMetrics[0]);

  return (
    <div className="border border-gray-200 flex flex-col gap-5">
      <div className="p-5 pb-2 text-xl font-semibold border-2 border-b-gray-200 text-gray-800">
        Ads Insight
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Adkeys.map((each) => (
                <TableCell>
                  <p className="font-bold text-lg"> {each}</p>
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
                <TableCell component="th" scope="row">
                  {row.Group}
                </TableCell>
                <TableCell>{row.Clicks}</TableCell>
                <TableCell>{row.Cost}</TableCell>
                <TableCell>{row.Conversions}</TableCell>
                <TableCell>{row.Revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdMetrics;
