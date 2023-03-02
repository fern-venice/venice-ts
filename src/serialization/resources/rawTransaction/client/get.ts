/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Venice } from "@fern-api/venice";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.rawTransaction.get.Response.Raw, Venice.RawTransaction[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).RawTransaction));

export declare namespace Response {
    type Raw = serializers.RawTransaction.Raw[];
}