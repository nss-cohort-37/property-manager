import { useBuildings } from "../building/BuildingProvider.js"
import { saveTenant } from "./TenantProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tenantForm")

export const TenantForm = () => {
    const buildings = useBuildings()

    eventHub.addEventListener("buildingStateChanged", e => {
        // Get the updated state
        const newBuildings = useBuildings()

        // Render the updated state as HTML
        render(newBuildings)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveTenant") {
            // Get what user entered
            const newBusiness = document.querySelector("#businessName").value
            const selectedBuilding = document.querySelector("#buildingSelect").value
            // building--1
            const [foo, buildingId] = selectedBuilding.split("--")


            // Change app state
            const newTenantObject = {
                "name": newBusiness,
                "buildingId": parseInt(buildingId, 10)
            }
            saveTenant(newTenantObject)

            // Let others know that app state changed
            const message = new CustomEvent("tenantStateChanged")
            eventHub.dispatchEvent(message)

        }
    })

    const render = (buildingArray) => {
        contentTarget.innerHTML = `
            <h3>Add Tenant</h3>
            <div>
                Business: <input type="text" id="businessName" />
            </div>
            <div>
                Building: <select id="buildingSelect">
                    <option>Please select a building...</option>
                    ${
                        buildingArray.map(building => {
                            return `<option value="building--${building.id}">${building.address}</option>`
                        }).join("")
                    }
                </select>
            </div>
            <div>
                <button id="saveTenant">Save</button>
            </div>
        `
    }

    render(buildings)
}