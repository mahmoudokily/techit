/** @format */

import {
  CfnOutput,
  Duration,
  RemovalPolicy,
  Stack,
  StackProps,
  Stage,
  StageProps,
} from "aws-cdk-lib";
import { Distribution, ViewerProtocolPolicy } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import { BlockPublicAccess } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import { join } from "path";

export class MomuzioGroupFrontendStage extends Stage {
  private PROJECT_NAME = "momuzio-group-frontend";
  constructor(scope: Construct, id: string, props: StageProps) {
    super(scope, id, props);
    new MomuzioGroupStack(this, "MomuzioGroupFrontendStack", {
      stackName: `${this.PROJECT_NAME}${"staging"}`,
      env: props.env,
    });
  }
}

export class MomuzioGroupStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create s3 bucket to store the website files
    const hostingBucket = new s3.Bucket(this, "SiteBucket", {
      bucketName: "momuzio-frontend-bucket",
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
    });
    // const zone = HostedZone.fromLookup(this, "HostedZone", {
    //   domainName: "momuzio.com",
    // });

    const distribution = new Distribution(this, "CloudfrontDistribution", {
      comment: `Momuzio group  staging`,
      defaultBehavior: {
        origin: new S3Origin(hostingBucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      // domainNames: ["momuzio.com"],
      defaultRootObject: "index.html",
      errorResponses: [403, 404, 405].map((httpStatus) => ({
        httpStatus,

        ttl: Duration.seconds(0),
        responseHttpStatus: 200,
        responsePagePath: "/index.html",
      })),
    });
    const deployment = new BucketDeployment(this, "DeployWithInvalidation", {
      sources: [
        Source.asset(join(__dirname, "..", "..", "build")),
        // Source.jsonData("config.json", {
        //   local: true,
        //   stage: "staging",
        // }),
      ],
      destinationBucket: hostingBucket,
      distribution,
      distributionPaths: ["/*"],
    });

    // new ARecord(this, "ARecord", {
    //   zone: zone,
    //   recordName: "momuzio.com",
    //   target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    // });

    new CfnOutput(this, "CloudFrontURL", {
      value: distribution.domainName,
      description: "The distribution URL",
      exportName: "CloudfrontURL",
    });

    new CfnOutput(this, "BucketName", {
      value: hostingBucket.bucketName,
      description: "The name of the S3 bucket",
      exportName: "BucketName",
    });
  }
}
