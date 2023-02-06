var tiles={
    "player":"@",
    "ground":".",
    "wall":"#",
    "void":" "
}
var width=16
var board=[]

createBoard=function(x){
    for(let i=0;i<x;i++){
        board.push([])
        var row=board[i]
        if(i==0 || i==x-1){
            for(let i=0;i<x;i++){
                row.push(tiles.wall)
            }
        }else{
            row.push(tiles.wall)
            for(let i=0;i<x-2;i++){
                row.push(tiles.ground)
            }
            row.push(tiles.wall)
        }
    }
}
var reachMap=[]
function mapReachableTiles(x,y){
    var lastChecked=[]
    if(board[y][x+1]=='.'){
        reachMap[y][x+1]=='.'
        mapReachableTiles(y,x+1)
    }
    if(board[y+1][x]=='.'){
        reachMap[y+1][x]=='.'
        mapReachableTiles(y+1,x)
    }
    if(board[y][x-1]=='.'){
        reachMap[y][x-1]=='.'
        mapReachableTiles(y,x-1)
    }
    if(board[y-1][x]=='.'){
        reachMap[y-1][x]=='.'
        mapReachableTiles(y-1,x)
    }
    lastChecked.push([x,y])
}

function logBoard(){
    for(let i=0;i<board.length;i++){
        console.log(board[i].join(" "))
    }
}
function logBoardAndReach(){
    for(let i=0;i<board.length;i++){
        console.log(board[i].join(" ")+"    "+reachMap[i].join(" "))
    }
}
createBoard(width)
mapReachableTiles(0,0)