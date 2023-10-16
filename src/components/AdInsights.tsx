import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Grid,
} from "@mui/material";
import { AdsData } from "../configs/adsData";

const AdInsights = () => {
  const Adkeys = Object.keys(AdsData[0]);

  return (
    <div className="border border-gray-200 flex flex-col gap-5 w-[100%] lg:w-[50%]">
      <div className="p-5 pb-2 text-xl font-semibold border-2 border-b-gray-200 text-gray-800">
        <p>Ads Insight</p>
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Adkeys.map((each) => (
                <TableCell>
                  <p className="font-bold text-md lg:text-lg overflow-x-hidden">
                    {each}
                  </p>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {AdsData.map((row) => (
              <TableRow
                key={row.Campaigns}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ width: 100 }} component="th" scope="row">
                  {row.Campaigns}
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
    </div>
  );
};

export default AdInsights;
