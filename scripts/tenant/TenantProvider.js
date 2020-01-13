let tenants = [
    {
        "id": 1,
        "name": "NSS",
        "buildingId": 1
    },
    {
        "id": 2,
        "name": "Daddy's Dogs",
        "buildingId": 2
    },
    {
        "id": 3,
        "name": "Pails & Money",
        "buildingId": 1
    },
    {
        "id": 4,
        "name": "Duck & Dovetail",
        "buildingId": 3
    },
    {
        "id": 5,
        "name": "Anything Inc.",
        "buildingId": 2
    }
]

export const useTenants = () => tenants.slice()

export const saveTenant = (newTenantObject) => {
    tenants.push(newTenantObject)
}

