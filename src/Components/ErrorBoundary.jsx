import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RouteDebug() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("Navigated to", pathname);
  }, [pathname]);
  return null;
}
