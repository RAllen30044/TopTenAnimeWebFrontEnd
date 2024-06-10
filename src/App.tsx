import { About } from "./about/About";
import "./App.css";
import { Authentication } from "./authentication/authenticationPopUp";
import { UseAuthProvider } from "./authentication/authProvider";
import { UseComponentProvider } from "./ComponentProvider";
import { Contact } from "./Contact/Contact";

import { Header } from "./header/header";
import { TopTenList } from "./TopTenList/TopTenList";

function App() {
  const { viewAdminForm } = UseAuthProvider();
  const { activeComponent } = UseComponentProvider();
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
      {activeComponent === "homePage" ? <TopTenList /> : ""}
      {activeComponent === "contact" ? <Contact /> : ""}
      {activeComponent === "about" ? <About /> : ""}
    </>
  );
}

export default App;
