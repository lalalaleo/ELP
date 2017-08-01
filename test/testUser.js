exports.login = function(userid,pwd,fn){
	if(userid=="user0"&&pwd=="user0"){
		fn({code:200,result:'ok',data:{
			"SessionId": "9507B344994C176EE0582309C4C58C0E",
			"Office":{"objectId":"e5c6e4875d44e914015d44e94633000b","creatTime":1500099724000,"updateTime":null,"delTime":null,"officeNum":"e5c6e4875d44e914015d44e944500002","logId":"user0","pwd":null,"userType":"user","userName":"林罡","userPicUrl":null,"userPower":3},
			"User":{"objectId":"e5c6e4875d44e914015d44e94633000b","creatTime":1500099724000,"updateTime":null,"delTime":null,"officeNum":"e5c6e4875d44e914015d44e944500002","logId":"user0","pwd":null,"userType":"user","userName":"林罡","userPicUrl":null,"userPower":3}
		}});
	}
	else
		fn({code:200,result:'pwd error',errorInfo:'用户名或密码错误'});
}