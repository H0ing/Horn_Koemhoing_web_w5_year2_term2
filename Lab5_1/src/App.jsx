import { useState } from "react";

import "./App.css";
const AuthorInfo = ({ user }) => (
  <div>
    <p>
      Name : {user.name} Role: {user.role}
    </p>
  </div>
);
const PostHeader = ({ user }) => <AuthorInfo user={user} />;
const PostItem = ({ user }) => <PostHeader user={user} />;
const FeedList = ({ user }) => <PostItem user={user} />;
function App() {
  const [user] = useState({ name: "Ronan", role: "Admin" });
  return <FeedList user={user} />;
}

export default App;
