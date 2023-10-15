import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { AdsData } from "../configs/adsData";

const AdInsights = () => {
  const Adkeys = Object.keys(AdsData[0]);

  return (
    <div className="border border-gray-200 flex flex-col gap-5">
      <div className="p-5 pb-2 text-xl font-semibold border-2 border-b-gray-200 ">
        <p>Ads Insight</p>
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Adkeys.map((each) => (
                <TableCell>{each}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {AdsData.map((row) => (
              <TableRow
                key={row.Campaigns}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Campaigns}
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

export default AdInsights;
