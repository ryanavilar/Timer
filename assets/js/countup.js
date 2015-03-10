
	var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

	function countup(yr,m,d){
		var today=new Date()
		var todayy=today.getYear()
		if (todayy < 1000)
			todayy+=1900
		var todaym=today.getMonth()
		var todayd=today.getDate()
		var todaystring=montharray[todaym]+" "+todayd+", "+todayy
		var paststring=montharray[m-1]+" "+d+", "+yr
		var weeks = (Math.round(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1/7))
		var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1-(weeks*2))
		document.write("<div id='daysregister'> "+
			"<a class='days' href='http://tiny.cc/cekTPG'>" +difference+ "</a>"+"<br>"+ 
			"It\'s been " +difference+ " business days since we registered to TPG </div>")
		document.write("<title> TPG - "+difference+" business days </title>")
	}
	
	//enter the count up date using the format year/month/day
	countup(2015,02,23)
