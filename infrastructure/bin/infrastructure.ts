#!/usr/bin/env node
/** @format */

import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { MomuzioGroupFrontendPipelineStack } from "../lib/momuzioGroup-pipeline-stack";

const app = new cdk.App();
new MomuzioGroupFrontendPipelineStack(
  app,
  "MomuzioGroupFrontendPipelineStack",
  {
    env: { account: "992382414701", region: "us-east-1" },
  }
);
