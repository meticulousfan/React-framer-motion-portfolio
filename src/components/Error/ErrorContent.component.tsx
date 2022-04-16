import PageHeader from "../UI/PageHeader.component";

/**
 * Renders error page (404 not found error)
 * @function ErrorContent
 * @returns {JSX.Element} - Rendered component
 */

const ErrorContent = (): JSX.Element => (
  <main id="maincontent">
    <div className="mt-32 bg-graybg">
      <PageHeader>Side ikke funnet</PageHeader>
      <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
        <div
          id="error-container"
          className="container mx-auto bg-white rounded shadow mb-36 sm:mb-4"
        >
          <div className="p-4 mx-auto mt-4 h-96 sm:h-auto flex justify-center items-center sm:block">
            <div className="p-4 text-lg rounded ">
              <div className="mt-0 sm:mt-2 xs:mt-2">
                <h1 className="h-64 text-center text-xl">Side ikke funnet</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default ErrorContent;