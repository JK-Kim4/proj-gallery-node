var main = {

    init : function(){
        var _this = this;
        $("#btn-upload").on("click", function(){
            _this.upload_file();
        });

    },
    upload_file : function(){
        var form = $("#file-form")[0];
        var formData = new FormData(form);
        console.log(form);
        console.log(formData);
        $.ajax({
            url : "/s3/api/file/upload",
            type : "POST",
            enctype : "multipart/form-data",
            data: formData,
            dataType : "json",
            processData : false,
            contentType : false,
            cache: false,
            success : function(data){
                console.log("upload success");
            },
            error : function(err){
                console.log("upload fail : " + err);
            }
        });
    }
}

main.init();

