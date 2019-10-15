const gulp =require("gulp");
const sass =require("gulp-sass");

const uglify =require("gulp-uglify");

//自动生成sass编译后文件
gulp.task("sass",function(){
    return gulp.src("sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\DickiesBig"));
});


//监听任务
gulp.task("watchall",async()=>{
    //监听html,进行复制
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\DickiesBig"))
    })

    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\DickiesBig\\css"));
    });
    //监听sass文件
    gulp.watch("sass/**/*.scss",async()=>{
        gulp.src("sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\Dickies\\css"));
    })

    //监听js文件
    gulp.watch("js/*.js",async()=>{
        gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\DickiesBig\\js"));
    });
    
	
})