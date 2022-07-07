/* eslint-disable callback-return */
import React, { DetailedHTMLProps, HTMLAttributes, useMemo, useRef } from "react";

export const NotificationsHub: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    // const { removeNotification, idd } = useNotifications();
    // const notificationsRef = useRef(useNotifications.getState().notifications);
    const cancelMap = useMemo(() => new WeakMap(), []);
    const notifRef = useRef<HTMLDivElement>(null);

    // useNotifications.subscribe(
    //     state => state.id,
    //     (newValue, previousValue) => console.log(newValue, previousValue),
    // );

    // useEffect(() => useNotifications.subscribe(
    //     state => (notificationsRef.current = state.notifications),
    // ), []);

    // const transitions = useTransition(null, {
    //     from: { opacity: 0, height: 0, life: "100%" },
    //     keys: item => item.key,
    //     enter: item => async (next, cancel) => {
    //         cancelMap.set(item, cancel);
    //         // eslint-disable-next-line no-inline-comments
    //         await next({ opacity: 1 /* Height: refMap.get(item).offsetHeight */ });
    //         await next({ life: "0%" });
    //     },
    //     leave: [{ opacity: 0 }, { height: 0 }],
    //     onRest: (_result, _ctrl, item) => {
    //         removeNotification(item.key);
    //     },
    //     config: (_item, _index, phase) => key => (phase === "enter" && key === "life" ? { duration: 3000 } : { tension: 125, friction: 20, precision: 0.1 }),
    // });

    return (
        <div className="fixed w-1/6 flex ml-auto bottom-12 right-12 z-50" ref={notifRef}>
            {/* {transitions(({ life, ...style }, item) => (
                <animated.div style={style}>
                    yo
                    <animated.div style={{ right: life }}>
                        z
                    </animated.div>
                    <button onClick={e => {
                        e.stopPropagation();
                        if (cancelMap.has(item)) cancelMap.get(item);
                    }}>X</button>
                </animated.div>
            ))} */}
        </div>
    );
};

/* Colors:
red: #5f2120 #ffe3e3
green: #416442 #d6f8d6
orange: #724b13 #fff4e5
blue: #2a637d #c4e7f7
*/
