
var executed = false;

function get_next_qn()
{

	$("#overlay").fadeIn(300);

	var lakshya_id=localStorage.getItem("lakshya_id");
	var assessment_id = localStorage.getItem("assessment_id");
	var page5 = "<label class=\"QLable\" id=\"Q1\"\>total_questions1</label>";
	var collectionss = "";
	var page6 = "<label class=\"QLable\" id=\"Q2\"\ style=\"color:green\">total_questions2</label>";	
	var collectionsss = "";	
	
	
$.ajax({
			
        
        url:"https://toyota-lakshya-onlineassessment.in/api/get_next_question/?login_id="+lakshya_id+"&assessment_id="+assessment_id+"",
       	type:"GET",
       	data: "json",
        success: function(data)
        { 
        	
            var obj = data.question;
            var question_id = obj.id;
           
			  var times = data.elapsed_time;
			        		      		
			localStorage.setItem("elapsed_time",times);
			if (!executed)
			{
				initCountdown(times);
				executed = true;
		    }

	  		var answered_questions=data.answered_questions;
           	
           	var answered_questionss=data.answered_questions;
          
            var total_questions = data.total_questions;

           
            document.getElementById('inc').value = (answered_questions+1)+" of "+total_questions;
            
           
            	for(var i=1 ; i <= total_questions;i++)
        		{
                 		var ele2 = "";
				
						ele2 = page5;
						
						
					  answered_questions = answered_questions+1;
					  
					  if(answered_questions <= total_questions)
  					{
        				ele2 = ele2.replace("total_questions1", answered_questions);
                 	    collectionss += ele2;
        			}
        			
        	    }
            		
            		 $("#divSectionQuestions").html(collectionss); 
            		 
            		
            		if(answered_questionss >= 1) 
            	   {
            			var ele3 = "";
						ele3 = page6;
						
						
						ele3 = ele3.replace("total_questions2", answered_questionss);
                 	    collectionsss += ele3;	
                 	    
                 	    //localStorage.setItem("collectionsss",collectionsss);
                 	    
                 	}
            	

            		
            		 $("#attended").append(collectionsss);
            		 
            		 
            		
            		
            		 
        
            localStorage.setItem("id1",question_id);
			question_type = obj.question_type;
			
			data.question;


			if(question_type=='single_choice')
       		{
        		
        		question1(data);
       		}
        	else if(question_type=='match_the_following') 
       		{
        		question2(data);
       		}
        	else if(question_type=='image_descriptive') 
       		{
        		question3(data);
       		}
        	else if(question_type=='multiple_choice') 
       		{
        		question4(data);
       		}
        	else if(question_type=='descriptive') 
       		{
        		question5(data);
       		}
        	else if(answered_questions >= total_questions) 
       		{
        		
  				window.location.href="examsummary.html";
			   }
			   
			   choice_length = obj.choice.length ;

            
        }




	
	
}).done(function()  {
    setTimeout(function(){
            $("#overlay").fadeOut(300);


	},300);
	
});

}



function submitanswer(){

	$("#overlay").fadeIn(300);
	
	var lakshya_id=localStorage.getItem("lakshya_id");
	var assessment_id = localStorage.getItem("assessment_id");  

	
	var demo_time = (document.getElementById('demo').innerHTML);
	if(demo_time.length == "11")
	{
		
		var elapsed_time = demo_time.slice(2, 6);


	}
	else if(demo_time.length == "10")
	{
		
		var elapsed_time = demo_time.slice(2, 5);


	}
	else if(demo_time.length == "9")
	{
		
		var elapsed_time = demo_time.slice(2, 4);


	}

	var value;


if(question_type=='single_choice')
{
	if(choice_length == "4")
	{
	

		
		var ids1 = document.getElementById('myBtn1').value;
		var ids2 = document.getElementById('myBtn2').value;
		var ids3 = document.getElementById('myBtn3').value;
		var ids4 = document.getElementById('myBtn4').value;
		
		if(localStorage.getItem("key") == ids1 || localStorage.getItem("key")== ids2 || localStorage.getItem("key") == ids3 || localStorage.getItem("key") == ids4)
		{
			
			value = localStorage.getItem("key");
			//alert(value);
		}
		if(localStorage.getItem("key") != ids1 && localStorage.getItem("key") != ids2 && localStorage.getItem("key") != ids3 && localStorage.getItem("key") != ids4)
		{
			value = "";
		}
    }

	else if(choice_length == "5")
	{
	

		
		var ids1 = document.getElementById('myBtn1').value;
		var ids2 = document.getElementById('myBtn2').value;
		var ids3 = document.getElementById('myBtn3').value;
		var ids4 = document.getElementById('myBtn4').value;
		var ids5 = document.getElementById('myBtn5').value;

		
		if(localStorage.getItem("key") == ids1 || localStorage.getItem("key") == ids2 || localStorage.getItem("key") == ids3 || localStorage.getItem("key") == ids4 || localStorage.getItem("key") == ids5 )
		{
			
			value = localStorage.getItem("key");
			//alert(value);
		}
		if(localStorage.getItem("key") != ids1 && localStorage.getItem("key") != ids2 && localStorage.getItem("key") != ids3 && localStorage.getItem("key") != ids4 || localStorage.getItem("key") == ids5 )
		{
			value = "";
		}
    }

else if(choice_length == "2")
{


	
	var ids1 = document.getElementById('myBtn1').value;
	var ids2 = document.getElementById('myBtn2').value;
	
	
	if(localStorage.getItem("key") == ids1 || localStorage.getItem("key") == ids2 )
	{
		
		value = localStorage.getItem("key");
		//alert(value);
	}
	if(localStorage.getItem("key") != ids1 && localStorage.getItem("key") != ids2 )
	{
		value = "";
	}

}
else if(choice_length == "3")
{


	
	var ids1 = document.getElementById('myBtn1').value;
	var ids2 = document.getElementById('myBtn2').value;
	var ids3 = document.getElementById('myBtn3').value;

	
	
	if(localStorage.getItem("key") == ids1 || localStorage.getItem("key") == ids2 || localStorage.getItem("key") == ids3 )
	{
		
		value = localStorage.getItem("key");
	}
	if(localStorage.getItem("key") != ids1 && localStorage.getItem("key") != ids2 && localStorage.getItem("key") != ids3 )
	{
		value = "";
	}

}


}
	
	else if(question_type=='descriptive') 
	{
		var value = document.getElementById('descriptionn').value;
	}
	else if(question_type=='image_descriptive') 
	{
		var value = document.getElementById('descriptionn1').value;
	
	}
	else if(question_type=='multiple_choice') 
	{

	
	   	if(choice_length == "4")
	{
		var value1 = document.getElementById('repoFolder1').getAttribute("data-value1");
		var value2 = document.getElementById('repoFolder2').getAttribute("data-value2");
		var value3 = document.getElementById('repoFolder3').getAttribute("data-value3");
		var value4 = document.getElementById('repoFolder4').getAttribute("data-value4");
		
		
		
		var vals ="";
		
		if(document.getElementById('repoFolder1').checked)
		{
			value = value1;
			//alert(value);
		}
		if(document.getElementById('repoFolder2').checked)
		{
		value = value2;
		//alert(value);
		}
		if(document.getElementById('repoFolder3').checked)
		{
		value = value3;
		//alert(value);
		}
		if(document.getElementById('repoFolder4').checked)
		{
		value = value4;
		//alert(value);
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked )
		{
			value = value1+","+value2;
		}
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked )
		{
			value = value2+","+value3;
		}
		if(document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked )
		{
			value = value3+","+value4;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder4').checked )
		{
			value = value1+","+value4;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked)
		{
			value = value1+","+value2+","+value3;
		}
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked)
		{
			value = value2+","+value3+","+value4;
		}
		if(document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked && document.getElementById('repoFolder1').checked)
		{
			value = value3+","+value4+","+value1;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked && document.getElementById('repoFolder4').checked)
		{
			value = value1+","+value2+","+value4;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked)
		{
			value = value1+","+value2+","+value3+","+value4;
		}
		if(document.getElementById('repoFolder1').checked == 0 && document.getElementById('repoFolder2').checked == 0 && document.getElementById('repoFolder3').checked == 0 && document.getElementById('repoFolder4').checked == 0)
			{
			value="";
			}

		}

		else if(choice_length == "3")
		{
			var value1 = document.getElementById('repoFolder1').getAttribute("data-value1");
			var value2 = document.getElementById('repoFolder2').getAttribute("data-value2");
			var value3 = document.getElementById('repoFolder3').getAttribute("data-value3");
			
			
			
			var vals ="";
			
			if(document.getElementById('repoFolder1').checked)
			{
				value = value1;
				//alert(value);
			}
			if(document.getElementById('repoFolder2').checked)
			{
			value = value2;
			//alert(value);
			}
			if(document.getElementById('repoFolder3').checked)
			{
			value = value3;
			//alert(value);
			}
			
			if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked )
			{
				value = value1+","+value2;
			}
			if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked )
			{
				value = value2+","+value3;
			}
			
			if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder3').checked )
			{
				value = value1+","+value3;
			}
			if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked)
			{
				value = value1+","+value2+","+value3;
			}

			if(document.getElementById('repoFolder1').checked == 0 && document.getElementById('repoFolder2').checked == 0 && document.getElementById('repoFolder3').checked == 0 )
			{
			value="";
			}
			
		
		
		}

		else if(choice_length == "2")
		{
			var value1 = document.getElementById('repoFolder1').getAttribute("data-value1");
			var value2 = document.getElementById('repoFolder2').getAttribute("data-value2");
			
			var vals ="";
			
			if(document.getElementById('repoFolder1').checked)
			{
				value = value1;
				//alert(value);
			}
			if(document.getElementById('repoFolder2').checked)
			{
			value = value2;
			//alert(value);
			}
			
			
			if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked )
			{
				value = value1+","+value2;
			}
			if(document.getElementById('repoFolder1').checked == 0 && document.getElementById('repoFolder2').checked == 0 )
			{
			value="";
			}
			
		}

		else if(choice_length == "5")
		{
		var value1 = document.getElementById('repoFolder1').getAttribute("data-value1");
		var value2 = document.getElementById('repoFolder2').getAttribute("data-value2");
		var value3 = document.getElementById('repoFolder3').getAttribute("data-value3");
		var value4 = document.getElementById('repoFolder4').getAttribute("data-value4");
		var value5 = document.getElementById('repoFolder5').getAttribute("data-value5");

		
		
		
		var vals ="";
		
		if(document.getElementById('repoFolder1').checked)
		{
			value = value1;
			//alert(value);
		}
		if(document.getElementById('repoFolder2').checked)
		{
		value = value2;
		//alert(value);
		}
		if(document.getElementById('repoFolder3').checked)
		{
		value = value3;
		//alert(value);
		}
		if(document.getElementById('repoFolder4').checked)
		{
		value = value4;
		//alert(value);
		}
		if(document.getElementById('repoFolder5').checked)
		{
		value = value5;
		//alert(value);
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked )
		{
			value = value1+","+value2;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder4').checked )
		{
			value = value1+","+value4;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder5').checked )
		{
			value = value1+","+value5;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder3').checked )
		{
			value = value1+","+value3;
		}
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked )
		{
			value = value2+","+value3;
		}
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder4').checked )
		{
			value = value2+","+value4;
		}
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder5').checked )
		{
			value = value2+","+value5;
		}
		if(document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked )
		{
			value = value3+","+value4;
		}
		if(document.getElementById('repoFolder3').checked && document.getElementById('repoFolder5').checked )
		{
			value = value3+","+value5;
		}
		if(document.getElementById('repoFolder5').checked && document.getElementById('repoFolder4').checked )
		{
			value = value5+","+value4;
		}
		
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked)
		{
			value = value1+","+value2+","+value3;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder4').checked && document.getElementById('repoFolder3').checked)
		{
			value = value1+","+value4+","+value3;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder5').checked && document.getElementById('repoFolder3').checked)
		{
			value = value1+","+value5+","+value3;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder5').checked && document.getElementById('repoFolder2').checked)
		{
			value = value1+","+value5+","+value2;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder5').checked && document.getElementById('repoFolder4').checked)
		{
			value = value1+","+value5+","+value4;
		}
	
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked)
		{
			value = value2+","+value3+","+value4;
		}
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder5').checked && document.getElementById('repoFolder4').checked)
		{
			value = value2+","+value5+","+value4;
		}
		
		if(document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked && document.getElementById('repoFolder1').checked)
		{
			value = value3+","+value4+","+value1;
		}
		if(document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked && document.getElementById('repoFolder5').checked)
		{
			value = value3+","+value4+","+value5;
		}
	
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked && document.getElementById('repoFolder4').checked)
		{
			value = value1+","+value2+","+value3+","+value4;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder2').checked && document.getElementById('repoFolder3').checked && document.getElementById('repoFolder5').checked)
		{
			value = value1+","+value2+","+value3+","+value5;
		}
		if(document.getElementById('repoFolder1').checked && document.getElementById('repoFolder4').checked && document.getElementById('repoFolder3').checked && document.getElementById('repoFolder5').checked)
		{
			value = value1+","+value4+","+value3+","+value5;
		}
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder4').checked && document.getElementById('repoFolder3').checked && document.getElementById('repoFolder5').checked)
		{
			value = value2+","+value4+","+value3+","+value5;
		}
		if(document.getElementById('repoFolder2').checked && document.getElementById('repoFolder4').checked && document.getElementById('repoFolder1').checked && document.getElementById('repoFolder5').checked)
		{
			value = value2+","+value4+","+value1+","+value5;
		}
		
		if(document.getElementById('repoFolder1').checked == 0 && document.getElementById('repoFolder2').checked == 0 && document.getElementById('repoFolder3').checked == 0 && document.getElementById('repoFolder4').checked == 0 && document.getElementById('repoFolder5').checked == 0)
			{
			value="";
			}

			
		}
		
	}
	
	else if(question_type=='match_the_following') 
	{
	    var values1 = document.getElementById('bt1').value;
		var values2 = document.getElementById('bt2').value;
		var values3 = document.getElementById('bt3').value;
		var values4 = document.getElementById('bt4').value; 
		
		
		var element = document.getElementById("sel1");
			
		var selectedValue = element.options[element.selectedIndex].value;
		
		var element = document.getElementById("next");
		 	
		var selectedValue1 = element.options[element.selectedIndex].value;
		 	
		 	
		var element = document.getElementById("right");
		var selectedValue2 = element.options[element.selectedIndex].value;
		 	
		var element = document.getElementById("wrong");
		var selectedValue3 = element.options[element.selectedIndex].value;
		 	
		var value1 = values1+"-"+selectedValue; 
		var value2 = values2+"-"+selectedValue1;
		var value3 = values3+"-"+selectedValue2;
		var value4 = values4+"-"+selectedValue3;
				 	
		var value = value1+","+value2+","+value3+","+value4;
		
		if(selectedValue == "" && selectedValue1 == "" && selectedValue2 == "" && selectedValue3=="")
			{
			value="";
			}
	}
	//var tim = document.getElementById('demo').innerText;
	
	//alert(tim[2]+""+tim[3]);
	

	
	

	//alert(elapsed_time1);

	
/*	if(elapsed_time1 <= tim.slice(2, 5))
		{

	var res = tim.slice(2, 5);

	var res1 = tim.slice(7, 9);

	var elapsed_time = res +"."+res1;

	//alert(res + "." +res1)



		}

	else if(elapsed_time1 <= tim.slice(2, 6) )
	{
	var res = tim.slice(2, 6);

	var res1 = tim.slice(8, 10);


	var elapsed_time = res +"."+res1;

	//alert(res + "." +res1)



	}

	else if(elapsed_time1 < tim.slice(2, 4))
	{

		var res = tim.slice(2, 4);


		var res1 = tim.slice(6, 8);

		//alert(res + "." +res1)

		
		var elapsed_time = res +"."+res1;
		

	}
*/
	
	var question_id = localStorage.getItem("id1");
	
	
	$.ajax({
						
						url:"https://toyota-lakshya-onlineassessment.in/api/submit_answer/?login_id="+lakshya_id+"&assessment_id="+assessment_id+"&question_id="+question_id+"&elapsed_time="+elapsed_time+"&answer="+value+"",
			          	type:"GET",
			          	data: "json",
			           	success: function(data)
			           	{ 
			           		
			           		var status = data.status;
			           		
			           		if(status == 'success')
			           			{
			           			
			           			get_next_qn();
			           			console.log(status);
								$("#overlay").fadeIn(300);

			           					           			
			           			}
			           		else
			           			{
			           		     alert("Error");
			           			}
			           }
					}).done(function()  {
						setTimeout(function(){
								$("#overlay").fadeOut(300);
					
					
						},300);
						
					});

	
}


function question1(data)
{

	var obj = data.question;
	var qnimage = obj.qn_image; 

	if(obj.choice.length == "4")
	{

	 var page1=  "<div class=\"col-sm-4\">"+
	 "<h2 style=\"text-align: center;color:#545454;width:100%;border-bottom: 2px solid red;\" >Assesment</h2>"+
	 " </div><br>"+

	 "<div class=\"col-sm-12\">"+
	 "<h6 style=\"font-family:'Noto Sans', sans-serif;color: #444444;font-size:17px;line-height:21px;letter-spacing:1.36px;font-weight:400;\">cate1</h6>"+
	 "</div>"+

	 "<div class=\"col-sm-12\">"+
	 "<button type=\"button\" style=\"padding:8px 20px;margin:8px 0px 10px;\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\"> <span class=\"glyphicon glyphicon-picture\"></span> View Image </button>"+
	 "</div>"+
 
	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li style=\"text-align: left;\"><input type=\"radio\" name=\"age\" id=\"myBtn1\" value=\"id1\" onclick=\" myFunction1()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:#444444;font-size:14px\"> answers <li>"+
	 "<li style=\"display:none\">id1</li>"+
	 "</ul>"+
	 "</div>"+

	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li style=\"text-align: left;\" ><input type=\"radio\" name=\"age\" id=\"myBtn2\" value=\"id2\" onclick=\" myFunction2()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:444444;font-size:14px;\" hspace=\"15\">answers1<li>"+
	 "<li style=\"display:none\">id2</li>"+
	 "</ul>"+
	 "</div>"+

	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li style=\"text-align: left;\"><input type=\"radio\" name=\"age\" id=\"myBtn3\" value=\"id3\"onclick=\" myFunction3()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:444444;font-size:14px;\">answers2<li>"+
	 "<li style=\"display:none\">id3</li>"+
	 "</ul>"+
	 "</div>"+

	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li style=\"text-align: left;\"><input type=\"radio\" name=\"age\" id=\"myBtn4\" value=\"id4\" onclick=\" myFunction4()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b id=\"data\" style=\"color:444444;font-size:14px;\">answers3<li>"+
	 "<li style=\"display:none\">id4</li>"+
	 "</ul>"+
	 "</div>"+

	 "<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">"+
	 "<div class=\"modal-dialog\">"+
	 "<div class=\"modal-content\">"+
	  "<div class=\"modal-header\">"+
	  "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" > <b>&times;</b></button></div>"+
	   "<div class=\"modal-body\">"+
	   "<div class=\"row content\">"+
	   "<div class=\"col-sm-12\" style=\"width: 100%;height:60vh;\">"+
		"<img src=\"pathtoimg\" style=\"width:100%; height:100%; object-fit: contain; object-position: center; display: block; margin: 0 auto;\">"+
		"</div>"+
		"</div>"+
		"</div>"+
		 "</div>"+
		"</div>"+
	   "</div>"+

	"</div></div>";
		  
	var collection =""; 

	var i = 0; 

	var ele = "";

		ele = page1;
			
	 var cate1 = obj.question;
	 var image1 = obj.question_type;
	
	var qesn  = obj.choice[0].choice;
	var qesn1 = obj.choice[1].choice;
	var qesn2 = obj.choice[2].choice;
	var qesn3 = obj.choice[3].choice;
	
		var id1  = obj.choice[0].id;
		var id2 = obj.choice[1].id;
		var id3 = obj.choice[2].id;
		var id4 = obj.choice[3].id;

	ele = ele.replace("Assesment", "Single Choice");
	ele = ele.replace("cate1", cate1);
	
	if (obj.qn_image && obj.qn_image !== "") {
		ele = ele.replace("pathtoimg", "https://toyota-lakshya-onlineassessment.in" + obj.qn_image);
	  } else {
		// If qnimage is null or empty, hide the image
		ele = ele.replace("<button type=\"button\" style=\"padding:8px 20px;margin:8px 0px 10px;\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\"> <span class=\"glyphicon glyphicon-picture\"></span> View Image </button>", "");
	}

	ele = ele.replace("answers", qesn);
	ele = ele.replace("answers1", qesn1);
	ele = ele.replace("answers2", qesn2);
	ele = ele.replace("answers3", qesn3);
	
	ele = ele.replace("id1", id1);
	ele = ele.replace("id2", id2);
	ele = ele.replace("id3", id3);
	ele = ele.replace("id4", id4);
	
	collection = ele;
	
	
$("#bodypage").html(collection); 

}

else if(obj.choice.length == "3")
	{
		var page1=  "<div class=\"col-sm-4\">"+
		"<h2 style=\"text-align: center;color:#545454;width:100%;border-bottom: 2px solid red;\" >Assesment</h2>"+
		" </div><br>"+
   
		"<div class=\"col-sm-12\">"+
		"<h6 style=\"font-family:'Noto Sans', sans-serif;color: #444444;font-size:17px;line-height:21px;letter-spacing:1.36px;font-weight:400;\">cate1</h6>"+
		"</div>"+

		"<div class=\"col-sm-12\">"+
		"<button type=\"button\" style=\"padding:8px 20px;margin:8px 0px 10px;\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\"> <span class=\"glyphicon glyphicon-picture\"></span> View Image </button>"+
		"</div>"+

		"<div class=\"col-sm-12\">"+
		"<ul class=\"list-group\" style=\"list-style-type: none\">"+
		"<li><input type=\"radio\" name=\"age\" id=\"myBtn1\" value=\"id1\" onclick=\" myFunction1()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:#444444;font-size:14px\">answers<li>"+
		"<li style=\"display:none\">id1</li>"+
		"</ul>"+
		"</div>"+
		"<div class=\"col-sm-12\">"+
		"<ul class=\"list-group\" style=\"list-style-type: none\">"+
		"<li><input type=\"radio\" name=\"age\" id=\"myBtn2\" value=\"id2\" onclick=\" myFunction2()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:444444;font-size:14px;\" hspace=\"15\">answers1<li>"+
		"<li style=\"display:none\">id2</li>"+
		"</ul>"+
		"</div>"+
		"<div class=\"col-sm-12\">"+
		"<ul class=\"list-group\" style=\"list-style-type: none\">"+
		"<li><input type=\"radio\" name=\"age\" id=\"myBtn3\" value=\"id3\"onclick=\" myFunction3()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:444444;font-size:14px;\">answers2<li>"+
		"<li style=\"display:none\">id3</li>"+
		"</ul>"+
		"</div>"+

		"<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">"+
		"<div class=\"modal-dialog\">"+
		"<div class=\"modal-content\">"+
		 "<div class=\"modal-header\">"+
		 "<button type=\"button\" class=\"close\" data-dismiss=\"modal\"> <b> &times; </b></button></div>"+
		  "<div class=\"modal-body\">"+
		  "<div class=\"row content\">"+
		  "<div class=\"col-sm-12\" style=\"width: 100%;height:60vh;\">"+
		   "<img src=\"pathtoimg\" style=\"width:100%; height:100%; object-fit: contain; object-position: center; display: block; margin: 0 auto;\">"+
		   "</div>"+
		   "</div>"+
		   "</div>"+
			"</div>"+
		   "</div>"+
		  "</div>"+

	    "</div></div>";
   
	  
	   var collection =""; 
   
	   var i = 0; 
   
	   var ele = "";
   
		   ele = page1;
			   
		   var cate1 = obj.question;
	   var image1 = obj.question_type;
	   
	   var qesn  = obj.choice[0].choice;
	   var qesn1 = obj.choice[1].choice;
	   var qesn2 = obj.choice[2].choice;
	   
	   
	   var id1  = obj.choice[0].id;
	   var id2 = obj.choice[1].id;
	   var id3 = obj.choice[2].id;

	   if (obj.qn_image && obj.qn_image !== "") {
		ele = ele.replace("pathtoimg", "https://toyota-lakshya-onlineassessment.in" + obj.qn_image);
	  } else {
		// If qnimage is null or empty, hide the image
		ele = ele.replace("<button type=\"button\" style=\"padding:8px 20px;margin:8px 0px 10px;\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\"> <span class=\"glyphicon glyphicon-picture\"></span> View Image </button>", "");
	  }
   
	   ele = ele.replace("Assesment", "Single Choice");
	   ele = ele.replace("cate1", cate1);
	   
	   ele = ele.replace("answers", qesn);
	   ele = ele.replace("answers1", qesn1);
	   ele = ele.replace("answers2", qesn2);
	   
	   ele = ele.replace("id1", id1);
	   ele = ele.replace("id2", id2);
	   ele = ele.replace("id3", id3);
	   
	   collection = ele;
	   
	   
   $("#bodypage").html(collection); 
   
	}

	
else if(obj.choice.length == "2")
{
	var page1=  "<div class=\"col-sm-4\">"+
	"<h2 style=\"text-align:center;color:#545454;width:100%;border-bottom: 2px solid red;\" >Assesment</h2>"+
	" </div><br>"+

	"<div class=\"col-sm-12\">"+
	"<h6 style=\"font-family:'Noto Sans', sans-serif;color: #444444;font-size:17px;line-height:21px;letter-spacing:1.36px;font-weight:400;\">cate1</h6>"+
	"</div>"+

	"<div class=\"col-sm-12\">"+
	"<button type=\"button\" style=\"padding:8px 20px;margin:8px 0px 10px;\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\"> <span class=\"glyphicon glyphicon-picture\"></span> View Image </button>"+
	"</div>"+

	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"radio\" name=\"age\" id=\"myBtn1\" value=\"id1\" onclick=\" myFunction1()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:#444444;font-size:14px\">answers<li>"+
	"<li style=\"display:none\">id1</li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"radio\" name=\"age\" id=\"myBtn2\" value=\"id2\" onclick=\" myFunction2()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:444444;font-size:14px;\" hspace=\"15\">answers1<li>"+
	"<li style=\"display:none\">id2</li>"+
	"</ul>"+
	"</div>"+

	"<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">"+
	"<div class=\"modal-dialog\">"+
	"<div class=\"modal-content\">"+
	 "<div class=\"modal-header\">"+
	 "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" > <b> &times; </b> </button></div>"+
	  "<div class=\"modal-body\">"+
	  "<div class=\"row content\">"+
	  "<div class=\"col-sm-12\" style=\"width: 100%;height:60vh;\">"+
	   "<img src=\"pathtoimg\" style=\"width:100%; height:100%; object-fit: contain; object-position: center; display: block; margin: 0 auto;\">"+
	   "</div>"+
	   "</div>"+
	   "</div>"+
		"</div>"+
	   "</div>"+
	  "</div>"+
	
	 "</div></div>";
  
   var collection =""; 

   var i = 0; 

   var ele = "";

	   ele = page1;
		   
	   var cate1 = obj.question;
   var image1 = obj.question_type;
   
   var qesn  = obj.choice[0].choice;
   var qesn1 = obj.choice[1].choice;
   
   
   var id1  = obj.choice[0].id;
   var id2 = obj.choice[1].id;

   if (obj.qn_image && obj.qn_image !== "") {
	ele = ele.replace("pathtoimg", "https://toyota-lakshya-onlineassessment.in" + obj.qn_image);
  } else {
	// If qnimage is null or empty, hide the image
	ele = ele.replace("<button type=\"button\" style=\"padding:8px 20px;margin:8px 0px 10px;\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\"> <span class=\"glyphicon glyphicon-picture\"></span> View Image </button>", "");
  }

   ele = ele.replace("Assesment", "Single Choice");
   ele = ele.replace("cate1", cate1);
   
   ele = ele.replace("answers", qesn);
   ele = ele.replace("answers1", qesn1);
   
   ele = ele.replace("id1", id1);
   ele = ele.replace("id2", id2);
   
   collection = ele;
   
$("#bodypage").html(collection); 

}

else if(obj.choice.length == "5")
 {
	 var page1=  "<div class=\"col-sm-4\">"+
	 "<h2 style=\"text-align: center;color:#545454;width:100%;border-bottom: 2px solid red;\" >Assesment</h2>"+
	 " </div><br>"+

	 "<div class=\"col-sm-12\">"+
	 "<h6 style=\"font-family:'Noto Sans', sans-serif;color: #444444;font-size:17px;line-height:21px;letter-spacing:1.36px;font-weight:400;\">cate1</h6>"+
	 "</div>"+

	 "<div class=\"col-sm-12\">"+
	 "<button type=\"button\" style=\"padding:8px 20px;margin:8px 0px 10px;\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\"> <span class=\"glyphicon glyphicon-picture\"></span> View Image </button>"+
	 "</div>"+

	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li><input type=\"radio\" name=\"age\" id=\"myBtn1\" value=\"id1\" onclick=\" myFunction1()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:#444444;font-size:14px\">answers<li>"+
	 "<li style=\"display:none\">id1</li>"+
	 "</ul>"+
	 "</div>"+
	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li><input type=\"radio\" name=\"age\" id=\"myBtn2\" value=\"id2\" onclick=\" myFunction2()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:444444;font-size:14px;\" hspace=\"15\">answers1<li>"+
	 "<li style=\"display:none\">id2</li>"+
	 "</ul>"+
	 "</div>"+
	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li><input type=\"radio\" name=\"age\" id=\"myBtn3\" value=\"id3\"onclick=\" myFunction3()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b style=\"color:444444;font-size:14px;\">answers2<li>"+
	 "<li style=\"display:none\">id3</li>"+
	 "</ul>"+
	 "</div>"+
	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li><input type=\"radio\" name=\"age\" id=\"myBtn4\" value=\"id4\" onclick=\" myFunction4()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b id=\"data\" style=\"color:444444;font-size:14px;\">answers3<li>"+
	 "<li style=\"display:none\">id4</li>"+
	 "</ul>"+
	 "</div>"+
	 "<div class=\"col-sm-12\">"+
	 "<ul class=\"list-group\" style=\"list-style-type: none\">"+
	 "<li><input type=\"radio\" name=\"age\" id=\"myBtn5\" value=\"id5\" onclick=\" myFunction5()\" class=\"btn btn-default\" style=\"border : 1px solid red;width:25px;height:25px;margin-bottom : 1%;outline: none\">&nbsp&nbsp&nbsp<b id=\"data\" style=\"color:444444;font-size:14px;\">answers4<li>"+
	 "<li style=\"display:none\">id5</li>"+
	 "</ul>"+
	 "</div>"+

	 "<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">"+
	 "<div class=\"modal-dialog\">"+
	 "<div class=\"modal-content\">"+
	  "<div class=\"modal-header\">"+
	  "<button type=\"button\" class=\"close\" data-dismiss=\"modal\"> <b> &times; </b> </button></div>"+
	   "<div class=\"modal-body\">"+
	   "<div class=\"row content\">"+
	   "<div class=\"col-sm-12\" style=\"width: 100%;height:60vh;\">"+
		"<img src=\"pathtoimg\" style=\"width:100%; height:100%; object-fit: contain; object-position: center; display: block; margin: 0 auto;\">"+
		"</div>"+
		"</div>"+
		"</div>"+
		 "</div>"+
		"</div>"+
	   "</div>"+

	   "</div></div>";

   
	var collection =""; 

	var i = 0; 

	var ele = "";

	ele = page1;
			
	var cate1 = obj.question;
	var image1 = obj.question_type;
	
	var qesn  = obj.choice[0].choice;
	var qesn1 = obj.choice[1].choice;
	var qesn2 = obj.choice[2].choice;
	var qesn3 = obj.choice[3].choice;
	var qesn4 = obj.choice[4].choice;
	
	var id1  = obj.choice[0].id;
	var id2 = obj.choice[1].id;
	var id3 = obj.choice[2].id;
	var id4 = obj.choice[3].id;
	var id5 = obj.choice[4].id;

	if (obj.qn_image && obj.qn_image !== "") {
		ele = ele.replace("pathtoimg", "https://toyota-lakshya-onlineassessment.in" + obj.qn_image);
	  } else {
		// If qnimage is null or empty, hide the image
		ele = ele.replace("<button type=\"button\" style=\"padding:8px 20px;margin:8px 0px 10px;\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\"> <span class=\"glyphicon glyphicon-picture\"></span> View Image </button>", "");
	  }


	ele = ele.replace("Assesment", "Single Choice");
	ele = ele.replace("cate1", cate1);
	
	ele = ele.replace("answers", qesn);
	ele = ele.replace("answers1", qesn1);
	ele = ele.replace("answers2", qesn2);
	ele = ele.replace("answers3", qesn3);
	ele = ele.replace("answers4", qesn4);

	
	ele = ele.replace("id1", id1);
	ele = ele.replace("id2", id2);
	ele = ele.replace("id3", id3);
	ele = ele.replace("id4", id4);
	ele = ele.replace("id5", id5);
	
	collection = ele;
		
$("#bodypage").html(collection); 

}
     
}


 function myFunction1() 
{
	  
	  var x = document.getElementById("myBtn1").value;
	  localStorage.setItem("key" , x);	  
}

function myFunction2() 
{
	  var x = document.getElementById("myBtn2").value;
	  localStorage.setItem("key" , x);
}
function myFunction3() 
{
	  var x = document.getElementById("myBtn3").value;
	  
	  localStorage.setItem("key" , x);
}
function myFunction4() 
{
	  var x = document.getElementById("myBtn4").value;
	  
	  localStorage.setItem("key" , x);
}
function myFunction5() 
{
	  var x = document.getElementById("myBtn5").value;
	  
	  localStorage.setItem("key" , x);
}



function question2(data)
{

	var obj = data.question;
	var page1=  "<div class=\"col-sm-6\">"+
	"<h2 style=\"text-align: center;font-family:calibri bold;color:#545454;width: 70%;border-bottom: 2px solid red;\" >Assesment2</h2>"+
	" </div><br>"+

	"<div class=\"col-sm-12\">"+
	"<h6 style=\"font-family: calibri regular;color: #444444;font-size:20px;border-left=5px solid red\">cate1</h6>"+
	"</div><br>"+

	"<div class=\"col-sm-12\">"+
	"<div class=\"col-sm-6\" id=\"sel2\">"+
    "<div class=\"row-fluid\">"+
	"<div class=\"span12\">"+
	"<input id=\"bt1\" value=\"id5\" class=\"btn info\" style = \"width:10%;display:none\" disabled>A</input><span class=\"requiredStar\"><b style=\"padding-left:18px;color:#444444;font-size:16px;font-family: calibri regular\" >answer4</b></span>"+
	"</div></div><br><br>"+
	"<div class=\"row-fluid\">"+
	"<div class=\"span12\">"+
	"<input id=\"bt2\" value=\"id6\" class=\"btn info\" style = \"width:10%;display:none\" disabled>B</input><span class=\"requiredStar\"><b style=\"padding-left:18px;color:#444444;font-size:16px;font-family: calibri regular\" id=\"mchoices2\" data-values2=\"b\">answer5</b></span>"+
	"</div></div><br><br>"+
	"<div class=\"row-fluid\">"+
	"<div class=\"span12\">"+
	"<input id=\"bt3\" value=\"id7\" class=\"btn info\" style = \"width:10%;display:none\" disabled>C</input><span class=\"requiredStar\"><b style=\"padding-left:18px;color:#444444;font-size:16px;font-family: calibri regular\" id=\"mchoices3\" data-values3=\"c\">answer6</b></span>"+
	"</div></div><br><br>"+
	"<div class=\"row-fluid\">"+
	"<div class=\"span12\">"+
	"<input id=\"bt4\" value=\"id8\" class=\"btn info\" style = \"width:5%;display:none\" disabled>D</input><span class=\"requiredStar\"><b style=\"padding-left:18px;color:#444444;font-size:16px;font-family: calibri regular\" id=\"mchoices4\" data-values4=\"d\">answer7</b></span>"+
	"</div></div><br><br>"+
	"</div>"+
	"<div class=\"col-sm-6\">"+
    
    "<ul class=\"list-group\" style=\"list-style-type: none\">"+
   	"<select id=\"sel1\">"+
    "<option > </option>"+
           "<option id=\"opt1\" data-values1=\"a\" value=\"id9\">answer8</option>"+
           "<option id=\"opt2\" data-values2=\"b\" value=\"id10\">answer9</option>"+
           "<option id=\"opt3\" data-values3=\"c\" value=\"id11\">answer10</option>"+
           "<option id=\"opt4\" data-values4=\"d\" value=\"id12\">answer11</option>"+
       	   "</select>"+
       	   "</br>"+
           "</br>"+
           "</br>"+
           "<select id=\"next\">"+
           "<option > </option>"+
               "<option id=\"opt5\" data-values5=\"a\" value=\"id13\">answer12</option>"+
               "<option id=\"opt6\" data-values6=\"b\" value=\"id14\">answer13</option>"+
               "<option id=\"opt7\" data-values7=\"c\" value=\"id15\">answer14</option>"+
               "<option id=\"opt8\" data-values8=\"d\" value=\"id16\">answer15</option>"+
           "</select>"+
           "</br>"+
           "</br>"+
           "</br>"+
           "<select id=\"right\">"+
	       "<option > </option>"+
	       "<option id=\"opt9\" data-values9=\"a\" value=\"id17\">answer16</option>"+
	       "<option id=\"opt10\" data-values10=\"b\" value=\"id18\">answer17</option>"+
	       "<option id=\"opt11\" data-values11=\"c\" value=\"id19\">answer18</option>"+
	       "<option id=\"opt12\" data-values12=\"d\" value=\"id20\">answer19</option>"+
	           "</select>"+
	           "</br>"+
	           "</br>"+
	           "</br>"+
	           "<select id=\"wrong\">"+
		        "<option > </option>"+
		               "<option id=\"opt13\" data-values13=\"a\" value=\"id21\">answer20</option>"+
		               "<option id=\"opt14\" data-values14=\"b\" value=\"id22\">answer21</option>"+
		               "<option id=\"opt15\" data-values15=\"c\" value=\"id23\">answer22</option>"+
		               "<option id=\"opt16\" data-values16=\"d\" value=\"id24\">answer23</option>"+
		           "</select>"+
       
   " </ul>"+
   "</div></div>";
   

var collection =""; 

var i = 0; 

var ele = "";

	ele = page1;
		
	var cate1 = obj.question;
var image1 = obj.question_type;




var qesn4 = obj.match_column_a[0].choice
var qesn5 = obj.match_column_a[1].choice
var qesn6 = obj.match_column_a[2].choice
var qesn7 = obj.match_column_a[3].choice



var id5 = obj.match_column_a[0].id
var id6 = obj.match_column_a[1].id
var id7 = obj.match_column_a[2].id
var id8 = obj.match_column_a[3].id




var qesn8 = obj.match_column_b[0].choice
var qesn9 = obj.match_column_b[1].choice
var qesn10 = obj.match_column_b[2].choice
var qesn11= obj.match_column_b[3].choice



var id9 = obj.match_column_b[0].id
var id10 = obj.match_column_b[1].id
var id11 = obj.match_column_b[2].id
var id12 = obj.match_column_b[3].id




ele = ele.replace("id5", id5);
ele = ele.replace("id6", id6);
ele = ele.replace("id7", id7);
ele = ele.replace("id8", id8);

ele = ele.replace("id9", id9);
ele = ele.replace("id10", id10);
ele = ele.replace("id11", id11);
ele = ele.replace("id12", id12);

ele = ele.replace("id13", id9);
ele = ele.replace("id14", id10);
ele = ele.replace("id15", id11);
ele = ele.replace("id16", id12);

ele = ele.replace("id17", id9);
ele = ele.replace("id18", id10);
ele = ele.replace("id19", id11);
ele = ele.replace("id20", id12);

ele = ele.replace("id21", id9);
ele = ele.replace("id22", id10);
ele = ele.replace("id23", id11);
ele = ele.replace("id24", id12);


ele = ele.replace("Assesment2", "Match The Following");
ele = ele.replace("cate1", cate1);

ele = ele.replace("answer4", qesn4);
ele = ele.replace("answer5", qesn5);
ele = ele.replace("answer6", qesn6);
ele = ele.replace("answer7", qesn7);


ele = ele.replace("answer8", qesn8);
ele = ele.replace("answer9", qesn9);
ele = ele.replace("answer10", qesn10);
ele = ele.replace("answer11", qesn11);

ele = ele.replace("answer12", qesn8);
ele = ele.replace("answer13", qesn9);
ele = ele.replace("answer14", qesn10);
ele = ele.replace("answer15", qesn11);

ele = ele.replace("answer16", qesn8);
ele = ele.replace("answer17", qesn9);
ele = ele.replace("answer18", qesn10);
ele = ele.replace("answer19", qesn11);

ele = ele.replace("answer20", qesn8);
ele = ele.replace("answer21", qesn9);
ele = ele.replace("answer22", qesn10);
ele = ele.replace("answer23", qesn11);

collection = ele;



$("#bodypage").html(collection); 

	
}


function question3(data)
{
	
	
	var obj = data.question;
	var page1=  "<div class=\"col-sm-4\">"+
	"<h2 style=\"text-align: center;font-family:calibri bold;color:#545454; width: 70%;border-bottom: 2px solid red;\">Assesment</h2>"+
	" </div><br>"+

	"<div class=\"col-sm-12\">"+
	"<h6 style=\"font-family: calibri regular;color: #545454;font-size:20px;border-left=5px solid red\">cate1</h6>"+
	"</div><br>"+
	"<div class=\"col-sm-12\">"+
	 "<img src=\"image2\" style=\"width: 200px;height: 200px;float:left\">"+
	 "<textarea rows=\"8\" cols=\"70\" style=\"margin-left:20px;margin-top:20px\" id=\"descriptionn1\"  placeholder=\" Write your Answer Here...\"></textarea>"+

	"</div>";




		var url ="https://toyota-lakshya-onlineassessment.in"
	 
var collection =""; 


var i = 0; 

var ele = "";

	ele = page1;
		
	var cate1 = obj.question;
	var image1 = obj.question_type;


var image_link = obj.image_descriptive[0].reference_image;

var abcd = url+""+image_link;


   ele = ele.replace("Assesment", "Image Descriptive");
ele = ele.replace("cate1", cate1);
ele = ele.replace("image2",abcd);




collection = ele;

console.log(collection);

$("#bodypage").html(collection); 


	
}

function question4(data)
{
	var obj = data.question;

 if(obj.choice.length == "4")
 {


	var page1=  "<div class=\"col-sm-4\">"+
	"<h2 style=\"text-align: center;font-family:calibri bold;color:#545454;width: 80%;border-bottom: 2px solid red; \" >Assesment</h2>"+
	" </div><br>"+

	"<div class=\"col-sm-12\">"+
	"<h6 style=\"font-family: calibri regular;color: #545454;font-size:20px;border-left=5px solid red\">cate1</h6>"+
	"</div><br>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder1\" data-value1=\"id25\" > <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder2\" data-value2=\"id26\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers1</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder3\" data-value3=\"id27\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers2</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder4\" data-value4=\"id28\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers3</label> <br><li>"+
	"</ul>"+
	"</div>"+
		
   "</div></div>";
   
   
	var collection =""; 

	var i = 0; 

	var ele = "";

		ele = page1;
			
		var cate1 = obj.question;
	var image1 = obj.question_type;
	
	var qesn  = obj.choice[0].choice;
	var qesn1 = obj.choice[1].choice;
	var qesn2 = obj.choice[2].choice;
	var qesn3 = obj.choice[3].choice;
	
	
	
	var id25  = obj.choice[0].id;
	var id26 = obj.choice[1].id;
	var id27 = obj.choice[2].id;
	var id28 = obj.choice[3].id;
	
	
	ele = ele.replace("id25", id25);
	ele = ele.replace("id26", id26);
	ele = ele.replace("id27", id27);
	ele = ele.replace("id28", id28);
	
	
	ele = ele.replace("Assesment", "Multiple Choice");
	ele = ele.replace("cate1", cate1);
	
	ele = ele.replace("answers", qesn);
	ele = ele.replace("answers1", qesn1);
	ele = ele.replace("answers2", qesn2);
	ele = ele.replace("answers3", qesn3);
	
	
	
	collection = ele;
	
$("#bodypage").html(collection);

 }

 else if(obj.choice.length == "3")
 {


	var page1=  "<div class=\"col-sm-4\">"+
	"<h2 style=\"text-align: center;font-family:calibri bold;color:#545454;width: 80%;border-bottom: 2px solid red; \" >Assesment</h2>"+
	" </div><br>"+

	"<div class=\"col-sm-12\">"+
	"<h6 style=\"font-family: calibri regular;color: #545454;font-size:20px;border-left=5px solid red\">cate1</h6>"+
	"</div><br>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder1\" data-value1=\"id25\" > <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder2\" data-value2=\"id26\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers1</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder3\" data-value3=\"id27\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers2</label> <br><li>"+
	"</ul>"+
	"</div>"+

		
   "</div></div>";
   
   
	var collection =""; 

	var i = 0; 

	var ele = "";

		ele = page1;
			
		var cate1 = obj.question;
	var image1 = obj.question_type;
	
	var qesn  = obj.choice[0].choice;
	var qesn1 = obj.choice[1].choice;
	var qesn2 = obj.choice[2].choice;
	
	
	
	var id25  = obj.choice[0].id;
	var id26 = obj.choice[1].id;
	var id27 = obj.choice[2].id;
	
	
	ele = ele.replace("id25", id25);
	ele = ele.replace("id26", id26);
	ele = ele.replace("id27", id27);
	
	
	ele = ele.replace("Assesment", "Multiple Choice");
	ele = ele.replace("cate1", cate1);
	
	ele = ele.replace("answers", qesn);
	ele = ele.replace("answers1", qesn1);
	ele = ele.replace("answers2", qesn2);
	
	
	
	collection = ele;
	
$("#bodypage").html(collection);

 }

 else if(obj.choice.length == "2")
 {


	var page1=  "<div class=\"col-sm-4\">"+
	"<h2 style=\"text-align: center;font-family:calibri bold;color:#545454;width: 80%;border-bottom: 2px solid red; \" >Assesment</h2>"+
	" </div><br>"+

	"<div class=\"col-sm-12\">"+
	"<h6 style=\"font-family: calibri regular;color: #545454;font-size:20px;border-left=5px solid red\">cate1</h6>"+
	"</div><br>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder1\" data-value1=\"id25\" > <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder2\" data-value2=\"id26\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers1</label> <br><li>"+
	"</ul>"+
	"</div>"+
	
		
   "</div></div>";
   
   
	var collection =""; 

	var i = 0; 

	var ele = "";

		ele = page1;
			
		var cate1 = obj.question;
	var image1 = obj.question_type;
	
	var qesn  = obj.choice[0].choice;
	var qesn1 = obj.choice[1].choice;
	
	
	
	var id25  = obj.choice[0].id;
	var id26 = obj.choice[1].id;
	
	
	ele = ele.replace("id25", id25);
	ele = ele.replace("id26", id26);
	
	
	ele = ele.replace("Assesment", "Multiple Choice");
	ele = ele.replace("cate1", cate1);
	
	ele = ele.replace("answers", qesn);
	ele = ele.replace("answers1", qesn1);
	
	
	
	collection = ele;
	
$("#bodypage").html(collection);

 }

 else if(obj.choice.length == "5")
 {


	var page1=  "<div class=\"col-sm-4\">"+
	"<h2 style=\"text-align: center;font-family:calibri bold;color:#545454;width: 80%;border-bottom: 2px solid red; \" >Assesment</h2>"+
	" </div><br>"+

	"<div class=\"col-sm-12\">"+
	"<h6 style=\"font-family: calibri regular;color: #545454;font-size:20px;border-left=5px solid red\">cate1</h6>"+
	"</div><br>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder1\" data-value1=\"id25\" > <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder2\" data-value2=\"id26\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers1</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder3\" data-value3=\"id27\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers2</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder4\" data-value4=\"id28\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers3</label> <br><li>"+
	"</ul>"+
	"</div>"+
	"<div class=\"col-sm-12\">"+
	"<ul class=\"list-group\" style=\"list-style-type: none\">"+
	"<li><input type=\"checkbox\" name=\"chk\" id=\"repoFolder5\" data-value5=\"id28_1\"> <label style=\"color:#444444;font-size:16px;font-family: calibri regular\" >answers3_1</label> <br><li>"+
	"</ul>"+
	"</div>"+
		
   "</div></div>";
   
   
	var collection =""; 

	var i = 0; 

	var ele = "";

		ele = page1;
			
		var cate1 = obj.question;
	var image1 = obj.question_type;
	
	var qesn  = obj.choice[0].choice;
	var qesn1 = obj.choice[1].choice;
	var qesn2 = obj.choice[2].choice;
	var qesn3 = obj.choice[3].choice;
	var qesn3_1 = obj.choice[4].choice;

	
	
	
	var id25  = obj.choice[0].id;
	var id26 = obj.choice[1].id;
	var id27 = obj.choice[2].id;
	var id28 = obj.choice[3].id;
	var id28_1 = obj.choice[4].id;

	
	
	ele = ele.replace("id25", id25);
	ele = ele.replace("id26", id26);
	ele = ele.replace("id27", id27);
	ele = ele.replace("id28", id28);
	ele = ele.replace("id28_1", id28_1);

	
	
	ele = ele.replace("Assesment", "Multiple Choice");
	ele = ele.replace("cate1", cate1);
	
	ele = ele.replace("answers", qesn);
	ele = ele.replace("answers1", qesn1);
	ele = ele.replace("answers2", qesn2);
	ele = ele.replace("answers3", qesn3);
	ele = ele.replace("answers3_1", qesn3_1);

	
	
	
	collection = ele;
	
$("#bodypage").html(collection);

 }

 

}


function question5(data)
{

	var obj = data.question;
	var page2=  "<div class=\"col-sm-4\" >"+
	"<h2 style=\"text-align: center;font-family:calibri bold;color:#545454;width: 65%;border-bottom: 2px solid red;\" >Assesment1</h2>"+
	"</div><br>"+

	"<div class=\"col-sm-12\">"+
	"<h6 style=\"font-family: calibri regular;color: #545454;font-size:20px;border-left=5px solid red\">cate1</h6>"+
	"</div><br>"+
	"<div class=\"col-sm-12\">"+
	 "<textarea rows=\"8\" cols=\"70\" id=\"descriptionn\"  placeholder=\" Write your Answer Here...\"></textarea>"+
	"</div>";

   

var collection =""; 

var i = 0; 

var ele = "";

	ele = page2;
		
	var cate1 = obj.question;
	var image1 = obj.question_type;


ele = ele.replace("Assesment1", "Descriptive");
ele = ele.replace("cate1", cate1);


collection = ele;

console.log(collection);

$("#bodypage").html(collection); 
	
}



    //JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
    var imageAddr = "https://toyota-lakshya-onlineassessment.in/media/dealer_profile/68acb877-b4e2-4e43-8dd5-55fa8026d1a0.jpeg"; 
	var downloadSize = 49953; //bytes

    var intervalID = window.setInterval(myCallback, 1000);

    function ShowProgressMessage(msg) 
    {
        if (console) 
        {
            if (typeof msg == "string") 
            {
                //console.log(msg);
            } else 
            {
                for (var i = 0; i < msg.length; i++) 
                {
                    //console.log(msg[i]);
                }
            }
        }
        
        var oProgress = document.getElementById("progress");
        if (oProgress) {
            var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
            oProgress.innerHTML = actualHTML;
        }
    }

    function InitiateSpeedDetection() 
    {
        ShowProgressMessage("Bad");
        window.setTimeout(myCallback, 1);
    };    

    if (window.addEventListener) 
    {
    	setTimeout(InitiateSpeedDetection, 1000);
        //window.addEventListener('load', InitiateSpeedDetection, false);
    } 

    else if (window.attachEvent) 
    {
        //window.attachEvent('onload', InitiateSpeedDetection);
    }

    function myCallback() 
    {
        var startTime, endTime;
        var download = new Image();
        download.onload = function () {
            endTime = (new Date()).getTime();
            showResults();
        }
        
        download.onerror = function (err, msg) {
            ShowProgressMessage("");
        }
        
        startTime = (new Date()).getTime();
        var cacheBuster = "?nnn=" + startTime;
        download.src = imageAddr + cacheBuster;
        
        function showResults() {
            var duration = (endTime - startTime) / 1000;
            var bitsLoaded = downloadSize * 8;
            var speedBps = (bitsLoaded / duration).toFixed(2);
            var speedKbps = (speedBps / 1024).toFixed(2);
            var speedMbps = (speedKbps / 1024).toFixed(2);
            


    if(speedMbps > 1)
    { 	
    	//console.log(speedMbps);
    	ShowProgressMessage([
    			
    			//document.getElementById("abcde").src=imageees[1]
    			 
    			  
    
    				"Excellent"
    					
    					]);
    		
    }

    else if(speedMbps < 1 && speedMbps > 0.5)
    {
    	//document.getElementById("abcde").src=imageees[2]
    	 
		"Good"
	}
	else if(speedMbps < 0.5 && speedMbps > 0.2)
    {
    	//document.getElementById("abcde").src=imageees[2]
    	 
		"Average"
	}
	else if(speedMbps < 0.2)
    {
    	//document.getElementById("abcde").src=imageees[2]
    	 
		"Bad"
	}
	else if(speedMbps < 0.05)
    {    	 
		alert("Slow Internet Detected")
    }

    }
    }
    
    
    
    
    