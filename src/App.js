// import User from './components/social-profile/User';
// import users from './components/social-profile/user.json';

import StaticList from './components/statics/StaticList';
import data from './components/statics/data.json';

import './App.css';
const App = () => {
  return (
    <div>
      <StaticList title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
