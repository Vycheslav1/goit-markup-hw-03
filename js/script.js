
   function funcover1(indicator)
   {
   var objHolder=document.getElementById(indicator);
   
    objHolder.addEventListener('mouseover', function(event){
	var target=event.target;
	
	if(target.tagName=="IMG") 
	{
	
	objHolder.style.border='4px solid #2196F3';
	}

	});
    objHolder.addEventListener('mouseout', function(event){
	var target=event.target;
	if(target.tagName=="IMG") 
	{
	//	alert(target.tagName);
	objHolder.style.border='4px solid #FFFFFF';
	}

	});
 
   }
   function funcover2(indicator)
   {
   var objHolder=document.getElementById(indicator);
   
    objHolder.addEventListener('mouseover', function(event){
	var target=event.target;
	//alert(target.tagName);
	if(target.tagName=="DIV") 
	{
	
	objHolder.style.border='4px solid #2196F3';
	}

	});
    objHolder.addEventListener('mouseout', function(event){
	var target=event.target;
	if(target.tagName=="DIV") 
	{
	
	objHolder.style.border='4px solid #FFFFFF';
		}

	});
   
   }
   function funcover3(indicator)
   {
   var objHolder=document.getElementById(indicator);
   
    objHolder.addEventListener('mouseover', function(event){
	var target=event.target;
	
	if(target.tagName=="IMG") 
	{
	
	objHolder.style.border='4px solid #2196F3';
	}

	});
    objHolder.addEventListener('mouseout', function(event){
	var target=event.target;
	if(target.tagName=="IMG") 
	{
	//	alert(target.tagName);
	objHolder.style.border='4px solid #F5F4FA';
	}

	});
 
   }
   function funcover4(indicator)
   {
   var objHolder=document.getElementById(indicator);
   
    objHolder.addEventListener('mouseover', function(event){
	var target=event.target;
	//alert(target.tagName);
	if(target.tagName=="DIV") 
	{
	
	objHolder.style.border='4px solid #2196F3';
	}

	});
    objHolder.addEventListener('mouseout', function(event){
	var target=event.target;
	if(target.tagName=="DIV") 
	{
	
	objHolder.style.border='4px solid #F5F4FA';
		}

	});
   
   }
   function funcover5(indicator)
   {
   var objHolder=document.getElementById(indicator);
   
    objHolder.addEventListener('mouseover', function(event){
	var target=event.target;
	//alert(objHolder.tagName);
	if(target.tagName=="SECTION") 
	{
	
	objHolder.style.outline='4px solid #2196F3';
	}

	});
    objHolder.addEventListener('mouseout', function(event){
	var target=event.target;
	if(target.tagName=="SECTION") 
	{
	//	alert(target.tagName);
	objHolder.style.outline='4px solid #FFFFFF';
	}

	});
 
   }
   
   
