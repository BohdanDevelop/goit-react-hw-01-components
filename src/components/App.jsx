import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import Transactions from './Transactions';

import data from './data/user.json';
import statisticData from './data/data.json';
import friends from './data/friends.json';
import transData from './data/transactions.json';

export const App = () => {
  return (
    <div  >
<Profile
username = {data.username}
image = {data.avatar}
tag = {data.tag}
location = {data.location}
followers = {data.stats.followers}
views = {data.stats.views}
likes = {data.stats.likes}

 />
 <Statistics  stats ={statisticData}/>
 <Statistics  
 stats ={statisticData}
 title = "Upload"
 />

 <FriendsList friends={friends}/>

 <Transactions items = {transData} />
    </div>
  );
};
