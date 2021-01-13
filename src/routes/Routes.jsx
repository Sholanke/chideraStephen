import React from "react";
import { HashRouter, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { HomePage } from "../pages";
import { AboutPage } from "../pages/About";
import { BlogPage } from "../pages/Blog";
import { ServicesPage } from "../pages/Services";

export default function Routes() {
  return (
    <HashRouter>
      <RouteWithDefaultLayout
        exact
        hasFooterSpacer
        path="/"
        component={HomePage}
      />
      <RouteWithDefaultLayout exact path="/about" component={AboutPage} />
      <RouteWithDefaultLayout exact path="/blog" component={BlogPage} />
      <RouteWithDefaultLayout
        exact
        hasFooterSpacer
        path="/services"
        component={ServicesPage}
      />
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
