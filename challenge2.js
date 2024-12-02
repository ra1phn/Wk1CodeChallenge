//declaration of car speed
let vehicleSpeed;

//funtion to calculate  demerit points
const speedDetector = (vehicleSpeed) => {
    if (vehicleSpeed <= 70){
        console.log('Ok');
    } else (vehicleSpeed > 70) 
        const demeritPoints = Math.floor ((vehicleSpeed - 70)/5)  //math.floor to round down
        if (demeritPoints <= 12){
            console.log (`Points: ${demeritPoints}`);
        } else {
            console.log('License suspended');
        }
    };

//test case    
vehicleSpeed = 150; // license suspended
speedDetector(vehicleSpeed); 
