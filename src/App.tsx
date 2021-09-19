import React from "react";
import { Provider } from "react-redux";

import { PageLayout } from "./modules/page/page-layout";
import { ProfileCardList } from "./modules/profile/card/card-list";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <PageLayout>
        <ProfileCardList pageSize={15} />
      </PageLayout>
    </Provider>
  );
}

export default App;
