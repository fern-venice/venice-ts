/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Venice } from "@fern-api/venice";

export interface GetInstitution {
    id?: string;
    standard?: string;
    external?: string;
    createdAt?: string;
    updatedAt?: string;
    providerName?: string;
    /**
     * Filtering Columns
     */
    select?: string;
    /**
     * Ordering
     */
    order?: string;
    /**
     * Limiting and Pagination
     */
    offset?: string;
    /**
     * Limiting and Pagination
     */
    limit?: string;
    /**
     * Limiting and Pagination
     */
    range?: string;
    /**
     * Limiting and Pagination
     */
    rangeUnit?: string;
    /**
     * Preference
     */
    prefer?: Venice.Count;
}
