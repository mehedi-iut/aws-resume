# aws-resume
My Own aws resume

## First steps
- Frontend folder contains the website.
- main.js contains visitor counter code.
update url in getVisitCount

## dynamo db
create **visitCount** table, we need below attribute
```json
"id": "1",
"count": 1
```

## lambda
```python
import json
import logging
import boto3

dynamodb = boto3.resource('dynamodb')
table_name = 'visitCount'
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    logging.info("Python HTTP trigger function processed a request")
    
    
    response = table.get_item(Key={
        'id': '1'
    })
    
    count = response['Item']['count']    
    count += 1
    print(count)
    response = table.put_item(Item={
        'id': '1', 
        'count': count
        
    })
    
    return count
```

* enable function url
* auth is **None**
* enable **CORS**

**configuration** --> **Permission** --> click `Role name` --> Add permissions ---> AmazonDynamoDBFullAccess

In cloud front ---> select distribution --> in general section, click **Edit** in **Settings**---> **Default root object** ---> add `index.html`