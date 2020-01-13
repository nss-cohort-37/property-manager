let buildings = [
    {
        "id": 1,
        "address": "123 Main Street"
    },
    {
        "id": 2,
        "address": "456 Sesame Street"
    },
    {
        "id": 3,
        "address": "21 Jump Street"
    }
]

export const useBuildings = () => buildings.slice()

export const saveBuilding = (newBuildingObject) => {
    buildings.push(newBuildingObject)
}

