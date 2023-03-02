/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface RawCommodity {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    sourceId?: string;
    standard?: unknown;
    external?: unknown;
    createdAt: string;
    updatedAt: string;
    providerName: string;
    /**
     * Note:
     * This is a Foreign Key to `resource.id`.<fk table='resource' column='id'/>
     */
    ledgerResourceId?: string;
}
