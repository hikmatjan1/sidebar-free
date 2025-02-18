import Sidebar from './navigation/Sidebar';

function App(props) {
  return (
    <div className='max-w-[2200px] m-auto'>
      <Sidebar
        user={props.user}
        routes={props.routes} // routes navigation
        sections={props.sections} // sidebar section
        darkMode={props.darkMode} // working with localstorage, name is darkMode (boolean type)
        sidebarOptions={props.sidebarOptions}
        navbarOptions={props.navbarOptions}
      />
    </div>
  )
}

export default App;
