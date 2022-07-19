import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import styled from 'styled-components'

function App() {
  return (
    <Div>
     <Sidebar/>
     <Dashboard/>
    </Div>
  );
}
const Div = styled.div`

`
export default App;
