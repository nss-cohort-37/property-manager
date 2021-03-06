import { saveBuilding } from "./BuildingProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".buildingForm")

export const BuildingForm = () => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveBuilding") {
            // Get what user entered
            const newAddress = document.querySelector(".address").value

            const newBuildingObject = {
                "id": Math.floor(Math.random() * 1000) + 4,
                "address": newAddress
            }

            // Change the app state
            saveBuilding(newBuildingObject)

            // Dispatch a custom event that state was changed
            const message = new CustomEvent("buildingStateChanged")
            eventHub.dispatchEvent(message)
        }
    })


    const render = () => {
        contentTarget.innerHTML = `
            <h3>Add Building</h3>
            <div>
                Address: <input type="text" class="address">
            </div>
            <div>
                <button id="saveBuilding">Save</button>
            </div>
        `
    }

    render()
}