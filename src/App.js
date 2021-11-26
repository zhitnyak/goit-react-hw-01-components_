import User from './components/social-profile/User';
import users from './components/social-profile/user.json';
import StaticList from './components/statics/StaticList';
import data from './components/statics/data.json';
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';
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
