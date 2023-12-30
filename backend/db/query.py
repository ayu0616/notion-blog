from dynamodb import dynamodb
from settings import TABLE_NAME

table = dynamodb.Table(TABLE_NAME)


def query(slug: str):
    response = table.get_item(Key={"slug": slug})
    if "Item" not in response:
        return None
    return response["Item"]


if __name__ == "__main__":
    print(query("test"))
