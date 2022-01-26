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
                console.log("data = " + data);
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