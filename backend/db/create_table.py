from dynamodb import dynamodb
from settings import TABLE_NAME

dynamodb.create_table(
    AttributeDefinitions=[
        {"AttributeName": "slug", "AttributeType": "S"},
    ],
    TableName=TABLE_NAME,
    KeySchema=[{"AttributeName": "slug", "KeyType": "HASH"}],
    ProvisionedThroughput={"ReadCapacityUnits": 5, "WriteCapacityUnits": 5},
)
