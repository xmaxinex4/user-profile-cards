import React, { useState } from "react";

import { PageLayout } from "./modules/page/page-layout";
import { ProfleCardList } from "./modules/profile/card-list";

import { getMockProfiles } from "./mock/profile";

function App() {
  const [profiles, setProfiles] = useState(getMockProfiles(10));

  return (
    <PageLayout>
      <ProfleCardList profiles={profiles} />
    </PageLayout>
  );
}

export default App;
