import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";
import Admin from "./admin/Admin";
import Form from "./forms/Form";
import "./Style.css";
import Profile from "./forms/Profile";
import CreateNew from "./project/CreateNew";
import Trial from "./import/Trial";
import Mapping from "./import/Mapping";
import Mapped from "./import/Mapped";
import IncomeFs from "./fs/Incomefs";
import Tried from "./import/Tried";
import Trialbal from "./import/Trialbal";
import FileImport from "./import/FileImport";
import Query from "./import/Query";
import Drag from "./import/Drag";
import Fs from "./fs/Fs";
import Maps from "./import/MappedTables";
import { Table } from "./Table";
import Profit from "./import/Profit";
import LossandProfit from "./fs/LossandProfit";
import Equity from "./fs/Equity";
import AllNotes from "./notes/AllNotes";
import Noteone from "./notes/Noteone";
import NoteOneToThree from "./notes/NoteOneToThree";
import NotefourtoEight from "./notes/NotefourtoEight";
import EighttoNine from "./notes/EighttoNine";
import Content from "./pages/Content";
import DirectorsReport from "./pages/Director-report";
import Certification from "./pages/Certification";
import Sodr from "./pages/Sodr";
import FinSummary from "./fs/FinSummary";
import PrintView from "./pages/PrintView";
import CoopInfo from "./pages/CoopInfo";
import Subtwo from "./pages/Subtwo";
import Cashflow from "./fs/Cashflow";
import Vas from "./pages/Vas";
import NoteThree from "./notes/NoteThree";
import Ten from "./notes/Ten";
import EleventoFif from "./notes/Eleven";
import Fifteen from "./notes/Fifteen";
import Nineteen from "./notes/Nineteen";
import Twenty from "./notes/Twenty";
import SelectCategory from "./import/SelectCategory";
import SelectCategorys from "./import/SelectCategorys.js";
import New from "./fs/New";
import Cover from "./pages/Cover";
import Import from "./import/Import";
import One from "./import/One";
import ExcelToJson from "./import/ExcelToJson";
import Incomes from "./import/Incomes";
import NewFs from "./fs/NewFs";
import CashIndex from "./cashflow/CashIndex";
import Working from "./cashflow/Working";
import UnMappedData from "./import/UnmappedData";
import MappedTotals from "./fs/MappedTotals";
import SubcategoryPage from "./import/SubcategoryPage.js";
import MappedTable from "./import/MappedTable";
import Charge from "./notes/Charge";
import OnlyMap from "./import/OnlyMap";
import ParentMapped from "./import/ParentMapped";
import { TotalProvider } from "./pages/TotalContext";
import NewAccount from "./forms/NewAccount";
import CreateAccount from "./forms/CreateAccount";
import Matching from "./pages/Matching";
import AtmMatching from "./forms/AtmMatching";
import AllMatch from "./pages/AllMatch";
import FrmReport from "./pages/FrmReport";
import FrmDownloadRpt from "./pages/FrmDowloadRpt";
import AuditTrailReport from "./pages/AuditTrailReport";
import RecSum from "./pages/RecSum";
import Trial2 from "./import/Trial2";
import Trial3 from "./import/Trial3";
import Statement from "./Statement";
import CreateAffiliate from "./pages/CreateAffliate";
import CreateDomain from "./pages/CreateDomain";

import StatementSummary from "./StatementSummary";
import LedgerSummary from "./LedgerSummary";
import UnmatchedItems from "./import/UnmatchedTable";
import AllAccount from "./forms/AllAccount";
import AllDomain from "./forms/AllDomain";
import UserAdmin from "./forms/UserAdmin";
import UserAssign from "./forms/UserAssign";
import DeleteAct from "./forms/DeleteAct";
import AccountTitle from "./forms/AccountTitle";

// import SwitchAccount from 'app/components/MatxLayout/Layout1/SwitchAccount'

const Analytics = Loadable(lazy(() => import("./Analytics")));

const dashboardRoutes = [
  // { path: '/dashboard/default', element: <Analytics />, auth: authRoles.admin },
  { path: "/dashboard/admin", element: <Admin /> },
  { path: "/dashboard/student_add", element: <Form /> },
  { path: "/dashboard/create-new", element: <CreateNew /> },
  { path: "/dashboard/matching-rule", element: <Matching /> },
  { path: "/dashboard/upload-excel", element: <Trial /> },
  { path: "/dashboard/upload-excel-led", element: <Trial3 /> },
  { path: "/dashboard/upload-csv", element: <Trial2 /> },
  { path: "/dashboard/mapping", element: <Mapping /> },
  { path: "/dashboard/mapped", element: <Mapped /> },
  { path: "/dashboard/tried", element: <Tried /> },
  { path: "/dashboard/trialbal", element: <Trialbal /> },
  { path: "/dashboard/profile", element: <Profile /> },
  { path: "/dashboard/query", element: <Query /> },
  { path: "/dashboard/drag", element: <Drag /> },

  { path: "/dashboard/file-import", element: <FileImport /> },
  { path: "/dashboard/financial-position", element: <IncomeFs /> },
  { path: "/dashboard/NewFs", element: <NewFs /> },
  { path: "/dashboard/incomes", element: <Incomes /> },
  { path: "/dashboard/create-affliate", element: <CreateAffiliate /> },
  { path: "/dashboard/frmAuditReport", element: <AuditTrailReport /> },
  { path: "/dashboard/frmRecoSum", element: <RecSum /> },
  { path: "/dashboard/financial-statement", element: <Fs /> },
  { path: "/dashboard/map", element: <Maps /> },
  { path: "/dashboard/table", element: <Table /> },
  { path: "/dashboard/profit-loss", element: <Profit /> },
  // { path: "/dashboard/tb", element: <OnlyMap /> },
  { path: "/dashboard/AssistedMatching", element: <ParentMapped /> },
  { path: "/dashboard/AllMatchedItemReport", element: <AllMatch /> },
  { path: "/dashboard/frmOSReport", element: <FrmReport /> },
  { path: "/dashboard/profitandloss", element: <LossandProfit /> },
  { path: "/dashboard/financial-summary", element: <FinSummary /> },
  { path: "/dashboard/frmDownloadRpt", element: <FrmDownloadRpt /> },

  {
    path: "/dashboard/equity",
    element: (
      <TotalProvider>
        <Equity />
      </TotalProvider>
    ),
  },
  { path: "/dashboard/all-notes", element: <AllNotes /> },
  { path: "/dashboard/note-1", element: <Noteone /> },
  { path: "/dashboard/note-1-3", element: <NoteOneToThree /> },
  {
    path: "/dashboard/note-4-8b",
    element: (
      <TotalProvider>
        <NotefourtoEight />
      </TotalProvider>
    ),
  },
  { path: "/dashboard/note-8-9", element: <EighttoNine /> },
  { path: "/dashboard/frmNewAccount", element: <NewAccount /> },
  { path: "/dashboard/frmAccountDialog", element: <CreateAccount /> },
  { path: "/dashboard/all-account", element: <AllAccount /> },
  { path: "/dashboard/all-domain", element: <AllDomain /> },
  { path: "/dashboard/user-administration", element: <UserAdmin /> },
  { path: "/dashboard/user-assignment", element: <UserAssign /> },
  { path: "/dashboard/delete-account", element: <DeleteAct /> },
  { path: "/dashboard/account-title", element: <AccountTitle /> },
  { path: "/dashboard/create-domain", element: <CreateDomain /> },
  {
    path: "/dashboard/AtmMatching",
    element: <AtmMatching />,
  },

  // Ensure that ledgerData and statementData are passed as props in your route definition

  // { path: '/dashboard', element: <SwitchAccount /> },
  { path: "/dashboard/default", element: <Cover /> },
  { path: "/dashboard/unmatched-item", element: <UnmatchedItems /> },
  { path: "/dashboard/content", element: <Content /> },
  { path: "/dashboard/director-report", element: <DirectorsReport /> },
  { path: "/dashboard/certification", element: <Certification /> },
  {
    path: "/dashboard/Statement-of-Directors-Responsiblity",
    element: <Sodr />,
  },
  {
    path: "/dashboard/print-view",
    element: (
      <TotalProvider>
        <PrintView />
      </TotalProvider>
    ),
  },
  { path: "/dashboard/Corporate-Information", element: <CoopInfo /> },
  { path: "/dashboard/main", element: <Subtwo /> },
  {
    path: "/dashboard/cashflow",
    element: (
      <TotalProvider>
        <Cashflow />
      </TotalProvider>
    ),
  },
  { path: "/dashboard/value-added-statement", element: <Vas /> },
  { path: "/dashboard/note-3e-p", element: <NoteThree /> },
  { path: "/dashboard/note-8c-9e", element: <EighttoNine /> },
  {
    path: "/dashboard/note-10a",
    element: (
      <TotalProvider>
        <Ten />{" "}
      </TotalProvider>
    ),
  },
  { path: "/dashboard/note-11-15b", element: <EleventoFif /> },
  { path: "/dashboard/note-15c-18c", element: <Fifteen /> },
  { path: "/dashboard/note-19", element: <Nineteen /> },
  {
    path: "/dashboard/note-20-24",
    element: (
      <TotalProvider>
        <Twenty />
      </TotalProvider>
    ),
  },
  { path: "/dashboard/select", element: <SelectCategory /> },
  { path: "/dashboard/selects", element: <SelectCategorys /> },
  { path: "/dashboard/new", element: <New /> },
  { path: "/dashboard/import-data", element: <Import /> },
  { path: "/dashboard/one", element: <One /> },
  { path: "/dashboard/cashindex", element: <CashIndex /> },
  { path: "/dashboard/working", element: <Working /> },
  { path: "/dashboard/excelfile", element: <ExcelToJson /> },
  { path: "/dashboard/unmapped", element: <UnMappedData /> },
  { path: "/dashboard/statement", element: <Statement /> },
  { path: "/dashboard/reco-statement-summary", element: <StatementSummary /> },
  { path: "/dashboard/reco-ledger-summary", element: <LedgerSummary /> },
  { path: "/dashboard/total", element: <MappedTotals /> },
  { path: "/dashboard/charge", element: <Charge /> },
  {
    path: "/dashboard/subsubcategory",
    element: <SubcategoryPage />,
  },
  {
    path: "/dashboard/mapped-table",
    element: <MappedTable />,
  },
];

export default dashboardRoutes;
