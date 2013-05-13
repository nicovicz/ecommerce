<<<<<<< HEAD
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 Q(c){9 d=0;r(P $.5("p")==="N"){9 e=1m 10();e.G({k:c,n:1});$.5("p",u.V(e));d=1;$.5("m",d)}A{9 f=u.E($.5("p"));9 g=1;9 h=\'\';$.t(f,6(a,b){r(b.k===c){h=a;g=b.n+1}});r(g>1){f[h]={k:c,n:g}}A{d=x($.5("m"))+1;$.5("m",d);f.G({k:c,n:g})}$.5("p",u.V(f))}$("#m").q("("+$.5("m")+")")}6 X(){9 h=u.E($.5("p"));9 i=0;9 j=$("<1g>").D("v","1d").l("<1c>");$.I("J.K",6(f){$.t(f,6(d,e){$.t(h,6(a,b){r(e.k==b.k){9 c=x(b.n)*x(e.L);i+=c;s="<7><8 16=\\"4\\"><M R=\\"./S/"+e.T+"\\" v=\\"U\\" 13=\\"U\\"/></8></7>";s+="<7><8><o y=\\"z\\">12: "+e.Z+"</o></8></7>";s+="<7><8><o y=\\"z\\">11: "+b.n+"</o></8></7>";s+="<7><8><o y=\\"z\\">1h: "+c.Y(3)+"</o></8></7>";j.l(s)}})});9 g="<7><8 14=\\"2\\">15 : <w> O "+i.Y(3)+"</w></8></7>";j.l(g)});$("#17").18(j)}$(19).1a(6(){r(P $.5("p")!=="N"){$("#m").q("("+$.5("m")+")")}$.I("J.K",6(c){$.t(c,6(a,b){$("#1b").l($("<H>").F("1e 1f").C({"B-1i":"1j","B-1k":"1l"}).l($("<M>").W("R","./S/"+b.T)).l($("<w>").q(b.Z)).l($("<1n>").q("O "+b.L)).l($("<H>").F("1o 1p 1q 1r 1s").W("k",b.k).D("1t","Q("+b.k+")").C("v","1u").q("1v")))})});$("#1w").1x(6(e){e.1y();X();$(1z).1A()})});',62,99,'|||||cookie|function|tr|td|var|||||||||||id|append|total|qty|span|basket_list|text|if|carts|each|JSON|width|h5|parseInt|class|cart_name|else|margin|css|attr|parse|addClass|push|div|getJSON|db|json|price|img|undefined|IDR|typeof|addCart|src|public|display|64|stringify|prop|toListView|toFixed|name|Array|Qty|Name|height|colspan|Total|rowspan|inline_content|html|document|ready|items|tbody|500|three|columns|table|Price|bottom|20px|left|12px|new|h6|pretty|medium|primary|btn|buy|onClick|80|Buy|cart|click|preventDefault|this|fancybox'.split('|'),0,{}))
=======
function addCart(id){	
		
	var total =0;
	if( typeof $.cookie("basket_list") === "undefined" ){
					
		var items_list = new Array();
		items_list.push({id:id,qty:1});
		$.cookie("basket_list",JSON.stringify(items_list));
		total = 1;
		$.cookie("total",total);
					
	}else{
	
		var array_items_list = JSON.parse($.cookie("basket_list"));
		var add_qty = 1;
		var import_index='';
		$.each(array_items_list,function(index,value){
							
				if(value.id === id){
					import_index = index;
					add_qty = value.qty + 1;
								
				}
		});
		
		if (add_qty > 1 ){
			array_items_list[import_index]={id:id,qty:add_qty};
		}else{
			total = parseInt($.cookie("total"))+ 1;
			$.cookie("total",total);
			array_items_list.push({id:id,qty:add_qty});
		}
			$.cookie("basket_list",JSON.stringify(array_items_list));
	}
			
	$("#total").text("(" + $.cookie("total") + ")");		
	
}
function toListView(){
	
		var json_data = JSON.parse($.cookie("basket_list"));
	
		var grandTotal = 0;
		var mytable = $("<table>").attr("width","500").append("<tbody>");
		$.getJSON("db.json",function(result){
			
			$.each(result,function(index,value){
					
					$.each(json_data,function(index2,value2){
						if(value.id == value2.id){
							var pay = parseInt(value2.qty) * parseInt(value.price);
							grandTotal +=pay;
							carts = "<tr><td rowspan=\"4\"><img src=\"./public/"+value.display+"\" width=\"64\" height=\"64\"/></td></tr>";
							carts +="<tr><td><span class=\"cart_name\">Name: " +value.name+"</span></td></tr>";
							carts +="<tr><td><span class=\"cart_name\">Qty: " +value2.qty+"</span></td></tr>";
							carts +="<tr><td><span class=\"cart_name\">Price: " +pay.toFixed(3)+"</span></td></tr>";
							mytable.append(carts);
						}
					});
					
					
				
			});
			
			var grand = "<tr><td colspan=\"2\">Total : <h5> IDR "+grandTotal.toFixed(3)+"</h5></td></tr>";
			mytable.append(grand);
		});
		
		$("#inline_content").html(mytable);
}
$(document).ready(function(){
	
	if ( typeof $.cookie("basket_list") !== "undefined" ){
		$("#total").text("(" + $.cookie("total") + ")");
	}
	
	$.getJSON("db.json",function(result){
	
		
		$.each(result,function(index,value){
			
			$("#items").append($("<div>").addClass("three columns").css({"margin-bottom":"20px","margin-left":"12px"})
				.append($("<img>").prop("src","./public/"+value.display))
				.append($("<h5>").text(value.name))
				.append($("<h6>").text("IDR " + value.price))
				.append($("<div>").addClass("pretty medium primary btn buy").prop("id",value.id).attr("onClick","addCart("+value.id+")").css("width","80").text("Buy"))
			);
			
			
		});
	});
	
	
	
	
	$("#cart").click(function(e){
		
		e.preventDefault();
		
		toListView();
		$("#inline").css("display","block");
		$(this).fancybox({'onClosed':function(){$("#inline").css("display","none");}});
		
		
		
						
					
	});
	
	
});
>>>>>>> update  forgotten bug
