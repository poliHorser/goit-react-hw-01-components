// task1

import { Card } from "./components/Task1/Profile";
import user from './components/Data/user.json';
import './index.css';

// task 2
import { Statistics } from './components/Task2/Statistic';
import data from "./components/Data/data.json"

// task3
import {FriendList} from "./components/Task3/Friends"
import friends from "./components/Data/friends.json"



export const App = () => {
    return (
    <div>
      <Card
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
    </div>
  );
};
