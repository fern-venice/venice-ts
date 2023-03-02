/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Venice } from "@fern-api/venice";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.institution.get.Response.Raw, Venice.Institution[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Institution));

export declare namespace Response {
    type Raw = serializers.Institution.Raw[];
}