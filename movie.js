/**
 * <!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<script src="http://code.jquery.com/jquery-1.11.1.min.js">

	
	var  url ="http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=a7289d298189029a00957feb5bb569ee&targetDt=20120101"
	$(function(){
		$.ajax({
			type:"GET",
			url: url,
			dataType : "json",
			success :jsonParser
		});
		function jsonParser(data){
			var showList=data.boxOfficeResult.dailyBoxOfficeList;
			for(var i=0;i<showList.length;i++){
				var item=showList[i];
				document.write("<h2>"+item.audiAcc+"</h2>");
			
			}
		}
	});
			
		
</head>
<body>
	
		<div id="movie-box"></div>
</body>
</html>
 */