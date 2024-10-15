import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="text-center w-3/6 mx-auto h-[100vh] my-10 bg-warning flex flex-col justify-center">
      <h1 className="text-3xl font-extrabold py-2">Oops | Pages not found , Please try again!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
