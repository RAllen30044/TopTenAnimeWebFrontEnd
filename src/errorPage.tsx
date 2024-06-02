import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.name || error.message}</i>
        </p>
      </div>
    );
  } else {
    // Handle the case when error is not an instance of Error
    return <div>An unknown error occurred.</div>;
  }
}
