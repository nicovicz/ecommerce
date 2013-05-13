
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

