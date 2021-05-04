import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>PAGE-1ページだよん</h1>
      <Link to="/page1/da">DA</Link>
      <br />
      <Link to="/page1/db">DB</Link>
    </div>
  );
};
