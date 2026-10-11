import type { NativeChatDrafts } from "../../app/native-bridge.ts";
import type { NativeConversationBridge } from "../../app/native-conversation-types.ts";
import type { NativeDeviceSettingsCapability } from "../../app/native-device-settings.ts";
import type { NativeGatewaysCapability } from "../../app/native-gateways.runtime.ts";
import type { NativeNotificationsCapability } from "../../app/native-notifications.ts";
import { projectEvents, projectOwner } from "./projection.ts";

export function projectNativeChatDrafts(source: NativeChatDrafts) {
  return projectEvents<NativeChatDrafts, string>(source, {
    subscribe: (drafts, listener) => drafts.subscribe(listener),
  });
}

export function projectNativeConversation(source: NativeConversationBridge) {
  return projectOwner(source, (conversation) => ({
    presentation: conversation.presentation,
    supportsSessionActions: conversation.supportsSessionActions,
  }));
}

export function projectNativeDeviceSettings(source: NativeDeviceSettingsCapability) {
  return projectOwner(source, (settings) => settings.snapshot);
}

export function projectNativeNotifications(source: NativeNotificationsCapability) {
  return projectOwner(source, (notifications) => notifications.snapshot);
}

export function projectNativeGateways(source: NativeGatewaysCapability) {
  return projectOwner(source, (gateways) => gateways.snapshot);
}
