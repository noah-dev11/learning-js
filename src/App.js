/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { _footerComponents } from './components/footerComponents';
import { _mySection } from './components/mySection';
import { _headerComponent } from './components/headerComponent';
import { _mySkillsComponents } from './components/mySkillsComponents';
import { _services } from './components/services';
function App() {
  return (
    
    <div className="App">
      <_headerComponent/>
      <_mySection/>
      <_mySkillsComponents/>
      <_services/>
      <_footerComponents />
    </div>
  );
}

export default App;