var historyData = [
    {
        "classesName":"Java入门",
        "classesHref":"/home/classes",
        "className":"第二章 第二课时",
        "cover":"/image/cover/java.png",
        "progress":"85%",
        "href":"/home/classes/class",
        "time":"2017-07-04"
    },
    {
        "classesName":"JavaEE理解",
        "classesHref":"/home/classes",
        "className":"第一章 第三课时",
        "cover":"/image/cover/javaee.png",
        "progress":"5%",
        "href":"/home/classes/class",
        "time":"2017-07-03"
    },
    {
        "classesName":"Spring入门",
        "className":"第一章 第二课时",
        "cover":"/image/cover/spring.png",
        "progress":"10%",
        "href":"/home/classes/class",
        "time":"2017-07-03"
    },
    {
        "classesName":"Python入门",
        "className":"第一章 第一课时",
        "cover":"/image/cover/python.png",
        "progress":"35%",
        "href":"/home/classes/class",
        "time":"2017-07-01"
    },
    {
        "classesName":"JavaEE理解",
        "className":"第一章 第一课时",
        "cover":"/image/cover/javaee.png",
        "progress":"20%",
        "href":"/home/classes/class",
        "time":"2017-07-01"
    },
]
var recommendData = [
    {
        color: "yellow",
        courseName: "SpringCloud入门",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "React入门",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "Spring理解",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "SpringCloud理解",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "JavaEE进阶",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "Python进阶",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "MySQL进阶",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "Spring实战",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "JavaEE实战",
        courseUrl: "/home/classes",
    },
    {
        color: "yellow",
        courseName: "Java实战",
        courseUrl: "/home/classes",
    },
]
var hotSearchData = [
    {
        color: "blue",
        courseName: "React",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "Java",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "MySQL",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "PhotoShop",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "PHP",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "需求分析",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "Express",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "产品设计",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "Axure RP",
        courseUrl: "/home/classes",
    },
    {
        color: "blue",
        courseName: "JavaEE",
        courseUrl: "/home/classes",
    }
]
exports.history = function(fn){
    fn({code:200,result:'ok',data:{"history":historyData}});
}
exports.recommend = function(fn){
    fn({code:200,result:'ok',data:{"recommend":recommendData}});
}
exports.hotSearch = function(fn){
    fn({code:200,result:'ok',data:{"hotSearch":hotSearchData}});
}
exports.learning = function(fn){
	fn({code:200,result:'ok',data:{"history":historyData,"recommend":recommendData,"hotSearch":hotSearchData}});
}