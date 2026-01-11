import Accordian from './components/accordian';
import Color from './components/color_generator';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/LoadMoreData';
import TreeView from './components/tree-view';
import QRCodeGenerator from './components/qr-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabContent from './components/custom-tabs/tab-content';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfile from './components/github-profile';
import SearchAutoComplete from './components/search_autocomplete';
import TicTacToe from './components/tic-tac-toe';
import './App.css';
import FeatureFlagGlobalState from './components/feature_flag/context';
import FeatureFlags from './components/feature_flag'
import UseFetchTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollTopAndBottom from './components/scroll-top-bottom';
function App() {
  
  
  return (
    
    <div className='App'>
      <ScrollTopAndBottom/>
    </div>

  )
}

export default App
