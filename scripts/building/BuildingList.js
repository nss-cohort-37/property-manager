import { useBuildings } from "./BuildingProvider.js"
import { useTenants } from "../tenant/TenantProvider.js"
import { BuildingCount } from "./BuildingCount.js"
import { BuildingCard } from "./BuildingCard.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".buildingList")


export const BuildingList = () => {
    const buildings = useBuildings()
    const tenants = useTenants()

    const render = () => {
        contentTarget.innerHTML = `
            ${BuildingCount(buildings.length)}

            ${
                buildings.map(
                    building => {
                        return BuildingCard(building, tenants)
                    }
                ).join("")
            }
        `
    }

    render()
}