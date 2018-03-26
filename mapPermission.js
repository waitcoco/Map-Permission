const Koa = require ('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const route = require('koa-route');

app.use(bodyParser());
//处理权限结构
function mapPermissionName(input){
	var obj = input[0];
	var permissionMap = input[1];
	var permissionTypeMap = input[2];
	var attribute = Object.keys(obj);
	var typemap = Object.keys(permissionTypeMap);
	var map = Object.keys(permissionMap);
	//权限类别映射
	for(var i = 0; i < attribute.length; i++){
		for(var j = 0; j < typemap.length; j++){
			if(attribute[i] === typemap[j]){
				obj[attribute[i]].name = permissionTypeMap[typemap[j]];
			}
		}
	}
	//权限名称映射
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
//获取请求信息将输出结果返回到响应信息
const main = ctx =>{
	//原生路由
	if(ctx.request.path === '/permission'){
		let json = ctx.request.body;
		ctx.response.body = mapPermissionName(json);
	}
}
app.use(main);
//端口监听
app.listen(3000);