import requests
import json

url = 'http://localhost:3001/api/product/create'

products = []
with open('products.json', 'r', encoding='utf-8') as products_json:
    products = json.loads(products_json.read())

for i in products:
    x = requests.post(url, files={'files': open('./photos/' + i['file'], 'rb')}, 
    data={
        'name': i['name'],
        'reference': i['reference'],
        'price': i['price'],
        'description': i['description']
    })
