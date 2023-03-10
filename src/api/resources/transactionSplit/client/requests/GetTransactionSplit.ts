/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Venice } from "@fern-api/venice";

export interface GetTransactionSplit {
    transactionId?: string;
    key?: string;
    amountQuantity?: string;
    amountUnit?: string;
    accountId?: string;
    data?: string;
    updatedAt?: string;
    createdAt?: string;
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
