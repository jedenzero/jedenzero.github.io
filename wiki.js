var docs=[];
var doc=front;
var imsi=document.createElement('div');
if(new URL(window.location.href).searchParams.get('doc')){
doc=new URL(window.location.href).searchParams.get('doc');
}
//문서 목록 불러오기
fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/docs!A:C?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(data=>{
docs=data.values;
//문서 불러오기
fetch("https://docs.google.com/document/d/e/"+docs.find(row=>row[0]===doc)[1]+"/pub")
.then(response=>{
	return response.text();
})
.then(data=>{
	var i='';
	for(let el of data.split(/<p|<\/p>/).slice(2)){
		if(el.startsWith('</div>')){
			break;
		}
		if(el===''){
			continue;
		}
		i+='&lt;p&gt;'+el.substring(el.indexOf('>')+1)+'&lt;/p&gt;';
	};
	imsi.innerHTML=i;
    	document.getElementById('contain').innerHTML='<h2 style="text-align:center;">'+doc+'</h2>'+imsi.textContent;
	if(!new URL(window.location.href).searchParams.get('doc')||new URL(window.location.href).searchParams.get('doc')===front){
	document.getElementById('contain').innerHTML+='<h3>문서 목록</h3>';
	docs.forEach(row=>{
		document.getElementById('contain').innerHTML+='<p><a href=\"?doc='+row[0]+'\">'+row[0]+'</a></p>';
	});
	}
});
})
.catch(error=>console.error('Error:',error));
