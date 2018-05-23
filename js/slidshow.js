var r=0;
var oDivNode_lgs = document.getElementById("lgs");
var oANodes = document.getElementsByTagName("a");
var oimgNode_tabs = document.getElementsByName("btn"); 

function right(){
	r++;
	if(r>3){
		r=0
	}
	for(var j=0;j<4;j++){
		if(j==r){
			oANodes[r].style.display="block";
			oimgNode_tabs[r].src="img/bannerBtnOn.jpg"
			continue;
		}
		oANodes[j].style.display="none";
		oimgNode_tabs[j].src="img/bannerBtn.jpg";
	}
}

function left(){
	r--;
	if(r<0){
		r=3;
	}
	for(var i=0;i<4;i++){
		if(i==r){
			oANodes[r].style.display="block";
			oimgNode_tabs[r].src="img/bannerBtnOn.jpg"
			continue;
		}
		oANodes[i].style.display="none";
		oimgNode_tabs[i].src="img/bannerBtn.jpg";
	}
}

function selecPic(num){
	oANodes[num].style.display="block";
	oimgNode_tabs[num].src="img/bannerBtnOn.jpg"
	for (var x=0;x<4;x++) {
		if(x==num){
			continue;
		}
		oANodes[x].style.display="none";
		oimgNode_tabs[x].src="img/bannerBtn.jpg"
	}
	r=num;
}
