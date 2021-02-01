const drivers = ["Milo", "Otis", "Garfield"];

// drivers.push("Milo", "Otis", "Garfield")

function destructivelyAppendDriver(name) {
    drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
    drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop("Garfield")
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift("Milo")
}

const copyOfDrivers = drivers.slice()

function appendDriver(name) {
    copyOfDrivers.push("Broom")
    return copyOfDrivers
}

const secondCopyOfDrivers = drivers.slice()

function prependDriver(name) {
    secondCopyOfDrivers.unshift("Arnold")
    return secondCopyOfDrivers
}
    
const thirdCopyOfDrivers = drivers.slice()

function removeLastDriver(name) {
    thirdCopyOfDrivers.pop("Garfield")
    return thirdCopyOfDrivers
}

const fourthCopyOfDrivers = drivers.slice()

function removeFirstDriver(name) {
    fourthCopyOfDrivers.shift("Milo")
    return fourthCopyOfDrivers
}