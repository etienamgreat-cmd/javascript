// const a = 12
// const b = 13


let buildings = [];
for (let b = 1; b <= 3; b++) {
    let floors = [];
    for (let f = 1; f <= 10; f++){
        let rooms = [];
        for (let r = 1; r <= 20; r++){
            rooms.push(true);
        }
        floors.push(rooms);
    }
    buildings.push(floors);
}