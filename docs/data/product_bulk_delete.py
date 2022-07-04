import requests
import json

url_get = 'http://localhost:3001/api/product'
url_delete = 'http://localhost:3001/api/product/delete/'
x = requests.get(url_get)

json_data = json.loads(x.text)
for i in json_data:
    requests.delete(url_delete + str(i['id']))
