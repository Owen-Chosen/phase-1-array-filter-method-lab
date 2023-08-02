// Code your solution here

function findMatching (driversNames, name) {
    return driversNames.filter ((currentName) => {
        if (currentName.toUpperCase() === name.toUpperCase()) {
            return currentName; } 
    });
}

function fuzzyMatch (driversNames, name) {
    return driversNames.filter ((currentName) => {
        let isComprise = false;
        for (let i = 0; i < name.length; i++ ) {
            if (name.charAt(i).toUpperCase() == currentName.charAt(i).toUpperCase()) isComprise = true;
        }
        if (isComprise) return currentName;
    });
}

function matchName(drivers, name) {
    return drivers.filter ((driver) => {
        if (driver.name.toUpperCase() === name.toUpperCase()) return driver;
    });
}
