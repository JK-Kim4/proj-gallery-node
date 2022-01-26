var main = {

    init : function(){
        var _this = this;
        _this.first_init();
    },
    //전체 조회
    first_init : function(){
        $.ajax({
            url : "/gallery/selectAll",
            type : "GET",
            contentType : "applicaiton/json; charset=utf-8",
            success : function(data){
                console.log("successed");
                var html = "<img src="+data.data[0].imgurl+" alt='test data'>";
                $(".container").html(html);

                html = "";

                for(let i = 0; i < data.data.length; i++){
                    html += "<button id=>"+(i+1)+"</button>";
                }
                $(".remote").html(html);
            },
            error : function(err){
                console.log("error occuer");
                console.log(err);
            }
        });
    },
    //특정 사진 조회
    get_photo : function(){

    }
}

main.init();