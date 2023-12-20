// task1

import { Card } from "./components/Task1/Profile";
import user from './/components/Data/user.json';
import './index.css';







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
    </div>
  );
};
