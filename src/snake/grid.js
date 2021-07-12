
const grid_size = 20

export function randomGridPosition(){
    return{
        x: Math.floor(Math.random() * grid_size) + 1,
        y: Math.floor(Math.random() * grid_size) + 1
    }
}

export function hitWall(pos){
    return (
        pos.x < 1  ||  pos.x > grid_size || pos.y < 1  ||  pos.y > grid_size 
    )
}