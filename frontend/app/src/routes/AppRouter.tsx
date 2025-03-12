import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const pages = import.meta.glob("../pages/**/index.tsx", { eager: true });

// 自動的にパスを生成
const routes = Object.entries(pages).map(([path, module]) => {
  const routePath = path
    .replace("../pages", "")
    .replace("/index.tsx", "")
    .replace(/\/index$/, "") || "/";
  
  return {
    path: routePath,
    component: module.default,
  };
});

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
