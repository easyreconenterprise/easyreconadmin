import {
  Box,
  Card,
  Grid,
  Icon,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Breadcrumb } from "app/components";
import { Small, H3 } from "app/components/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./print.css";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const AllNotes = () => {
  return (
    <div>
      <Box className="breadcrumb no-print">
        <Breadcrumb
          routeSegments={[{ name: "Notes to the financial statement" }]}
        />
      </Box>
      <p style={{ marginBottom: "20px", marginLeft: "10px" }}>
        <i>for the year ended December 31</i>
      </p>
      <Grid
        container
        spacing={3}
        sx={{ mb: "24px" }}
        style={{ marginLeft: "10px" }}
      >
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-1"
            >
              1. Reporting Entity
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-1"
            >
              2. Basis of preparation
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-1"
            >
              3. Significant Accounting policies
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-4-8b"
            >
              4. Revenue
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-4-8b"
            >
              5. Other income
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-4-8b"
            >
              6. Net financial cost
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-4-8b"
            >
              7. Profit before taxation
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-4-8b"
            >
              8. Personal Expenses
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-4-8b"
            >
              9. Taxation
            </a>
          </h5>
        </Grid>

        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-10a"
            >
              10. Property, plant and equipment
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              11. Inventories
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              12. Trade and other receivables
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              13. Prepayment and advances
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              14. Cash and cash equivalent
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              15. Capital and Reserves
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-15c-18c"
            >
              16. Trade and other payables
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-15c-18c"
            >
              17. Deferred Income
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-15c-18c"
            >
              18. Loans and borrowings
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              19. Financial instruments - Financial risk management and fair
              value
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              20. Leases
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              21. Contigencies
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              22. Related parties
            </a>
          </h5>
        </Grid>
        <Grid item xs={4} md={4}>
          <h5>
            <a
              style={{ fontSize: "15px", color: "#220f5f" }}
              href="/dashboard/note-11-15b"
            >
              23. Event after the reporting period
            </a>
          </h5>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllNotes;
