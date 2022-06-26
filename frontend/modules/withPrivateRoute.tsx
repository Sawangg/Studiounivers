import React from "react";
import Router from "next/router";

const login = "/login";

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => ({ auth: null });

// eslint-disable-next-line import/no-anonymous-default-export
export default (WrappedComponent: JSX.IntrinsicAttributes) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async (context: { res: { writeHead: (arg0: number, arg1: { Location: string; }) => void; end: () => void; }; }) => {
        const userAuth = checkUserAuthentication();

        if (!userAuth?.auth) {
            // Handle server-side and client-side rendering.
            if (context.res) {
                context.res?.writeHead(302, {
                    Location: "/login",
                });
                context.res?.end();
            } else {
                Router.replace("/login");
            }
        } else if (WrappedComponent.getInitialProps) {
            const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: userAuth });
            return { ...wrappedProps, userAuth };
        }

        return { userAuth };
    };

    return hocComponent;
};
