#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MomuzioGroupStack } from "../lib/infrastructure-stack";

const app = new cdk.App();
new MomuzioGroupStack(app, "MomuzioGroupStack", {
  env: { account: "929633622722", region: "us-east-1" },
});
