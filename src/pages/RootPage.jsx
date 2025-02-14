import { Outlet, useParams } from "react-router";
import { Banner } from "../components/features/Home/Banner";
import { Categories } from "../components/features/Home/Categories";
import { Fragment } from "react";

const RootPage = () => {
  const { id } = useParams();
  return (
    <main className="container max-w-screen-xl mx-auto py-10 space-y-10">
      {!id && (
        <Fragment>
          <Banner />
          <Categories />
        </Fragment>
      )}

      <Outlet />
    </main>
  );
};

export default RootPage;
