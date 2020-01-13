import { useBuildings } from "./BuildingProvider.js"
import { useTenants } from "../tenant/TenantProvider.js"
import { BuildingCount } from "./BuildingCount.js"
import { BuildingCard } from "./BuildingCard.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".buildingList")


export const BuildingList = () => {
    const buildings = useBuildings()
    const tenants = useTenants()

    eventHub.addEventListener("buildingStateChanged", event => {
        const updatedTenants = useTenants()
        const updatedBuildings = useBuildings()
        render(updatedBuildings, updatedTenants)
    })

    eventHub.addEventListener("tenantStateChanged", event => {
        const updatedTenants = useTenants()
        const updatedBuildings = useBuildings()
        render(updatedBuildings, updatedTenants)
    })

    const render = (arrayOfBuildings, arrayOfTenants) => {
        contentTarget.innerHTML = `
            ${BuildingCount(arrayOfBuildings.length)}

            ${
                arrayOfBuildings.map(
                    building => {
                        return BuildingCard(building, arrayOfTenants)
                    }
                ).join("")
            }
        `
    }

    render(buildings, tenants)
}