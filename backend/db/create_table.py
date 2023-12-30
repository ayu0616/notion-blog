from dynamodb import dynamodb
from settings import TABLE_NAME

if __name__ == "__main__":
    try:
        dynamodb.create_table(
            AttributeDefinitions=[
                {"AttributeName": "slug", "AttributeType": "S"},
            ],
            TableName=TABLE_NAME,
            KeySchema=[{"AttributeName": "slug", "KeyType": "HASH"}],
            ProvisionedThroughput={"ReadCapacityUnits": 5, "WriteCapacityUnits": 5},
        )
        print("Table created successfully")
    except dynamodb.meta.client.exceptions.ResourceInUseException:
        print("Table already exists")
