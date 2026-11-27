import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { routes, notFound, site } from "./routes";

export { routes, notFound, site };

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
