import {
  Box,
  Card,
  Grid,
  Icon,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import { Small, H3 } from "app/components/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Task from "./Task";
import { useReactToPrint } from "react-to-print";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import axios from "axios";
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const NotetoP = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [savedText, setSavedText] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch saved text when the component mounts
    async function fetchSavedText() {
      try {
        const token = localStorage.getItem("jwtToken");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`${apiUrl}/api/get-saved-text`, {
          headers,
        });
        setSavedText(response.data.text || "");
      } catch (error) {
        console.error("Error fetching saved text:", error);
      }
    }

    fetchSavedText();
  }, []);

  const handleEdit = () => {
    setEditedText(savedText);
    setEditMode(true);
  };

  const handleSave = () => {
    const token = localStorage.getItem("jwtToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(`${apiUrl}/api/save-text`, { text: editedText }, { headers })
      .then((response) => {
        setSavedText(response.data.text);
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error saving text:", error);
      });
  };
  return (
    <>
      <div ref={componentRef}>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: "Notes to the financial statement" }]}
          />
        </Box>

        <SimpleCard>
          <React.Fragment>
            <div>
              <h1>Your Editable Text</h1>
              {editMode ? (
                <textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  placeholder="Edit your text here"
                />
              ) : (
                <div>{savedText}</div>
              )}
              <EditTextarea
                defaultValue="   Lionseal Industries Limited (the 'Company') was incorporated in Nigeria on 4 September,
          2007 as a limited liability company under the Companies and Allied Matters Act, Cap C20,
          Laws of the Federation of Nigeria 2004."
              />

              <EditTextarea
                defaultValue=" The Company is domiciled in Nigeria and its registered office is 26B, Abimbola Street,
                Isolo Industrial Estate, Isolo, Lagos, Nigeria. The Company is principally engaged in
                the business of distribution of crop protection chemicals."
              />

              <EditTextarea
                defaultValue=" 
                The parent and ultimate controlling entity of the Company is Inshara Global FZC, a
                company incorporated on 12 October 2009 and domicilied in Ras Al Khaimah, UAE."
              />
            </div>

            <b>
              <EditText
                defaultValue=" 
          2. Basis of preparation"
              />
            </b>
            <div>
              <b>
                {" "}
                <EditText
                  defaultValue=" 
  a. Statement of compliance"
                />
              </b>

              <EditTextarea
                defaultValue=" These financial statements have been prepared in accordance with International
              Financial Reporting Standards (IFRSs) as issued by the International Accounting
              Standards Board (IASB) and in the manner required by Companies and Allied Matters Act
              (CAMA), 2020 and the Financial Reporting Council of Nigeria Act, 2011."
              />
              <EditTextarea
                defaultValue="  The financial statements were authorized for issue by the Board of Directors on 5 July
              2021"
              />
              <b>
                {" "}
                <EditText defaultValue="  (b) Functional and presentation currency" />
              </b>

              <EditTextarea
                defaultValue="  These financial statements are presented in Naira, which is the Company’s functional
            currency. All financial information presented in Naira have been rounded to the
            nearest thousand unless stated otherwise."
              />
              <EditTextarea
                rows={5}
                defaultValue="  The preparation of the financial statements in conformity with IFRS requires
          management to make judgments, estimates and assumptions that affect the application of
          accounting policies and the reported amounts of assets, liabilities, income and
          expenses. Actual results may differ from these estimates. Estimates and underlying
          assumptions are reviewed on an ongoing basis. Revisions to accounting estimates are
          recognised prospectively."
              />
              <EditTextarea
                defaultValue="   Information about assumptions and estimation uncertainties that have most
        significant effects on amounts recognised in the financial statements is included in
        the following notes;"
              />
              <EditTextarea
                defaultValue="       Note 2(d) and 18: Determination of fair values Note 3(g), 9(d), 12 and 18:
      Impairment of financial assets: Expected credit loss and forward looking information
      Note 3(l) and 9d Recognition of deferred tax assets: availability of sufficient
      future taxable profit against which unutilised tax losses and unutilised capital
      allowance can be used."
              />
              <b>
                {" "}
                <EditText defaultValue="  (c) Use of estimates and judgement" />
              </b>
              <EditTextarea
                rows={10}
                defaultValue="   The preparation of the financial statements in conformity with IFRS requires management to make judgments, estimates and assumptions that affect the application of accounting policies and the reported amounts of assets, liabilities, income and expenses. Actual results may differ from these estimates. Estimates and underlying assumptions are reviewed on an ongoing basis. Revisions to accounting estimates are recognised prospectively.
            
            
            
            Information about assumptions and estimation uncertainties that have most significant effects on amounts recognised in the financial statements is included in the following notes;
            Note 2(d) and 18: Determination of fair values Note 3(g), 9(d), 12 and 18: Impairment of financial assets: Expected credit loss and forward looking information
            Note 3(l) and 9d Recognition of deferred tax assets: availability of sufficient future taxable profit against
which unutilised tax losses and unutilised capital allowance can be used.
            "
              />

              <b>
                {" "}
                <EditText defaultValue="  (d) Measurement of fair values" />
              </b>

              <EditTextarea
                rows={15}
                defaultValue="   Fair value is the price that would be received to sell an asset or paid to transfer a
              liability in an orderly transaction between market participants at the measurement
              date. Some of the Companys accounting policies and disclosures require the
              determination of fair values, for both financial and non-financial assets and
              liabilities.  When applicable, further information about the assumptions made in
              determining fair value is disclosed in the notes specific to that asset or liability.
              When measuring the fair value of an asset or a liability, the Company uses observable
              data as far as possible. Fair values are categorised into different levels in a fair
              value hierarchy based on the inputs used in the valuation techniques as follows: *
              Level 1: quoted prices (unadjusted) in active markets for identical assets or
              liabilities. * Level 2: inputs other than quoted prices included in Level 1 that are
              observable for the asset or liability, either directly (i.e. as prices) or indirectly
              (i.e. as derived from prices). * Level 3: inputs for the asset or liability that are
              not based on observable market data (unobservable inputs). In some cases, if the input
              used to measure the fair value of an asset or a liability might be categorised in
              different levels of the fair value hierarchy, then the fair value measurement is
              categorised in its entirety in the same level of the fair value hierarchy as the
              lowest level input that is significant to the entire measurement. The Company
              recognises transfers between levels of the fair value hierarchy at the end of the
              reporting period during which the change has occurred. Further information about the
              assumptions made in measuring fair values is included in Financial Instruments -
              Financial risk management and fair values (Note 20)."
              />
              <b>
                {" "}
                <EditText defaultValue=" (e) Basis of measurement" />
              </b>

              <EditTextarea
                defaultValue=" The financial statements have been prepared on the historical cost basis except as
              disclosed in note 3."
              />
              <b>
                {" "}
                <EditText defaultValue="3. Significant accounting policies" />
              </b>

              <EditTextarea
                defaultValue=" The accounting policies set out below have been applied consistently to all periods
            presented in these financial statements, unless otherwise indicated. Set out below is an
            index of the significant accounting policies and changes in accounting policies, the
            details of which are available on pages that follow:
            "
              />
              <EditText defaultValue=" a. Foreign currency transactions" />
              <EditText
                defaultValue="   b.
              Financial instruments"
              />
              <EditText defaultValue="  c. Share capital" />
              <EditText defaultValue="  d. Property plant and equipment" />
              <EditText defaultValue="  e. Lease" />
              <EditText defaultValue="  f. Inventories" />
              <EditText defaultValue="  g. Impairment" />
              <EditText defaultValue="  h. Employee benefit" />
              <EditText defaultValue="  i. Contigience" />
              <EditText defaultValue="  j. Revenue" />
              <EditText defaultValue="  l. Income" />
              <EditText defaultValue="  m. Statment" />
              <EditText defaultValue="  n. Government" />
              <EditText defaultValue="  o. Policy" />
              <EditText defaultValue="  p. Cashflow" />
              <EditText defaultValue="  q. ENterpreneur" />
              <EditText defaultValue="  r. Taxation" />
              <b>
                {" "}
                <EditText defaultValue=" (a) Foreign currency transactions" />
              </b>
              <EditTextarea
                rows={8}
                defaultValue="    Transactions denominated in foreign currencies are translated and recorded in Naira at
          the actual exchange rates as of the date of the transaction. Monetary assets and
          liabilities denominated in foreign currencies at the reporting date are translated to
          the functional currency at the rates of exchange prevailing at that date. Non-monetary
          assets and liabilities denominated in foreign currencies that are measured at fair value
          are translated to the functional currency at the exchange rate at the date that the fair
          value was determined. Foreign currency differences arising on translation are recognised
          in profit or loss. Non-monetary items that are measured in terms of historical cost in a
          foreign currency are translated using the exchange rate at the date of the transaction."
              />
            </div>
          </React.Fragment>
        </SimpleCard>
      </div>
      <button onClick={editMode ? handleSave : handleEdit}>
        {editMode ? "Save" : "Edit"}
      </button>
    </>
  );
};

export default NotetoP;
