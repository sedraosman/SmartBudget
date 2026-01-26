import { useState } from "react";
import dayjs from "dayjs"; // ✅ ADD THIS
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useContext_ } from "../useContext/UseContext";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

// date
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Filter() {
  const { label_ } = useContext_();
  const [category, setCategory] = useState("all");
  const [date, setDate] = useState(null);

  const filteredExpenses = label_.filter((item) => {
    const categoryMatch =
      category === "all" || item.categori === category;

    const dateMatch =
      !date || dayjs(item.date).format("YYYY-MM-DD") ===date.format("YYYY-MM-DD");


    return categoryMatch && dateMatch; 
    
  });

  
  return (
    <div style={{ background: "#662222" }}>
      <Container maxWidth="sm">
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "#842A3B",
            borderRadius: "20px",
          }}
        >
          <h2>Filter By</h2>

          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ m: 2, minWidth: 200 }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="rent">Rent</MenuItem>
            <MenuItem value="transport">Transport</MenuItem>
            <MenuItem value="travel">Travel</MenuItem>
          </Select>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ m: 2 }}
              value={date}
              onChange={setDate} // ✅ correct
            />
          </LocalizationProvider>

          {filteredExpenses.map((item) => (
            <Grid
              key={item.id}
              container
              spacing={2}
              sx={{
                m: 2,
                background: "#662222",
                borderRadius: "19px",
              }}
            >
              <Grid size={4}>
                <p>Expense:</p>
                <p>{item.name}</p>
              </Grid>

              <Grid size={4}>
                <p>Amount:</p>
                <p>{item.amount}$</p>
              </Grid>
               <Grid size={4}>
                <p>Date:</p>
                <p>{dayjs(item.date).format("YYYY-MM-DD")}</p>
              </Grid>
            </Grid>
          ))}
        </div>
      </Container>
    </div>
  );
}