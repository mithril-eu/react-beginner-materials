import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <h4>Ja sam stalno isti</h4>

      <nav style={{ display: "flex", gap: "12px" }}>
        <Link to="/todos">TODOs</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </>
  );
}
