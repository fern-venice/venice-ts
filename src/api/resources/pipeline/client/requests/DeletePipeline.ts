/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Venice } from "@fern-api/venice";

export interface DeletePipeline {
    id?: string;
    sourceId?: string;
    sourceState?: string;
    destinationId?: string;
    destinationState?: string;
    linkOptions?: string;
    createdAt?: string;
    updatedAt?: string;
    lastSyncStartedAt?: string;
    lastSyncCompletedAt?: string;
    /**
     * Preference
     */
    prefer?: Venice.Return;
}