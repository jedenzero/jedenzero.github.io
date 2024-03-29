var langs=[];
var dialect=null;
var limitX=0;
var graphX=0;
var dataS=[];
var dataA=[];
var match=[];
var part=[];
var detail=[];
var limit=[];
var explain=[];
var example=[];
if(document.getElementById('header')){
document.getElementById('header').className="header"
document.getElementById('header').style.display='flex';
document.getElementById('header').style.justifyContent='space-between';
fetch("/dictionary-header.html")
.then(response=>{
	return response.text()
})
.then(data=>{
	document.getElementById('header').innerHTML=data;
	document.getElementsByTagName('a')[0].href='/'+site;
	document.getElementsByTagName('a')[0].innerHTML=siteName;
});
}
//데이터 (다시) 불러오기
function resetLang(){
Promise.all([
fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+lang+'!A:F?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(data=>{
dataS=data.values;
})
.catch(error=>console.error('Error:',error)),

fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+lang+'!J:J?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(data=>{
part=data.values.map(row=>{
row.push(0);
return row;
});
})
.catch(error=>console.error('Error:',error)),

fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+lang+'!K:L?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(data=>{
detail=data.values.map(row=>{
if(row[1].includes('!')){
	row[1]=row[1].replace('!','');
	dialect=row[1];
	row.push(0);
}
else{
	row.push(1);
}
return row;
});
})
.catch(error=>console.error('Error:',error)),
fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/code!A:F?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(data=>{
langs=data.values;
})
.catch(error=>console.error('Error:',error)),

fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+lang+'!G:G?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(data=>{
explain=data.values;
})
.catch(error=>console.error('Error:',error)),

fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+lang+'!H:I?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(data=>{
example=data.values;
})
.catch(error=>console.error('Error:',error))
]).then(result=>{
setting();
limitSetting();
explain=explain.concat(new Array(dataS.length-explain.length).fill([]));
//셀렉트 박스 생성
if(document.getElementById('select')){
var selectbox=document.createElement('select');
var selectI='';
selectbox.onchange=function(){
	window.location.href='./?lang='+this.value;
};
selectbox.style.width='100px';
selectbox.style.marginBottom='10px';
selectbox.style.border='none';
selectbox.style.outline='none';
selectI+='<option disabled="" selected="">'+langs.find(row=>row[0]===lang)[1]+'</option>';
langs.forEach(row=>{
	if(row[0]!=lang){
	selectI+='<option value=\"'+row[0]+'\">'+row[1]+'</option>';
	}
});
selectbox.innerHTML=selectI;
document.getElementById('select').appendChild(selectbox);
}
//인사
document.getElementById('greet').innerHTML=langs.find(row=>row[0]===lang)[2];
//단어수 표시
document.getElementById('total_amount').innerHTML=langs.find(row=>row[0]===lang)[1]+' 사전에 오신 것을 환영합니다. 현재 단어수는 총 '+dataS.length+'개입니다.';
for(let row of dataS){
if(row[5]){
for(let el of row[5].split(', ')){
if(el.includes('=')){
var imsi='';
fetch('https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+el.split('=')[1]+'!A:F?key=AIzaSyATLeHQh6kM0LWRJjLg8CmzoSdnntFrmFk')
.then(response=>response.json())
.then(dataout=>{
imsi=dataout.values.find(row2=>row2[4]===el.split('=')[0]);
imsi[4]=el;
dataA.push(imsi);
})
.catch(error=>console.error('Error:',error))
}
}
}
}
})
}
//품사 및 세부 범위제한 부분
function setting(){
document.getElementById("floating").innerHTML='';
document.getElementById("floating").innerHTML+='<h2 style="text-align:center;">범위 제한</h2><h3>품사</h3>';
part.forEach(row=>{
var className=row[1]===0 ? 'limit' : 'timil';
document.getElementById("floating").innerHTML+='<div class="'+className+'" onclick="changeLimit(this)">'+row[0]+'</div>';
});
document.getElementById("floating").innerHTML+='<h3>세부 분류</h3>';
detail.forEach(row=>{
var className=row[2]===0 ? 'limit' : 'timil';
document.getElementById("floating").innerHTML+='<div class="'+className+'" onclick="changeLimit(this)">'+row[0]+'</div>';
});
document.getElementById("floating").innerHTML+='<div style="text-align:center;margin-top:10px;"><i class="fi fi-br-cross" onclick="visible()"></i></div>';
}

//범위 제한 설정
function limitSetting(){
limit=[];
part.filter(row=>row[1]===1).forEach(row=>{
   limit.push(row[0]);
});
detail.filter(row=>row[2]===1).forEach(row=>{
   limit.push(row[1]);
});
}

//검색
function search(){
var input=document.getElementById('search').value;
match=dataS.filter(row=>row[0].includes(input.toLowerCase())||row[2].includes(input));
match=match.filter(row=>!limit.includes(row[1].split(', ')[0])&&!limit.includes(row[3]));
document.getElementById('search_amount').innerHTML='검색 결과 : '+match.length+'개';

var matchE=match.filter(row=>row[0]===input||row[2].split(', ').includes(input)); //match equal or exact
var matchS=match.filter(row=>!matchE.includes(row)&&(row[0].startsWith(input)||row[2].split(', ').find(el=>el.startsWith(input)))); //match start
var matchO=match.filter(row=>!matchE.includes(row)&&!matchS.includes(row)); //match other

document.getElementById('output').innerHTML='';
dataI=[];

matchE.forEach(row=>{addBox(row)});
matchS.forEach(row=>{addBox(row)});
matchO.forEach(row=>{addBox(row)});
}

async function addBox(row){
var div=document.createElement('div');
var divI=''; //div 임시
div.className='word';
divI+='<sup class="id">'+row[4]+'</sup>'; //id 추가
divI += '<h2 style="display:inline-block;margin-bottom:0;" onclick="event.stopPropagation();individualMore(this.getAttribute(\'data-info\'));" data-info=\'' + JSON.stringify(row) + '\'>' + row[0] + '</h2>'; //단어 추가
var i=0;
divI+='<div>'
if(row[5]){
for(let el of row[5].split(', ')){
//더하기 추가
if(i!=0){
divI+='<p style="display:inline-block;margin:0;"> + </p>';
}
//외래어
if(el.includes('=')){
var origin=dataA.find(row2=>row2[4]===el);
divI+='<sup><small>'+el.split('=')[0]+'</small></sup>'+'<p style="display:inline-block;margin:0;">'+origin[0]+'('+langs.find(row=>row[0]===el.split('=')[1])[1]+')'+'</p>';
}
//외래어 아님
else{
var origin=dataS.find(row2=>row2[4]===el);
divI+='<sup><small>'+el+'</small></sup>'+'<p style="display:inline-block;margin:0;" onclick="document.getElementById(\'search\').value=\''+origin[0]+'\';search();\">'+origin[0]+'</p>';
}
i+=1;
}
}
divI+='</div>'
//뜻 추가
divI+='<p style="margin-top:0;">';
//세부 분류 추가
if(row[3]!=dialect){
divI+='['+detail.find(row2=>row2[1]===row[3])[0]+'] ';
}
divI+=row[2]+'</p>';
div.innerHTML=divI;
document.getElementById('output').appendChild(div);
}
//범위 제한 부분 가리기/보이기
function visible(){
if(limitX===0){
document.getElementById('floating').style.visibility = 'visible';
document.getElementById('gnitaolf').style.visibility = 'hidden';
}
else{
document.getElementById('floating').style.visibility = 'hidden';
document.getElementById('gnitaolf').style.visibility = 'visible';
}
limitX=1-limitX;
}
function changeLimit(element){
var obj=element.textContent;
if(part.map(row=>{return row[0];}).includes(obj)){
part.find(row=>row[0]===obj)[1]=1-part.find(row=>row[0]===obj)[1];
}
else{
detail.find(row=>row[0]===obj)[2]=1-detail.find(row=>row[0]===obj)[2];
}
limitSetting();
setting();
search();
}
function more(){
window.removeEventListener('click',modalClick);
window.addEventListener('click',modalClick);
var modal=document.getElementById('modal');
var div=document.createElement('div');
var divI=''; //div 임시
var values={};
modal.innerHTML='';
limitX=1;
visible();
divI+='<div style="text-align:right;padding-top:20px;"><i class="fi fi-br-cross" onclick="document.getElementById(\'modal\').style.visibility=\'hidden\';" style="margin-right:20px;"></i></div>'
dataS.forEach(row=>{
	if(dataS.findIndex(row2=>row2===row)===0){
		values['가장 긴 단어']=row[0];
		values['가장 짧은 단어']=row[0];
	}
	if(row[0].length>values['가장 긴 단어'].length){
		values['가장 긴 단어']=row[0];
	}
	if(row[0].length<values['가장 짧은 단어'].length){
		values['가장 짧은 단어']=row[0];
	}
});
divI+='<table style="margin:0 auto;">'
Object.entries(values).forEach(row=>{
	divI+='<tr><td style="padding:20px;padding-top:10px;padding-bottom:10px;"><b>'+row[0]+'</b></td><td style="padding:20px;padding-top:10px;padding-bottom:10px;">'+row[1]+'</td></tr>';
});
divI+='</table>'
div.innerHTML=divI;
modal.appendChild(div);
modal.style.visibility='visible';
}
function individualMore(rowI){
window.removeEventListener('click',modalClick);
window.addEventListener('click',modalClick);
var row=JSON.parse(rowI);
var modal=document.getElementById('modal');
var div=document.createElement('div');
var divI=''; //div 임시
var values={};
modal.innerHTML='';
limitX=1;
visible();
divI+='<div style="text-align:right;padding-top:20px;"><i class="fi fi-br-cross" onclick="document.getElementById(\'modal\').style.visibility=\'hidden\';" style="margin-right:20px;"></i></div>'
divI+='<div style="text-align:center;">'+'<sup>'+row[4]+'</sup>'+'<h3 style="display:inline-block;">'+row[0]+'</h3>'+'</div>';
divI+='<table style="margin:0 auto;"><tr><td style="padding:20px;padding-top:10px;padding-bottom:10px;"><b>품사</b></td><td style="padding:20px;padding-top:10px;padding-bottom:10px;">'+row[1].split(', ')[0]+'</td></tr>';
if(row[1].includes(', ')){
	row[1].split(', ').slice(1).forEach(el=>{
		divI+='<tr><td style="padding:20px;padding-top:10px;padding-bottom:10px;"><b>'+el.split(':')[0]+'</b></td><td style="padding:20px;padding-top:10px;padding-bottom:10px;">'+el.split(':')[1]+'</td></tr>';
	});
}
divI+='</table>';
if(explain[dataS.findIndex(row2=>row2[4]===row[4])][0]){
	divI+='<p style="padding-left:20px;">'+explain[dataS.findIndex(row2=>row2[4]===row[4])][0]+'</p>';
}
if(example){
example.forEach(row2=>{
	var ids=row2[1].split(', ');
	if(ids.includes(row[4])){
		var words=row2[0].split('/')[0].split((/=| /));
		var delimits=[];
		divI+='<div style="margin-left:20px;margin-bottom:10px;border-left:2px solid #1D2F52;padding-left:10px;">';
		row2[0].split('/')[0].split('').forEach(letter=>{
			if(letter===' '||letter==='='){
				delimits.push(letter);
			}
		});
		for(let i=0;i<words.length;i++){
			if(ids[i]===row[4]){
				divI+='<b>'+words[i]+'</b>';
			}
			else{
				divI+=words[i];
			}
			if(delimits.length-1>=i&&delimits[i]===' '){
				divI+=delimits[i];
			}
		}
		divI+='<br>'+row2[0].split('/')[1];
		divI+='</div>';
	}
});
}
div.innerHTML=divI;
modal.appendChild(div);
modal.style.visibility='visible';
}
function modalClick(event){
	if(!document.getElementById('modal').contains(event.target)){
		document.getElementById('modal').style.visibility='hidden';
		window.removeEventListener('click',modalClick);
	}
}
function changeLang(){
	lang=new URL(window.location.href).searchParams.get('lang');
	resetLang();
}
