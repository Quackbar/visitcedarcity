import React from "react";
import { RouteProps } from "react-router";

const SafeAreaWrapper: React.FC<RouteProps> = ({ children }) => {
  return <div className="safe-area-wrapper">{children}</div>;
};

export default React.memo(SafeAreaWrapper);
