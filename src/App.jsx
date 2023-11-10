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
import { AllUsers } from './components/portalSettings/users';
import { AddUsers } from './components/portalSettings/AddUsers';
import { Register } from './pages/register';

function App() {
  return (
    <>
       <Router>
          <Routes>
            <Route exact path="/login" element={ <SignIn/>}/>
             <Route exact path="/register" element={ <Register/>}/>
            <Route exact path="/reset" element={ <Reset/>}/>
            <Route exact path="/" element={ <DashbaordMainView/>}/>
            <Route exact path="/personalInfo" element={ <PersonalInfo/>}/>
            <Route exact path="/businessInfo" element={ <BusinessInfo/>}/>
            <Route exact path="/docUpload" element={ <DocUpload/>}/>
            <Route exact path="/userDetails" element={ <UserDetails/>}/>
            <Route exact path="/loginDetails" element={ <LoginDetails/>}/>
            <Route exact path="/viewAgent" element={ <ViewAgent/>}/>
            <Route exact path="/view_acc_manager" element={ <ViewAccountMangers/>}/>
            <Route exact path="/transact-card" element={ <CardTransactionHistory/>}/>
            <Route exact path="/transact-admin" element={ <AdminTransactionHistory/>}/>
            <Route exact path="/transact-bet" element={ <BetTransactionHistory/>}/>
            <Route exact path="/transact-vas" element={ <VasTransactionHistory/>}/>
            <Route exact path="/transact-refund" element={ <RefundTransactionHistory/>}/>
            <Route exact path="/all_terminals" element={ <AllTerminal/>}/>
            <Route exact path="/add_terminal" element={ <AddTerminalInventory/>}/>
            <Route exact path="/all_users" element={ <AllUsers/>}/>
            <Route exact path="/add_users" element={ <AddUsers/>}/>
            <Route exact path="/report-transaction_summary" element={ <CurrentMonthCharges/>}/>
            <Route exact path="/report-system_monitor" element={ <SystemMonitor/>}/>
            <Route exact path="/report-ticket" element={ <Tickets/>}/>
            <Route exact path="/report-performance_count" element={ <PerformanceReport/>}/>
            <Route exact path="/report-terminal_count" element={ <TerminalReport/>}/>
            <Route exact path="/report-dispute_count" element={ <DisputeCount/>}/>
            <Route exact path="/report-discount_count" element={ <DisputeCount/>}/>
            <Route exact path="/report-Charge_Back_count" element={ <ChargeBackCount/>}/>
            <Route exact path="/report-agent_count" element={ <AgentStateCount/>}/>
            {/* <Route exact path="/report-wallet_map" element={ <Wallet/>}/> */}
            <Route exact path="/report-revenue_wallet" element={ <RevenueWalletHistory/>}/>
            <Route exact path="/report-main_wallet" element={ <MainWalletHistory/>}/>
            <Route exact path="/report-overview" element={ <Overview/>}/>
            {/* <Route exact path="/viewAggregators" element={ <ViewAggregators/>}/> */}
          </Routes>
       </Router>
    </>
  )
}

export default App
