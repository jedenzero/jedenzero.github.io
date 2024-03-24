var docs=[];
var doc=front;
if(new URL(window.location.href).searchParams.get('id')){
doc=new URL(window.location.href).searchParams.get('id');
}
//문서 목록 불러오기
fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/docs!A:C?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(data=>{
docs=data.values;
document.getElementById('contain').innerHTML='<h2 style="text-align:center;">'+docs.find(row=>row[1]===doc)[0];
//문서 불러오기
fetch("https://docs.google.com/document/d/"+doc+"/edit")
.then(response=>{
	return response.text();
})
.then(data=>{
	document.getElementById('contain').innerHTML+=data.split('modelChunk = ')[1].split('"s":\"')[1].split('\"')[0];
	if(!new URL(window.location.href).searchParams.get('id')||new URL(window.location.href).searchParams.get('id')===front){
	document.getElementById('contain').innerHTML+='<h3>문서 목록</h3>';
	docs.forEach(row=>{
		document.getElementById('contain').innerHTML+='<a href=\"?id='+row[1]+'\">'+row[0]+'</a>';
	});
	}
});
})
.catch(error=>console.error('Error:',error));
