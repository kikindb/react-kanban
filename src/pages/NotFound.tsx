import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Kanban App - Not Found</title>
      </Helmet>
      <div>
        <h1>404! Page Not Found</h1>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </>
  );
}
