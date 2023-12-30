import os
import subprocess
from functools import lru_cache

import boto3

PWD = os.path.dirname(__file__)

os.environ["AWS_DEFAULT_REGION"] = "ap-northeast-1"

s3 = boto3.resource("s3")


def sync(path: str):
    data_path = os.path.join(PWD, "../", path)
    s3_path = os.path.join("s3://hassaku-travel-blog", path)
    subprocess.run(["aws", "s3", "sync", data_path, s3_path])


def generate_presigned_url(path: str):
    return s3.meta.client.generate_presigned_url(
        ClientMethod="get_object",
        Params={"Bucket": "hassaku-travel-blog", "Key": path},
        ExpiresIn=3600,
    )


@lru_cache
def get_file(path: str) -> bytes | None:
    print("called get_file")
    try:
        res = s3.meta.client.get_object(
            Bucket="hassaku-travel-blog",
            Key=path,
        )
    except s3.meta.client.exceptions.NoSuchKey:
        return None
    body = res["Body"]
    return body.read()


if __name__ == "__main__":
    print(generate_presigned_url("data/pages/is_intelligence_inherited/271528b3-c0f2-41e7-ad9a-30c60724ff9c.webp"))
    print(get_file("data/pages/test/data.json"))
