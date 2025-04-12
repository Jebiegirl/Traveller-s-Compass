import { Route, Switch } from "wouter";
import { ProtectedRoute } from "@/lib/protected-route";
import HomePage from "@/pages/home-page";
import DestinationsPage from "@/pages/destinations";
import DestinationDetailsPage from "@/pages/destination-details";
import BucketListPage from "@/pages/bucket-list";
import AboutPage from "@/pages/about";
import AuthPage from "@/pages/auth-page";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/destinations" component={DestinationsPage} />
      <Route path="/destination/:id" component={DestinationDetailsPage} />
      <ProtectedRoute path="/bucket-list" component={BucketListPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/auth" component={AuthPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}