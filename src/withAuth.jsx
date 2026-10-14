import React from "react";

function withAuth(OriginalComponent) {
return function EnhancedComponent({ isLoggedIn, ...props }) {
    if (!isLoggedIn) {
    return <h2>Please Login First!</h2>;
    }

    return <OriginalComponent {...props} />;
};
}

export default withAuth;
