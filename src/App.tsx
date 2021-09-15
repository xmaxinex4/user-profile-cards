import React, { useState } from "react";
import { getMockProfiles } from "./mock/profile";

import { ProfleCardList } from "./modules/profile/card-list";

function App() {
  const [profiles, setProfiles] = useState(getMockProfiles(10));

  return (
    <ProfleCardList profiles={profiles} />
  );
}

export default App;
