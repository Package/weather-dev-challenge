import Head from "next/head";
import React, { FC } from "react";
import { LoadingComponent } from "./loading.component";

interface LayoutComponentProps {
  loading: boolean;
  title?: string;
}

export const LayoutComponent: FC<LayoutComponentProps> = ({
  title,
  loading,
  children
}) => {
  return (
    <>
      <Head>
        <title>Weather - {title ?? ""}</title>
      </Head>
      <div className="page-container">
        {loading && <LoadingComponent />}
        {!loading && children}
      </div>
    </>
  );
};
