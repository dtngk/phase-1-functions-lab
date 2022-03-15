// Code your solution in this file!
function distanceFromHqInBlocks(number){
    return (Math.abs(number - 42));
};

function distanceFromHqInFeet(number){
    return (distanceFromHqInBlocks(number) * 264);
};

function distanceTravelledInFeet(start, destination){
    return (Math.abs(destination - start) * 264);
};

function calculatesFarePrice(start, destination){
    var distance = distanceTravelledInFeet(start, destination);
    var price = 0;
    
    if (distance < 400){
        return 0;
    }

    if (distance >= 2500){
        return ("cannot travel that far");
    };

    if (distance > 2000){

        return 25;
        
    }else if ((distance > 400) && (distance < 2000)){

        return ((distance - 400) * 0.02);

    }
};
    

