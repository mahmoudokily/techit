/** @format */

import * as cdk from "aws-cdk-lib";
import { Pipeline } from "aws-cdk-lib/aws-codepipeline";
import {
  CodePipeline,
  CodePipelineSource,
  ManualApprovalStep,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { MomuzioGroupFrontendStage } from "./momuzioGroup-stack";

export class MomuzioGroupFrontendPipelineStack extends cdk.Stack {
  private readonly pipeline: CodePipeline;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const codePipeline = new Pipeline(this, `Pipeline`, {
      pipelineName: `MomuzioGroup`,
      restartExecutionOnUpdate: true,
    });

    const synth = new ShellStep("Synth", {
      input: CodePipelineSource.connection("mahmoudokily/techit", "main", {
        connectionArn: `arn:aws:codestar-connections:us-east-1:992382414701:connection/1b86f436-92ec-4bce-ab09-9826591144f0`,
      }),
      installCommands: [
        "npm ci",
        "npm run build",
        "cd infrastructure",
        "npm ci",
      ],
      commands: ["npx cdk synth"],
      primaryOutputDirectory: "infrastructure/cdk.out",
    });

    this.pipeline = new CodePipeline(this, `CodePipeline`, {
      codePipeline,
      synth,
    });
    this.addStagingWave();
    // this.addProdWaves();
  }

  private addStagingWave() {
    const stagingWave = this.pipeline.addWave("Staging");
    stagingWave.addStage(
      new MomuzioGroupFrontendStage(this, `Momuzio_Group_${stagingWave.id}`, {
        env: {
          account: "992382414701",
          region: "us-east-1",
        },
      })
    );
  }
  // private addProdWaves() {
  //   const productionWave = this.pipeline.addWave("Production");
  //   productionWave.addPre(new ManualApprovalStep("Promote"));
  //   productionWave.addStage(
  //     new MomuzioGroupFrontendStage(
  //       this,
  //       `Momuzio_Group_${productionWave.id}`,
  //       {
  //         env: {
  //           account: "992382414701",
  //           region: "us-east-1",
  //         },
  //       }
  //     )
  //   );
  // }
}
