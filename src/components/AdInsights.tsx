import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel, // import this component
} from "@mui/material";
import { AdsData } from "../configs/adsData";
import { useState } from "react";

const AdInsights = () => {
  const Adkeys = Object.keys(AdsData[0]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("");

  const handleSortRequest = (column: string) => {
    const isAsc = orderBy === column && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(column);
  };

  const compare = (a: any, b: any, order: "asc" | "desc") => {
    if (a < b) {
      return order === "asc" ? -1 : 1;
    }
    if (a > b) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  };

  const sortData = (data: any[], order: "asc" | "desc", orderBy: string) => {
    return data.sort((a, b) => compare(a[orderBy], b[orderBy], order));
  };

  const sortedData = sortData(AdsData, order, orderBy);

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
                <TableCell key={each}>
                  <TableSortLabel
                    active={orderBy === each}
                    direction={orderBy === each ? order : "asc"}
                    onClick={() => handleSortRequest(each)}
                  >
                    <p className="font-bold text-md lg:text-lg overflow-x-hidden">
                      {each}
                    </p>
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
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
