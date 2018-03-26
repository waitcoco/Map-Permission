const Koa = require ('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

function mapPermissionName(input){
	var obj = input[0];
	var permissionMap = input[1];
	var permissionTypeMap = input[2];
	var attribute = Object.keys(obj);
	var typemap = Object.keys(permissionTypeMap);
	var map = Object.keys(permissionMap);
	for(var i = 0; i < attribute.length; i++){
		for(var j = 0; j < typemap.length; j++){
			if(attribute[i] === typemap[j]){
				obj[attribute[i]].name = permissionTypeMap[typemap[j]];
			}
		}
	}
	for(var i = 0; i < attribute.length; i++){
		for(var x = 0; x < obj[attribute[i]].PERMISSIONS.length; x++){
			for(var y = 0; y < map.length; y++){
				if(obj[attribute[i]].PERMISSIONS[x] === map[y]){
					obj[attribute[i]].PERMISSIONS[x] = {
						type:obj[attribute[i]].PERMISSIONS[x],
						name:permissionMap[map[y]]
					}
				}
			}
		}
	}
 	return obj;
}
const main = ctx =>{
	let json = ctx.request.body;
	ctx.response.body = mapPermissionName(json);
}
app.use(main);
app.listen(3000);