var docs=[];
fetch("https://drive.google.com/drive/folders/"+drive)
.then(response=>{
	return response.text();
})
.then(data=>{
	while(data.includes('KL4NAf')){
		docs.push(data.split('KL4NAf')[1].split('&gt;')[1].split('&lt;')[0]);
		data.replace('KL4NAf', '인식-완료');
	}
});
if(new URL(window.location.href).searchParams.get('id')){
fetch("https://docs.google.com/document/d/"+new URL(window.location.href).searchParams.get('id')+"/edit")
.then(response=>{
	return response.text();
})
.then(data=>{
	document.getElementById('contain').innerHTML=data.split('modelChunk = ')[1].split('"s":\"')[1].split('\"')[0]);
});
}
else{
fetch("https://docs.google.com/document/d/"+front+"/edit")
.then(response=>{
	return response.text();
})
.then(data=>{
	document.getElementById('contain').innerHTML=data.split('modelChunk = ')[1].split('"s":\"')[1].split('\"')[0]);
});
}
