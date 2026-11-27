import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { routes, notFound } from "./routes";

const App = () => {
  const { pathname } = useLocation();

  // Keep the title right when navigating client-side.
  useEffect(() => {
    const match = routes.find((r) => r.path === pathname.replace(/\/$/, "") || (r.path === "/" && pathname === "/"));
    document.title = (match ?? notFound).title;
  }, [pathname]);

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={notFound.element} />
    </Routes>
  );
};

export default App;
