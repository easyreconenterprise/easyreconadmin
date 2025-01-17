import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SessionContext } from "app/components/MatxLayout/SwitchContext"; // Adjust path as needed
import { useNavigate } from "react-router-dom";

const AllDomain = () => {
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
      if (!currentSession?.affiliate) {
        setError("Affiliate is required.");
        console.log("Missing IDs:", {
          affiliate: currentSession?.affiliate,
        });
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching accounts with IDs:", {
          affiliate: currentSession.affiliate,
        });

        const response = await axios.get(`${apiUrl}/api/all-domain`, {
          params: {
            affiliateId: currentSession.affiliate, // Updated field name
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
        <p>No domain found for the selected affiliate</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>All Domain Names</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account._id}>
                <td>{account.domainName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllDomain;
