import React, { Suspense } from "react";
import Loader from "../../../components/ui/Loader/Loader";

const LazyWrapper = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default LazyWrapper;
