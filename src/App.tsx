import React from "react";
import { Provider } from "react-redux";

import { PageLayout } from "./modules/page/page-layout";
import { ProfleCardList } from "./modules/profile/card-list";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <PageLayout>
        <ProfleCardList pageSize={15} />
      </PageLayout>
    </Provider>
  );
}

export default App;
