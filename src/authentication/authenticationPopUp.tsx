import toast from "react-hot-toast";
import { authorization } from "../apiFunctions";
import { UseAuthProvider } from "./authProvider";

export const Authentication = () => {
  const {
    username,
    setUsername,
    password,
    setToken,
    setPassword,

    viewAdminForm,
    setViewAdminForm,
  } = UseAuthProvider();
  return (
    <form
      action="POST"
      id="authForm"
      className={`${viewAdminForm === "no" ? "hidden" : ""} `}
      onSubmit={async (e) => {
        e.preventDefault();
        const authorize = await authorization(username.toLowerCase(), password);
        if (!authorize) {
          toast.error("Invalid username or password");

          return;
        }

        setToken(authorize.token);
        localStorage.setItem("token", authorize.token);
        toast.success("Successfully authenticated");
        setUsername("");
        setPassword("");
        setViewAdminForm("no");
      }}
    >
      <h3 id="authHeaderText">Admin Authentication</h3>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="buttonContainer">
        <button type="submit">Authenticate</button>
      </div>
    </form>
  );
};
