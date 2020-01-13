import { Tenant } from "../tenant/Tenant.js"

export const BuildingCard = (buildingObject, tenantCollection) => {
    return `
        <section class="business">
            <h4>${buildingObject.address}</h4>
            <ul>
                ${
                    tenantCollection.filter(tenant => {
                        if (buildingObject.id === tenant.buildingId) {
                            return true
                        }
                        return false
                    })
                    .map(tenant => {
                        const tenantHTML = Tenant(tenant)
                        return tenantHTML
                    }).join("")
                }
            </ul>
        </section>
    `
}