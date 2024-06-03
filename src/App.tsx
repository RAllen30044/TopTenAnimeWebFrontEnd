import "./App.css";
import { Authentication } from "./authentication/authenticationPopUp";
import { UseAuthProvider } from "./authentication/authProvider";

import { Header } from "./header/header";
import { TopTenList } from "./TopTenList/TopTenList";

function App() {
  const { viewAdminForm } = UseAuthProvider();
  return (
    <>
      <Header />
      <h1 id="headerText">Your Anime Top Ten list</h1>
      {viewAdminForm === "yes" ? (
        <div id={`authMobileView`}>
          <Authentication />
        </div>
      ) : (
        ""
      )}
      <TopTenList />
    </>
  );
}

export default App;
