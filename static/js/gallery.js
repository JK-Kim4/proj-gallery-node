var main = {

    init : function(){
        var _this = this;
        _this.first_init();


        //사진 이동 
        $(document).on("click", ".btnMv", function(){
            var val = $(this).attr('val');
            _this.get_photo(val);
        });
    },
    //전체 조회
    first_init : function(){
        console.log("first init");
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
                    html += "<button class='btnMv' val='"+data.data[i].id+"'>"+(data.data[i].id)+"</button>";

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
    get_photo : function(param){
        console.log("id = " +param);
    },
}

main.init();