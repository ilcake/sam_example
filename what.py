from sammy import SAM, Function, API, SimpleTable

f = Function('testpublish', Handler='s3imageresize.handler',
             Runtime='python3.6',
             CodeUri='s3://your-bucket/photoresizer.zip')
ddb = SimpleTable('maintable', PrimaryKey={'Name':'_id', 'Type':'String'})

s = SAM(render_type='yaml')

s.add_resource(f)
s.add_resource(ddb)

print(s.to_yaml())
