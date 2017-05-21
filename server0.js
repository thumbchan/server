var http=require("http"),
    fs=require("fs"),
    url=require("url");
//创建一个服务
var server1=http.createServer(function(req,res){
	//解析客户端请求地址中的文件目录名称以及传递给当前服务器的数据内容。
	var urlObj=url.parse(req.url,true),
	pathname=urlObj['pathname'],
	query=urlObj['query'];
	
	
	//如果客户端请求资源不存在，服务会中止，添加try chatch捕获错误信息，服务才不会报错，可继续执行.
	
	//处理静态信息的请求====>>>>>>>>>前端路由
	var reg=/\.(HTML|JS|CSS|JSON|TXT|ICO|JPG|GIF|PNG|BMP)/i;
	if(reg.test(pathname)){
		//获取请求文件的后缀名
		var suffix=reg.exec(pathname)[1].toUpperCase();
		//根据请求文件的后缀名获取到当前文件的MIME类型
		var suffixMIME="text/plain";
		switch (suffix){
			case "HTML":
			suffixMIME="text/html";
			break;
			
			case "css":
			suffixMIME="text/css";
			break;
			
			case "js":
			suffixMIME="";
			break;
			...
		}
		
		try{
			var conFile=fs.readFileSync("."+pathname,"utf-8");
			res.writeHead(200,{'cont-type':'text/html;charset=utf-8;'})
			res.end(conFile);
		}chatch(e){
			res.writeHead(404,{'cont-type':'text/plain;charset=utf-8;'});
			res.end("the file you requst is not found");
		}	
	}
	
	
	
	
	
	try{
		var con=fs.readFileSync("."+path,"utf-8")
	    res.end(con);
	}catch(e){
		res.end("the file you requst is not find")
	}
	
	
//	if(pathname==="/index.html"){
//		var con=fs.readFlieSync("./index.html","utf-8");//同步读取数据
//		res.write(con);
//		return;
////		res.end();
//	}
//	if(pathname==="/css/index.css"){
//		con=fs.readeFileSync("./css/index.css","utf-8");
//		res.write(con);
//		return;
//	}
//	if(pathname==="/js/index.js"){
//		con.readFileSync("./js/index.js","utf-8");
//		res.write(con);
//		res.end();
//	}
	
	
})

//为当前的服务配置端口
server1.listen(80,function(){
	console.log("server is success, listening on 80 port")
})
