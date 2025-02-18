import { Suspense } from 'react';
import { BrowserRouter } from 'react-router';
import Loader from './components/Loader';
import Sidebar from './navigation/Sidebar';
import { SidebarProvider } from './context/CounterContext';
import routes from './navigation/routes';
import { sidebar_sections, profile_menu } from './components/sidebarLayouts/options';

function App(props) {

  // view info handler
  const viewInfoHandler = () => alert("The full documentation is provided at this link.");

  // exit handler
  const onExitHandler = () => alert("Do you really want to leave?");

  // profile dropdown event
  const profileDropdownHandler = (event, value) => {
    event.preventDefault(); // Oldini oladi
    console.log(value);

    if (value?.href === "/login") {
      // The logout code is written here.
    }
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <SidebarProvider>
          <div className='max-w-[2200px] m-auto'>
            <Sidebar
              user={{
                name: "Admin", // user name
                image: "", // default
              }}
              routes={routes}
              sections={sidebar_sections} // sidebar section
              darkMode="#121212" // working with localstorage, name is darkMode (boolean type)
              sidebarOptions={{
                bgColor: "#171745", // default #012C6E, #171745, #1D2733, #1d2733, #222326, #2B2C41
                bgImage: "", // default
                logoInfo: {
                  visibleLogo: true,
                  image: "",
                  width: "38px",
                  height: "38px",
                  borderRadius: "4px",
                  textColor: "#fff",
                  chevronLeftColor: "#fff",
                  logoName: {
                    visible: true,
                    name: "Logo name",
                    fontSize: "14px",
                    info: "Welcome",
                  },
                },
                sectionItem: {
                  fontSize: "12px", // default
                  bgColor: "#24246b", // default #002361, #24246b, #2A323E, #1c324d, #2c3140, #41415D
                  darkMode: "#292727",
                  textColor: "#fff",
                  activeColor: "#FFB620",
                  paddingY: "8px", // default
                  paddingX: "14px", // default
                  borderRadius: "7px", // default
                  exit: {
                    visible: true, // default
                    name: "Exit",
                    onExitHandler: onExitHandler
                  },
                },
                info: {
                  visible: true, // default
                  bgColor: "#24246b", // default #002361
                  content: {
                    top: "Need help?", // default
                    bottom: "Check out our documentation", // default
                    btn: {
                      bgColor: "white", // default
                      textColor: "#012C6E",
                      fontSize: "11px", // default
                      name: "Documentation", // default
                      viewInfoHandler: viewInfoHandler
                    }
                  }
                }
              }}
              navbarOptions={{
                visible: true, // default
                bgColor: "#fff", // default
                textColor: "#000", // default
                height: "50px", // default
                profileDropdownData: profile_menu,
                profileDropdownHandler: profileDropdownHandler
              }}
            />

            {/* <Sidebar
            user={props.user}
            routes={props.routes} // routes navigation
            sections={props.sections} // sidebar section
            darkMode={props.darkMode} // working with localstorage, name is darkMode (boolean type)
            sidebarOptions={props.sidebarOptions}
            navbarOptions={props.navbarOptions}
          /> */}
          </div>
        </SidebarProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
