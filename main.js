var input = null;
var img = null;
var output = null;
var canvasF = null;
var canvasF2 = null;
function loadImage(){
  input =
    document.getElementById("fileInput");
  canvasF = document.getElementById("frame");
  img = new SimpleImage(input);
  img.drawTo(canvasF);
}
function imageIsLoaded(input)
{
  if(input==null){
    alert("image not loaded!!!");
    return;
  }
  else
    {
      alert("picture loaded");
      return true;
    }
}
function doGray(){
  if(imageIsLoaded(input))
    filterGray(img);
  canvasF2 = document.getElementById("frame2");
  img.drawTo(canvasF2);
}
function filterGray(img)
{
  output = new SimpleImage(img.getWidth(), img.getHeight());
  for(var pixel of img.values())
    {
      var pix = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
      var imgPix = img.getPixel(pixel.getX(), pixel.getY());
      imgPix.setRed(pix);
      imgPix.setBlue(pix);
      imgPix.setGreen(pix);
      output.setPixel(pixel.getX(), pixel.getY(), imgPix);
    }
  alert("filter applied");
  return output;
}
function reset(){
  img.drawTo(canvasF);
}