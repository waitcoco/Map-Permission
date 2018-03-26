# Map-Permission

作者：靳钊。

基于nodejs和koa的处理英文权限结构的web API。

## 测试
测试输入 —— 格式为数组，请求方法为POST。例：


    [
    {
        "DASHBOARD": {
          "PERMISSIONS": [
            "READ_INVENTORY_DASHBOARD",
            "READ_CONNECTION_DASHBOARD"
          ]
        },
        "USER": {
          "PERMISSIONS": [
            "MANAGE_DEPARTMENT",
            "MANAGE_USER"
          ]
        }
    },
    {
      "READ_INVENTORY_DASHBOARD": "商品统计查看",
      "READ_CONNECTION_DASHBOARD": "供应商统计查看",
      "MANAGE_DEPARTMENT": "部门管理",
      "MANAGE_USER": "员工管理"
    },
    {
        "DASHBOARD": "统计面板权限",
        "USER": "员工权限管理"
    }
    ]
    
测试输出：

    {
        "DASHBOARD": {
            "PERMISSIONS": [
                {
                    "type": "READ_INVENTORY_DASHBOARD",
                    "name": "商品统计查看"
                },
                {
                    "type": "READ_CONNECTION_DASHBOARD",
                    "name": "供应商统计查看"
                }
            ],
            "name": "统计面板权限"
        },
        "USER": {
            "PERMISSIONS": [
                {
                    "type": "MANAGE_DEPARTMENT",
                    "name": "部门管理"
                },
                {
                    "type": "MANAGE_USER",
                    "name": "员工管理"
                }
            ],
            "name": "员工权限管理"
        }
    }
