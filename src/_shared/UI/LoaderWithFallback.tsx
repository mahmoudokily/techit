import React, { PropsWithChildren } from "react";
import { Center } from "./Center";
import { LoadingLayer } from "./LoadingLayer";

type LoaderWithFallbackProps = {
  loading?: boolean;
  hasError: boolean;
  errorMsg: React.ReactNode;
  LoadingMsg?: React.ReactNode;
};

export const LoaderWithFallback: React.FC<
  PropsWithChildren<LoaderWithFallbackProps>
> = ({
  children,
  loading,
  hasError,
  errorMsg = "Errore",
  LoadingMsg = "Loading",
}) => {
    if (loading) return <LoadingLayer>{LoadingMsg}</LoadingLayer>;
    if (hasError && !loading) return <Center>{errorMsg}</Center>;

    return <>{children}</>;
  };
