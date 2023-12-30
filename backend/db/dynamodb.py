import os

import boto3

os.environ["AWS_DEFAULT_REGION"] = "ap-northeast-1"

dynamodb = boto3.resource("dynamodb", endpoint_url="http://dynamodb:8000")
