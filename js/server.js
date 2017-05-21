var http=require("http"),
    fs=require("fs"),
    url=require('url');//-->url中提供了一个方法用来解析url。url.parse()。
    
    
//1.HTTP
//--》http.createServer创建一个服务。
//server.listen(80);监听一个80端口
var server=http.createSever(function(request,response){
	//这里的回调函数只有在发送请求的时候才触发。
	console.log();
	
	
	var urlObj=url.parse(request.url,true),
	    pathname=urlObj.patthname,
	    qurey=urlObj.query;
	    
	if(pathname==="/1.html"){
		var con=fs.readFileSync("./1.html","utf-8");
		
		//response.write()向客户端返回数据
		//response.end()告知服务器结束响应。
		response.write(con);
		response.end();
		
		
		
	}
	    
	    
	//同步读取指定文件中的内容。
	
})
//监听80端口，回调函数在端口监听成功后执行。
server.listen(80,function(){
	console.log("server is create listening on 80 port")
})

//var url=require("url");
//var str="http://192.168.0.1:80/index.html?name=thumb&age=7";
//console.log(url.parse(str,true));//添加true返回的query数据是键值对。

