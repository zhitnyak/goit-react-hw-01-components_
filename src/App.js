import User from './components/SocialProfile/User';
import users from './components/SocialProfile/user.json';
import StaticList from './components/Statics/StaticList';
import data from './components/Statics/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <User
        name={users.username}
        tag={users.tag}
        location={users.location}
        ava={users.avatar}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
      <StaticList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
