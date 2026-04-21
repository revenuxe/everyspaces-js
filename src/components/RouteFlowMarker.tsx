"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const RouteFlowMarker = () => {
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const body = document.body;
    if (!body) return;

    let flow = "global";
    if (pathname.startsWith("/bangalore/services")) flow = "bangalore-services";
    else if (pathname.startsWith("/services")) flow = "global-services";
    else if (pathname.startsWith("/bangalore")) flow = "bangalore";
    else if (pathname.startsWith("/hyderabad")) flow = "hyderabad";

    body.setAttribute("data-route-flow", flow);
    return () => {
      body.removeAttribute("data-route-flow");
    };
  }, [pathname]);

  return null;
};

export default RouteFlowMarker;
