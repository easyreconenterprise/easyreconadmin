import React, { useRef } from "react";
import Content from "./Content";
import { useReactToPrint } from "react-to-print";
import DirectorsReport from "./Director-report";
import Certification from "./Certification";
import Sodr from "./Sodr";
import "./print.css";
import LossandProfit from "../fs/LossandProfit";
import AllNotes from "../notes/AllNotes";
import Noteone from "../notes/Noteone";
import FinSummary from "../fs/FinSummary";
import Cover from "./Cover";
import Incomefs from "../fs/Incomefs";
import NoteOneToThree from "../notes/NoteOneToThree";
import NoteThree from "../notes/NoteThree";
import NotefourtoEight from "../notes/NotefourtoEight";
import EighttoNine from "../notes/EighttoNine";
import Ten from "../notes/Ten";
import EleventoFif from "../notes/Eleven";
import Fifteen from "../notes/Fifteen";
import Nineteen from "../notes/Nineteen";
import Twenty from "../notes/Twenty";
import CoopInfo from "./CoopInfo";
import Equity from "../fs/Equity";
import Cashflow from "../fs/Cashflow";
import Vas from "./Vas";

const componentStyle = {
  pageBreakBefore: "always",
};

const PrintView = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="print-button-container">
        <button onClick={handlePrint}> Print this out!</button>
      </div>

      <div className="print-view" ref={componentRef}>
        <Cover />
        <div style={{ pageBreakBefore: "always" }} />
        <Content className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <CoopInfo className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <DirectorsReport className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Certification className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Sodr className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Incomefs className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <LossandProfit className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Equity className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Cashflow className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <AllNotes className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Noteone className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <NoteOneToThree className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <NoteThree className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <NotefourtoEight className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <EighttoNine className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Ten className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <EleventoFif className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Fifteen className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Nineteen className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Twenty className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <Vas className="page-break" />
        <div style={{ pageBreakBefore: "always" }} />
        <FinSummary className="page-break" />
      </div>
    </div>
  );
};

export default PrintView;
