import { Typography, TextField, Container } from "@mui/material";

const RecSum = () => {
  return (
    <main style={{ marginBottom: "100px" }}>
      {/* Header */}
      <Typography
        sx={{
          textAlign: "center",
          m: "1rem",
          p: "0.5rem",
          bgcolor: "primary.main",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
        variant="h5"
        component="h2"
      >
        Demo Account Reconciliation Summary As at <span>January 2024</span>
      </Typography>

      {/* Account Details */}
      <Container
        sx={{
          mt: "1rem",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Typography variant="subtitle1">
          Account Number: <span>225137568</span>
        </Typography>
        <Typography variant="subtitle1">
          Currency: <span>NGN</span>
        </Typography>
        <Typography variant="subtitle1">
          Period: <span>January 2024</span>
        </Typography>
      </Container>

      {/* Balance as per Ledger Section */}
      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
          }}
        >
          Balance as per Ledger <span>(01/Jan/2024) - LMD</span>
        </Typography>
        <TextField
          sx={{
            flexBasis: "20rem",
            ml: "auto", // Floats the input to the right
          }}
          id="ledger-sequence"
          type="number"
          variant="outlined"
        />
      </Container>
      <Typography
        style={{ fontWeight: "800", fontSize: "20px", marginLeft: "40px" }}
      >
        Add
      </Typography>
      {/* ADD Section */}
      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
          }}
        >
          Outstanding Credit in Ledger
        </Typography>
        <Container
          sx={{
            display: "flex",
            gap: "1rem",
            ml: "auto", // Floats the inputs to the right
          }}
        >
          <TextField
            sx={{
              flexBasis: "20rem",
            }}
            id="add-outstanding-credit-1"
            type="number"
            variant="outlined"
          />
          <TextField
            sx={{
              flexBasis: "20rem",
            }}
            id="add-outstanding-credit-2"
            type="number"
            variant="outlined"
          />
        </Container>
      </Container>
      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
          }}
        >
          Outstanding Credit in Statement
        </Typography>
        <Container
          sx={{
            display: "flex",
            gap: "1rem",
            ml: "auto", // Floats the inputs to the right
          }}
        >
          <TextField
            sx={{
              flexBasis: "20rem",
            }}
            id="add-outstanding-credit-1"
            type="number"
            variant="outlined"
          />
          <TextField
            sx={{
              flexBasis: "20rem",
            }}
            id="add-outstanding-credit-2"
            type="number"
            variant="outlined"
          />
        </Container>
      </Container>
      <br></br>
      <br></br>
      {/* LESS Section */}
      <Typography
        style={{ fontWeight: "800", fontSize: "20px", marginLeft: "40px" }}
      >
        Less
      </Typography>
      {/* ADD Section */}
      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
          }}
        >
          Outstanding Credit in Ledger
        </Typography>
        <Container
          sx={{
            display: "flex",
            gap: "1rem",
            ml: "auto", // Floats the inputs to the right
          }}
        >
          <TextField
            sx={{
              flexBasis: "20rem",
            }}
            id="add-outstanding-credit-1"
            type="number"
            variant="outlined"
          />
          <TextField
            sx={{
              flexBasis: "20rem",
            }}
            id="add-outstanding-credit-2"
            type="number"
            variant="outlined"
          />
        </Container>
      </Container>
      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
          }}
        >
          Outstanding Credit in Statement
        </Typography>
        <Container
          sx={{
            display: "flex",
            gap: "1rem",
            ml: "auto", // Floats the inputs to the right
          }}
        >
          <TextField
            sx={{
              flexBasis: "20rem",
            }}
            id="add-outstanding-credit-1"
            type="number"
            variant="outlined"
          />
          <TextField
            sx={{
              flexBasis: "20rem",
            }}
            id="add-outstanding-credit-2"
            type="number"
            variant="outlined"
          />
        </Container>
      </Container>
      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
          }}
        >
          Balance as per Statement <span>(01/Jan/2024) - LMD</span>
        </Typography>
        <TextField
          sx={{
            flexBasis: "20rem",
            ml: "auto", // Floats the input to the right
          }}
          id="ledger-sequence"
          type="number"
          variant="outlined"
        />
      </Container>

      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
          }}
          style={{ fontWeight: "800", fontSize: "20px" }}
        >
          Different
        </Typography>
        <p
          sx={{
            flexBasis: "20rem",
            ml: "auto", // Floats the input to the right
          }}
          id="ledger-sequence"
          type="number"
          variant="outlined"
        >
          0.00
        </p>
      </Container>
      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
          }}
          style={{ fontWeight: "800", color: "red" }}
        >
          Last Movement Date(LMD)
        </Typography>
      </Container>
    </main>
  );
};

export default RecSum;
