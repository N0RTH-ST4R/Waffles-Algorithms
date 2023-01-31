var bWidth=50
var tiles={
    'air':" ",
    'stone':"█",
    'gravel':"▒",
    'grass':"_",
    'dirt':"#",
    'cloud':'=',
    'water':'~'
}
var stats={
    "stone":0,
    "gravel":0,
    //"grass":0,
    "dirt":0,
    "clouds":0,
    "water":0
}
var board=[]
function makeBoard(x){
    for(let i=0;i<x;i++){
        board.push([])
        var current=i
        for(let i=0;i<x*2;i++){
            board[current].push(tiles.air)
        }
    }
}
function logBoard(){
    for(let i=0;i<board.length;i++){
        console.log(board[i].join(""))
    }
}
function contains(row,tile){
    var amt=0
    for(let i=0;i<board[row].length;i++){
        if(board[row][i]==tile){
            amt+=1
        }
    }
    return amt
}
function calcDirtLayers(){
    var rows=0
    for(let i=0;i<board.length;i++){
        if(contains(i,tiles.dirt)>0){
            rows+=1
        }
    }
    return rows
}
function genStone(){
    var stoneRatio=100

    for(var l=board.length;l>0;l--){
        for(let i=0;i<board[l-1].length;i++){
            if(stoneRatio>=Math.round(Math.random()*100)){
                board[l-1][i]=tiles.stone
                stats.stone+=1
            }
        }
        stoneRatio-=(board.length/100)*25
    }
}
function genGravel(){
    for(var l=0;l<board.length;l++){
        if(contains(l,tiles.stone)>0){
            for(let i=0;i<board[l].length;i++){
                if(board[l][i]!=tiles.stone){
                    board[l][i]=tiles.gravel
                    stats.gravel+=1
                }
            }
        }
    }
}
function genDirt(){
    var dirtRatio=100
    for(var l=board.length;l>0;l--){
        if(!contains(l-1,tiles.stone)>0){
            for(let i=0;i<board[l-1].length;i++){
                if(dirtRatio>=Math.round(Math.random()*100)){
                    board[l][i]=tiles.dirt
                    stats.dirt+=1
                }
            }
            dirtRatio-=(board.length/100)*50
        }
    }
}
function genWater(){
    for(var l=0;l<board.length;l++){
        if(contains(l,tiles.dirt)>bWidth/1.0000000000001){
            for(let i=0;i<board[l].length;i++){
                if(board[l][i]!=tiles.dirt){
                    board[l][i]=tiles.water
                    stats.water+=1
                }
            }
        }
    }
}
function genGrass(){
    for(var l=board.length;l>0;l--){
        for(let i=0;i<board[l-1].length;i++){
            if(board[l-1][i]==tiles.dirt && board[l-2][i]!=tiles.dirt){
                board[l-2][i]=tiles.grass
            }
        }
    }
}
function genClouds(){
    for(var l=0;l<Math.round(board.length/4);l++){
        for(let i=0;i<Math.round(board[l].length);i++){
            if(Math.round(Math.random()*100)>90){
                board[l][i]=tiles.cloud
                stats.clouds+=1
            }
        }
    }
}
makeBoard(bWidth)
genStone()
genGravel()
genDirt()
genWater()
genClouds()
logBoard()

console.log("Stone: "+stats.stone+", Gravel: "+stats.gravel+", Dirt: "+stats.dirt+", Clouds: "+stats.clouds+", Water: "+stats.water)