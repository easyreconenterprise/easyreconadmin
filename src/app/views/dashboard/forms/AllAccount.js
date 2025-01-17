import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SessionContext } from "app/components/MatxLayout/SwitchContext"; // Adjust path as needed
import { useNavigate } from "react-router-dom";

const AllAccount = () => {
  const navigate = useNavigate();
  const { currentSession } = useContext(SessionContext); // Context providing affiliateId and domainId
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  useEffect(() => {
    const fetchAccounts = async () => {
      // Log the currentSession for debugging
      console.log("Current Session:", currentSession);

      // Check if affiliate and domain exist in currentSession
      if (!currentSession?.affiliate || !currentSession?.domain) {
        setError("Affiliate and Domain are required.");
        console.log("Missing IDs:", {
          affiliate: currentSession?.affiliate,
          domain: currentSession?.domain,
        });
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching accounts with IDs:", {
          affiliate: currentSession.affiliate,
          domain: currentSession.domain,
        });

        const response = await axios.get(`${apiUrl}/api/accounts`, {
          params: {
            affiliateId: currentSession.affiliate, // Updated field name
            domainId: currentSession.domain, // Updated field name
          },
        });

        console.log("Accounts fetched:", response.data);
        setAccounts(response.data);
      } catch (err) {
        console.error("Error fetching accounts:", err);
        setError(
          err.response?.data?.message || "Failed to fetch accounts. Try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [currentSession]);

  return (
    <div>
      {accounts.length === 0 ? (
        <p>No accounts found for the selected affiliate and domain.</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Account Title</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account._id}>
                <td>{account.accountTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllAccount;
