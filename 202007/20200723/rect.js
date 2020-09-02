function getPerimeter(length,width){
    return 2*(length+width);
}
function getArea(length,width){
    return length*width;
}
module.exports={
    getPerimeter:getPerimeter,
    getArea:getArea
}