import create from "zustand";
import immer from "immer";
import { subscribeWithSelector } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export enum NotificationType {
    SUCCESS,
    ERROR,
}

export type Notification = {
    key: string;
    msg: string;
    type: NotificationType;
}

type NotificationsStore = {
    id: any;
    notifications: Array<Notification>;
    addNotification: (msg: string, type: NotificationType) => void;
    removeNotification: (key: string) => void;
}

export const useNotifications = create<NotificationsStore>()(
    subscribeWithSelector(
        immer(set => ({
            id: 0,
            notifications: [],
            addNotification: (msg: string, type: NotificationType) => {
                // Set((state: { notifications: Array<Notification> }) => {
                //     const notifications = [...state.notifications];
                //     notifications.push({ key: uuidv4(), msg, type });
                //     return { notifications };
                //     // notifications: [...state.notifications, { key: uuidv4(), msg }],
                // });
                set(state => ({ id: state.id + 1 }));
            },
            removeNotification: (key: string) => {
                set((state: { notifications: Array<Notification> }) => ({
                    notifications: state.notifications.filter((i: Notification) => i.key !== key),
                }));
            },
        })),
    ),
);

