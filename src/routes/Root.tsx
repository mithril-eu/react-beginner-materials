import { Link, Outlet } from "react-router-dom";
import { useCounterStore } from "../stores/counter.store";

export function Root() {
  const { count } = useCounterStore();

  return (
    <>
      <h2>Count je: {count}</h2>
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
