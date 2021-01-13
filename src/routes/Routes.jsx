import React from "react";
import { HashRouter, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { HomePage } from "../pages";
import { AboutPage } from "../pages/About";
import { BlogPage } from "../pages/Blog";

export default function Routes() {
  return (
    <HashRouter>
      <RouteWithDefaultLayout
        exact
        path="/"
        hasFooterSpacer={true}
        component={HomePage}
      />
      <RouteWithDefaultLayout exact path="/about" component={AboutPage} />
      <RouteWithDefaultLayout exact path="/blog" component={BlogPage} />
    </HashRouter>
  );
}

function RouteWithDefaultLayout({
  children,
  hasFooterSpacer,
  component: Component,
  ...props
}) {
  const layoutProps = {
    hasFooterSpacer,
  };
  return (
    <Route
      {...props}
      component={() => (
        <DefaultLayout {...layoutProps}>
          <Component />
        </DefaultLayout>
      )}
    >
      {!!children && <DefaultLayout {...layoutProps}>{children}</DefaultLayout>}
    </Route>
  );
}
