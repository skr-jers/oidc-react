import React from "react";
import { AuthConsumer } from "../auth/AuthProvider";

export const Logout = () => (
    <AuthConsumer>
        {({ logout }) => {
            logout();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);