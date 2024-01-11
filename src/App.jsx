import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { SignIn } from './pages/login';
import { Reset } from './pages/reset';
import { Dashbase } from './pages/dashbase';
import { DashbaordMainView } from './components/global/dashboardMainView';
import { PersonalInfo } from './components/agents/personalInfo';
import { BusinessInfo } from './components/agents/businessInfo';
import { DocUpload } from './components/agents/documentUpload';
import { UserDetails } from './components/agents/createUserDetails';
import { LoginDetails } from './components/agents/createLoginDetails';
import { ViewAgent } from './components/agents/viewAgents';
import { ViewAccountMangers } from './components/agents/viewAccountmangers';
import { CardTransactionHistory } from './components/transactions/cardHistory';
import { AdminTransactionHistory } from './components/transactions/adminHistory';
import { BetTransactionHistory } from './components/transactions/betHistory';
import { VasTransactionHistory } from './components/transactions/vasHsitory';
import { RefundTransactionHistory } from './components/transactions/refundHistory';
import { AllTerminal } from './components/terminalInventory/AllTerminal';
import { AddTerminalInventory } from './components/terminalInventory/terminalInventory';
import { CurrentMonthCharges } from './components/report&Analytics/currentMonthCharges';
import { SystemMonitor } from './components/report&Analytics/systemMonitor';
import { Tickets } from './components/report&Analytics/tickets';
import { PerformanceReport } from './components/report&Analytics/performance';
import { TerminalReport } from './components/report&Analytics/termnalCount';
import { DisputeCount } from './components/report&Analytics/disputeCount';
import { ChargeBackCount } from './components/report&Analytics/chargeBackCount';
import { AgentStateCount } from './components/report&Analytics/agentStateCount';
import { RevenueWalletHistory } from './components/report&Analytics/revenueWalletHistory';
import { MainWalletHistory } from './components/report&Analytics/mainWalletHistory';
import { Overview } from './components/report&Analytics/overView';
import { AllRoles } from './components/portalSettings/roles';
import { AddRoles } from './components/portalSettings/AddRoles';
import { Auth_Personanl } from './pages/auth_personal';
import { Auth_Business } from './pages/auth_business';
import { Auth_Acc } from './pages/auth_acc';
import { Auth_Upload } from './pages/auth_upload';
import { Transaction_Map } from './components/report&Analytics/transactionMap';
import { Agent_Map } from './components/report&Analytics/agentMap';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import { AggregatorsDetails } from './components/agents/createAggregators';
import { ViewAggregators } from './components/agents/viewAggregators';
import { ProtectedRoute } from './components/global/protectedRoute';
import { TransactionHistory } from './components/transactions/transactHistory';
import { TicketsDetails } from './components/report&Analytics/ticketsDetails';
import { UpdateRoles } from './components/portalSettings/updateRole';
import { AssignRoles } from './components/portalSettings/assign_revoke_Roles';
import { AllPermissions } from './components/portalSettings/permissions';
import { Toaster } from 'react-hot-toast';
import { DisBursementForm } from './components/disbursement/form';


function App() {
  return (
    <>
    <Provider store={store}>
       <Router>
          <Routes>
            <Route exact path="/login" element={ <SignIn/>}/>
             <Route exact path="/register_one" element={ <Auth_Personanl/>}/>
             <Route exact path="/register_two" element={ <Auth_Business/>}/>
             <Route exact path="/register_three" element={ <Auth_Acc/>}/>
             <Route exact path="/register_four" element={ <Auth_Upload/>}/>
            <Route exact path="/reset" element={ <Reset/>}/>
            <Route
              element={
                  <ProtectedRoute/>
              }
          >
            <Route exact path="/" element={ <DashbaordMainView/>}/>
            <Route exact path="/personalInfo" element={ <PersonalInfo/>}/>
            <Route exact path="/businessInfo" element={ <BusinessInfo/>}/>
            <Route exact path="/docUpload" element={ <DocUpload/>}/>
            <Route exact path="/userDetails" element={ <UserDetails/>}/>
            <Route exact path="/loginDetails" element={ <LoginDetails/>}/>
            <Route exact path="/viewAgent" element={ <ViewAgent/>}/>
            <Route exact path="/create_aggregators" element={ <AggregatorsDetails/>}/>
            <Route exact path="/view_aggregators" element={ <ViewAggregators/>}/>
            <Route exact path="/view_acc_manager" element={ <ViewAccountMangers/>}/>
            <Route exact path="/transact-card" element={ <CardTransactionHistory/>}/>
            <Route exact path="/transact-admin" element={ <AdminTransactionHistory/>}/>
            <Route exact path="/transact-history" element={ <TransactionHistory/>}/>
            <Route exact path="/transact-bet" element={ <BetTransactionHistory/>}/>
            <Route exact path="/transact-vas" element={ <VasTransactionHistory/>}/>
            <Route exact path="/wallet_disbursement" element={ <DisBursementForm/>}/>
            <Route exact path="/transact-refund" element={ <RefundTransactionHistory/>}/>
            <Route exact path="/all_terminals" element={ <AllTerminal/>}/>
            <Route exact path="/add_terminal" element={ <AddTerminalInventory/>}/>
            <Route exact path="/all_roles" element={ <AllRoles/>}/>
            <Route exact path="/all_permissions" element={ <AllPermissions/>}/>
            <Route exact path="/add_roles" element={ <AddRoles/>}/>
            <Route exact path="/portal/:action/:id" element={ <AssignRoles/>}/>
            <Route exact path="/portal/update_roles/:id" element={ <UpdateRoles/>}/>
            <Route exact path="/report-transaction_summary" element={ <CurrentMonthCharges/>}/>
            <Route exact path="/report-system_monitor" element={ <SystemMonitor/>}/>
            <Route exact path="/report-ticket" element={ <Tickets/>}/>
            <Route exact path="/report-ticket_details/:status" element={ <TicketsDetails/>}/>
            <Route exact path="/report-performance_count" element={ <PerformanceReport/>}/>
            <Route exact path="/report-terminal_count" element={ <TerminalReport/>}/>
            <Route exact path="/report-dispute_count" element={ <DisputeCount/>}/>
            <Route exact path="/report-transaction_map" element={ <Transaction_Map/>}/>
            <Route exact path="/report-agent_map" element={ <Agent_Map/>}/>
            <Route exact path="/report-discount_count" element={ <DisputeCount/>}/>
            <Route exact path="/report-Charge_Back_count" element={ <ChargeBackCount/>}/>
            <Route exact path="/report-agent_count" element={ <AgentStateCount/>}/>
            {/* <Route exact path="/report-wallet_map" element={ <Wallet/>}/> */}
            <Route exact path="/report-revenue_wallet" element={ <RevenueWalletHistory/>}/>
            <Route exact path="/report-main_wallet" element={ <MainWalletHistory/>}/>
            <Route exact path="/report-overview" element={ <Overview/>}/>
            {/* <Route exact path="/viewAggregators" element={ <ViewAggregators/>}/> */}
            </Route>
          </Routes>
       </Router>
    </Provider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </>
  )
}

export default App
