import { RouterProvider } from "react-router-dom"
import router from "./routes/Router"
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          toastOptions={{
            className: "",
            duration: 6000,
            style: {
              background: "#fff",
              color: "#363636",
            },
          }}
        />
      </div>
    </>
  );
}

export default App
