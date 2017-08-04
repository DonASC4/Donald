//ID = f0076ace
//KEY = dbdbdf5eba2147b939e359d87e7bb18c

var my_ID = "f0076ace",
my_KEY = "dbdbdf5eba2147b939e359d87e7bb18c";

var bigMacURL = "https://api.nutritionix.com/v1_1/search/Big%20Mac?results=0:5&fields=item_name,brand_name,item_id,nf_calories&appId="+my_ID+"&appKey="+my_KEY;

$.ajax({
    url:bigMacURL,
    success:function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2>This " + name + " is "+cals+" calories!</h2>")
    }
});
