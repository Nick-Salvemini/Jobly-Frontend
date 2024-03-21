import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthRoute from "./AuthRoutes";
import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import CompanyList from "../companies/CompanyList";
import ProfileForm from "../profiles/ProfileForm";

function Routes({ login, signup }) {
    console.debug(
        "Routes",
        `login=${login}`,
        `signup=${signup}`
    )

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <AuthRoute exact path="/companies">
                    <CompanyList />
                </AuthRoute>

                <AuthRoute exact path="/companies/:handle">
                    <CompanyDetails />
                </AuthRoute>

                <AuthRoute exact path="/jobs">
                    <JobsList />
                </AuthRoute>

                <AuthRoute path="/profile">
                    <ProfileForm />
                </AuthRoute>

                <Redirect to='/' />
            </Switch>
        </>
    )
}

export default Routes