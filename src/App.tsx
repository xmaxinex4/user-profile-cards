import React, { useState } from "react";

import { PageLayout } from "./modules/page/page-layout";
import { ProfleCardList } from "./modules/profile/card-list";

import { getMockProfiles } from "./mock/profile";

function App() {
  const [profiles, setProfiles] = useState(getMockProfiles(50));

  return (
    <PageLayout>
      <ProfleCardList profiles={profiles} pageSize={15} />
    </PageLayout>
  );
}

export default App;
