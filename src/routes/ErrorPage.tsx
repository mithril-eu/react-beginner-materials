import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <>
      <h1>Dogodila se greška</h1>
      <Link to="/">Vratite se na početnu stranicu</Link>
    </>
  );
}
