/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Venice } from "@fern-api/venice";

export interface DeleteIntegration {
    id?: string;
    config?: string;
    createdAt?: string;
    updatedAt?: string;
    providerName?: string;
    /**
     * Preference
     */
    prefer?: Venice.Return;
}
